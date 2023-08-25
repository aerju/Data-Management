import Agent from "../models/AgentModel.js";
import UserAccount from "../models/User'sAccountModel.js";
import User from "../models/UserModel.js";
import Carrier from "../models/CarrierModel.js";
import LOB from "../models/LOBModel.js";
import Policy from "../models/PolicyModel.js";
import fs from "fs";
import csvParser from "csv-parser";
import xlsx from "xlsx";

export const uploadFile = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: "No file uploaded" });
    }
    if (req.file.originalname.endsWith(".csv")) {
      try {
        const { path } = req.file;
        const results = [];
        fs.createReadStream(path)
          .pipe(csvParser())
          .on("data", (data) => {
            results.push(data);
          })
          .on("end", async () => {
            for (const data of results) {
              data.premium_amount = parseInt(data.premium_amount);
              const agent =  Agent.create(data);
              const user =  User.create(data);
              const uerAccount =  UserAccount.create(data);
              const policy =  Policy.create(data);
              const carrier =  Carrier.create(data);
              const lob =  LOB.create(data);
            }
            res.json({ message: "Data uploaded and stored successfully" });
          });
      } catch (error) {
        res.status(500).json({ message: "Data Upload failed" });
      }
    } else if (req.file.originalname.endsWith(".xlsx")) {
      try {
        const workbook = xlsx.readFile(req.file.path);
        const sheetName = workbook.SheetNames[0];
        const sheetData = xlsx.utils.sheet_to_json(workbook.Sheets[sheetName]);

        for (const data of sheetData) {
          data.premium_amount = parseInt(data.premium_amount);
          const agent =  Agent.create(data);
              const user =  User.create(data);
              const uerAccount =  UserAccount.create(data);
              const policy =  Policy.create(data);
              const carrier =  Carrier.create(data);
              const lob =  LOB.create(data);
        }
        res
          .status(200)
          .json({ message: "Data uploaded and stored successfully" });
      } catch (error) {
        res.status(500).json({ message: "Data Upload failed" });
      }
    } else {
      return res.status(400).json({ error: "File not supported" });
    }
  } catch (error) {
    return res.status(400).json({ error: "Data Upload failed" });
  }
};

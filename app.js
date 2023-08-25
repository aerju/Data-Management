import express from "express";
import mongoose from "mongoose";
import router from "./routes/baseRoutes.js";
import cors from 'cors'


const app = express();
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const PORT = 4000;
app.use('/',router)
app.listen(PORT, () => {
    mongoose
      .connect("mongodb://0.0.0.0:27017", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(() => {
        console.log("MongoDB connected");
      })
      .catch((err) => {
        console.error("MongoDB connection error:", err);
      });
  });
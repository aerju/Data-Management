import express from "express";
import {
  addUser,
  deleteUser,
  editUser,
  getPage,
  getUser,
} from "../controllers/userController.js";
import multer from "multer";
import {
  EditAccountInfo,
  addAccountInfo,
  deleteAccountInfo,
  getAccountInfo,
} from "../controllers/userAccountController.js";
import {
  EditPolicyInfo,
  addPolicyInfo,
  deletePolicyInfo,
  getPolicyInfo,
} from "../controllers/policyController.js";

import { uploadFile } from "../controllers/uploadController.js";

const router = express.Router();

const storage = multer.diskStorage({});
const upload = multer({ storage: storage });
router.post("/upload", upload.single("file"), uploadFile);

router.get("/", getPage);


router.post("/add-user", addUser);
router.get("/get-user", getUser);
router.put("/edit-user/:id", editUser);
router.delete("/delete-user/:id", deleteUser);

router.post("/add-account", addAccountInfo);
router.get("/get-account", getAccountInfo);
router.put("/edit-account/:id", EditAccountInfo);
router.delete("/delete-account/:id", deleteAccountInfo);

router.post("/add-policy", addPolicyInfo);
router.get("/get-policy", getPolicyInfo);
router.put("/edit-policy/:id", EditPolicyInfo);
router.delete("/delete-policy/:id", deletePolicyInfo);

export default router;

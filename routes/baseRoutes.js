import express from "express";
import {
  addUser,
  deleteUser,
  editUser,
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

router.route("/user").post(addUser).get(getUser);
router.route("/user/:id").put(editUser).delete(deleteUser);

router.route("/account").post(addAccountInfo).get(getAccountInfo);
router.route("/account/:id").put(EditAccountInfo).delete(deleteAccountInfo);

router.route("/policy").post(addPolicyInfo).get(getPolicyInfo);
router.route("/policy/:id").put(EditPolicyInfo).delete(deletePolicyInfo);

export default router;

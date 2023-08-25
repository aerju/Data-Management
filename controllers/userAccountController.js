import UserAccount from "../models/User'sAccountModel.js";

export const addAccountInfo = async (req, res) => {
  try {
    const accountInfo = new UserAccount(req.body);
    const result = await accountInfo.save();
    res.json({ message: "User Account saved " });
  } catch (error) {
    res.status(400).json({ error: "Failed to save user account" });
  }
};

export const getAccountInfo = async (req, res) => {
  try {
    const accountInfo = await UserAccount.find({});
    res.json({ AccountInfo: accountInfo });
  } catch (error) {
    res.status(400).json({ error: "Failed to get user account details" });
  }
};

export const EditAccountInfo = async (req, res) => {
  try {
    const accountData = req.body;
    const accountID = req.params.id;
    const result = await UserAccount.updateOne({ _id: accountID }, accountData);
    res.json({ message: "User Account updated " });
  } catch (error) {
    res.status(400).json({ error: "Failed to edit user account" });
  }
};

export const deleteAccountInfo = async (req, res) => {
  try {
    const accountID = req.params.id;
    const result = await UserAccount.deleteOne({ _id: accountID });
    res.json({ message: "User account deleted " });
  } catch (error) {
    res.status(400).json({ error: "Failed to delete user account" });
  }
};

import mongoose from "mongoose";

const userAccountSchema = new mongoose.Schema({
  account_name: String,
  account_type: String,
  phone:  String,
  email: String,
  address: String,
  city: String,
  state: String,
  zip: String,
});

const UserAccount = mongoose.model("UserAccount", userAccountSchema);

export default UserAccount;

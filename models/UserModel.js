import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  userType: String,
  gender: String,
  firstname: String,
});

const User = mongoose.model("User", userSchema);

export default User;

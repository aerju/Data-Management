import User from "../models/UserModel.js";





export const addUser = async (req, res) => {
  try {
    const userData = req.body;
    const user = new User(userData);
    const result = await user.save()
    res.json({ message: "User saved " });
  } catch (error) {
    res.status(400).json({ error: "Failed to save user" });
  }
};

export const getUser = async (req, res) => {
  try {
    const users = await User.find({});
    res.json({ users: users });
  } catch (error) {
    res.status(400).json("Failed to get user data");
  }
};

export const editUser = async (req, res) => {
  try {
    const userData = req.body;
    const userID = req.params.id;
    const result = await User.updateOne({ _id: userID }, userData);
    res.json({ message: "User updated " });
  } catch (error) {
    res.status(400).json({ error: "Failed to edit user" });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const userID = req.params.id;
    const result = await User.deleteOne({ _id: userID });
    res.json({ message: "User deleted " });
  } catch (error) {
    res.status(400).json({ error: "Failed to delete user" });
  }
};

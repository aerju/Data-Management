import express from "express";
import mongoose from "mongoose";

const app = express();
const PORT = 4000;
app.listen(PORT, () => {
    mongoose
      .connect("mongodb+srv://42arju:arju123@cluster0.zgj4mct.mongodb.net/", {
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
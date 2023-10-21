import express from "express";
import mongoose from "mongoose";
const app = express();
import "dotenv/config";

app.listen(3000, () => {
  console.log("Listening on port 3000");
});

mongoose
  .connect(process.env.MONGODB_URL as string)
  .then(() => {
    console.log("Connected to mongodb successfully!");
  })
  .catch((err) => {
    console.error(err);
  });

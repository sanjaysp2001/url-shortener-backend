import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import { configDotenv } from "dotenv";
configDotenv();

const app = express();
const port = process.env.CUSTOM_PORT || 8000;
const uri = process.env.MONGO_URI;

import urlController from "./controllers/url.controller.js";

// For parsing application/json
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use("/", urlController);

app.get("/", (req, res) => {
  res.send("Server is running!");
});


mongoose
  .connect(uri)
  .then((connection) => {
    console.log("Database connection successful");
    app
      .listen(port, () => {
        console.log(`Server is running!`);
      })
      .on("error", (err) => {
        console.log("Server creation failed:\n", err);
      });
  })
  .catch((err) => console.log("Error when connecting to Database:\n", err));

export default app;

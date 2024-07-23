import express from "express";
import cors from "cors";
import { configDotenv } from "dotenv";
configDotenv();

const app = express();
import connectToDB from "./database.js";
const port = process.env.PORT || 8000;
import urlController from "./controllers/url.controller.js";

// For parsing application/json
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use("/url", urlController);

connectToDB
  .then((connection) => {
    console.log("Database connection successful");
    app
      .listen(port, () => {
        console.log(`Server is running on ${port}`);
      })
      .on("error", (err) => {
        console.log("Server creation failed:\n", err);
      });
  })
  .catch((err) => console.log("Error when connecting to Database:\n", err));

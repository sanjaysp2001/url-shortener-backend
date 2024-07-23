import express from "express";
import URLModel from "../models/url.model.js";
import counter from "../models/counter.model.js";
import { encode, decode } from "../helper/base58.js";
const urlController = express.Router();

const getNextSequenceValue = async () => {
  let sequence = await counter.findByIdAndUpdate(
    { _id: "669f34ccaeb9c80fbc15f9db" },
    { $inc: { seq: 1 } },
    { new: true }
  );
  return sequence.seq;
};
urlController.post("/createurl", (req, res) => {
  const longURL = req.body.url;
  URLModel.findOne({ originalURL: longURL })
    .then(async (url) => {
      if (!url) {
        let uniqueId = await getNextSequenceValue();
        let createdURL = {
          uid: uniqueId,
          originalURL: longURL,
          shortURL: encode(uniqueId),
          createdAt: new Date(),
        };
        //console.log(encode(uniqueId));
        url = await URLModel.create(createdURL);
        console.log(url);
      }
      res.status(200).json({
        message: "Success! Short URL generated successfully",
        shortURL: url.shortURL,
      });
    })
    .catch((error) => {
      res.status(500).json({ message: `Error: ${error.message}` });
    });
});

export default urlController;

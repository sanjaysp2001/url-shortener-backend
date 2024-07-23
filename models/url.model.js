import mongoose from "mongoose";
const urlSchema = new mongoose.Schema({
  uid: {
    type: Number,
  },
  originalURL: {
    type: String,
  },
  shortURL: {
    type: String,
    default: "",
  },
  createdAt: {
    type: Date,
  },
});


// urlSchema.pre("save", async function (next) {
//   var doc = this;
//   counter
//     .findByIdAndUpdate(
//       { _id: "669f34ccaeb9c80fbc15f9db" },
//       { $inc: { seq: 1 } }
//     )
//     .then(() => {
//       counter.findById("669f34ccaeb9c80fbc15f9db").then((res) => {
//         doc.uid = res.seq;
//         doc.createdAt = new Date();
//       });
//     });
//   next();
// });
const URLModel = mongoose.model("URL", urlSchema);

export default URLModel;

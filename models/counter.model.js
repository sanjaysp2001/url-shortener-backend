import mongoose from "mongoose";
const CounterSchema = new mongoose.Schema({
  seq: { type: Number, default: 10000000000 },
});

var counter = mongoose.model("counter", CounterSchema);

export default counter;

const mongoose = require("mongoose");
const validator = require("validator");

const MySchema = new mongoose.Schema(
  {
    date: { type: String, required: true },
    time: { type: String, default: new Date().getTime() },
    day: { type: String, required: true },
    month: { type: String, required: true },
    expenseTime: { type: String, required: true },
    timeModulation: { type: String, required: true },
    foodName: { type: String, required: true },
    placeName: { type: String, required: true, default: "NA" },
    quantity: { type: Number, required: true },
    price: { type: Number, required: true },
    totalPrice: { type: Number, required: true },
    role: { type: String, default: "admin" },
    createdAt: { type: String, default: new Date() },
  },
  { collection: "myDailyTask", versionKey: false }
);
const MySchemaModel = mongoose.model("myDailyTask", MySchema);
module.exports = { MySchemaModel };

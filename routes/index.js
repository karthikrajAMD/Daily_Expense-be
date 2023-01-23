var express = require("express");
var router = express.Router();
const { default: mongoose } = require("mongoose");
const { dbUrl } = require("../config/dbconfig.js");
const { MySchemaModel } = require("../Schema/MySchema");
/* GET home page. */
mongoose.connect(dbUrl);
router.get("/", function (req, res, next) {
  res.send({ statusCode: 200, message: "Hello dailyTask" });
  res.render("index", { title: "Express" });
});
router.get("/getRecords", async (req, res) => {
  try {
    let MyRecords = await MySchemaModel.find().sort({ date: 1 });
    res.send({ statusCode: 200, MyRecords });
    // res.send({ statusCode: 200, manager });
  } catch (err) {
    res.send({ statusCode: 500, message: "Internal server error" });
  }
});
router.post("/dailyrecord", async (req, res) => {
  try {
    let newUser = await MySchemaModel.create(req.body);
    res.send({ statusCode: 200, message: "Data submitted successfully" });
  } catch (err) {
    console.log(err);
    res.send({ statusCode: 500, message: "Internal server error" });
  }
});
module.exports = router;

const mongodb = require("mongodb");
const mongoose = require("mongoose");
const dbName = "MyDailyExpense";
const dbUrl = `mongodb+srv://Raja_AMD:RAJAamd123@cluster0.rhksdpw.mongodb.net/${dbName}`;
mongoose.set("strictQuery", false);
module.exports = { mongodb, mongoose, dbName, dbUrl };

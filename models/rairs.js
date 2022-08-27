const mongoose = require("mongoose");





const userSchema = new mongoose.Schema(


  {
    item:"String",
    price: Number,
     date: "String"
  }

  


     



)

module.exports = mongoose.model("rairs", userSchema);
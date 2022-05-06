const mongoose = require("mongoose");
const roomSchema = mongoose.Schema({
 
    roomtype: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    capacity: {
      type: Number,
      required: true,
    },
    dates: {
      type: [Object],
      
    },
    image: {
      type: String,
      
    },
  });

  module.exports = mongoose.model("room", roomSchema);
const { json } = require("express/lib/response");
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
    ratings:{
      type: String,
    },
    capacity: {
      type: Number,
      required: true,
    },
    // availableFrom: {
    //   type: String,//for now string
      
    // },
    image: {
      type: String,
      
    },
    bookings: {

      type:[Object]

    }
    
  });

  module.exports = mongoose.model("room", roomSchema);
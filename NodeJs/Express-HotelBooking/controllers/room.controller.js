const roomModel = require("../models/room.model");
const hotelModel = require("../models/hotel.model");
exports.addRoomToHotel = function (req, res) {
  hotelModel
    .findOne({ _id: req.body.hotel_id }, function (err, hotel) {
      roomModel
        .findOne({ _id: req.body.room_id }, function (err, room) {
          console.log("Room" + room);
          hotel.rooms.push(room);
          hotel.save();
        })
        .then((data) => {
          console.log(data);
        });
    })
    .then((data) => {
      res.json(data);
      console.log("Success" + data);
    })

    .catch((err) => {
      console.log("Error");
    });
};

exports.getRoomsByHotel = function (req, res) {
  hotelModel
    .findById(req.body.id)
    .then((result) => {
      res.json(result.rooms);
    })
    .catch((err) => {
      res.json("error");
    });
};

exports.addRoom = function (req, res) {
  const room = new roomModel({
    roomtype: req.body.room_type,

    price: req.body.price,

    capacity: req.body.capacity,

    dates: req.body.dates,
    images: req.body.images,
    availablity: req.body.availablity,
  })
    .save()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.send(err);
    });
};

const express=require('express');
const router= express.Router();
const hotelController= require('../controllers/hotel.controller');
const roomController= require('../controllers/room.controller');
const cityController=require('../controllers/city.controller');
router.post('/addHotel',hotelController.addHotel);
router.post('/addRoom',roomController.addRoom);
router.post('/addCity',cityController.addCity);
router.post('/addRoomToHotel',roomController.addRoomToHotel);

module.exports=router;
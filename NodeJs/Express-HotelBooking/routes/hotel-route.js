const express=require('express');
const router= express.Router();
const cityController=require('../controllers/city.controller');
const hotelController=require('../controllers/hotel.controller');
const roomController=require('../controllers/room.controller');
router.get('/getAllCities', cityController.getAllCities);
router.post('/getHotelsByCity',hotelController.getHotelsByCity);
router.get('/getAllHotels',hotelController.getAllHotels);
router.post('/getRoomsByHotel',roomController.getRoomsByHotel);
router.post('/getRoomDetailsById',roomController.getRoomDetailsById);
router.get('/getAllRooms',roomController.getAllRooms);


module.exports=router;
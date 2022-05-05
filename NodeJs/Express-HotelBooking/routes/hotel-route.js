const express=require('express');
const router= express.Router();
const cityController=require('../controllers/city.controller');
const hotelController=require('../controllers/hotel.controller');
const roomController=require('../controllers/room.controller');
router.get('/getAllCities', cityController.getAllCities);
router.post('/getHotelsByCity',hotelController.getHotelsByCity);

router.post('/getRoomsByHotel',roomController.getRoomsByHotel);



module.exports=router;
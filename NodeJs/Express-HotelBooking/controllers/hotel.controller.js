const hotelModel = require('../models/hotel.model');

exports.addHotel=function(req,res){
   const hotel = new hotelModel({
    name: req.body.name,
    address: req.body.address,
    city: req.body.city,
    state: req.body.state,
    contact_no: req.body.contact_no,
    image: req.body.image

    

   }).save()
   .then((result)=>{
        res.send(result);
   }).catch((err)=>{
       res.send(err);
   })
   ;
}

exports.getHotelsByCity = function (req, res) {
 //   console.log("Heyy req"+req.body.city);
    hotelModel.find({ city: req.body.city}).then((data) => {
      //  console.log("Heyy"+data);
        res.json(data);
    }).catch((err) => {
        console.log(err);
        res.status(400).send("Error");
    })
    
    
    };
      
    
  
  







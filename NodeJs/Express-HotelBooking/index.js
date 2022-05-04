const express = require('express');
const app = express();
const cors=require('cors');
const userRoute= require('./routes/user.route');
const secureRoute = require('./routes/secure-routes');
const bodyParser= require('body-parser');
const config = require('./config/db.config');
const passport = require('passport');

app.use(cors());
// app.use('/', userRoute);

// app.use((req,res,next)=>{
//     res.setHeader("Access-Control-Allow-Origin","*")
//     res.setHeader("Access-Control-Allow-Methods","GET,POST,PUT,PATCH,DELETE")
//     res.setHeader("Access-Control-Allow-Headers","Content-Type,Authorization")
//     next()
// })




 app.use('/user/auth', passport.authenticate('jwt', { session: false }), secureRoute);
app.use(bodyParser.json());

app.listen(8000,()=>{
    console.log('listening on http://localhost:8000');
});

 app.use('/user',userRoute);


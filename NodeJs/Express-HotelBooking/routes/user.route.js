const express=require('express');
const router= express.Router();
const passport = require('passport');
const userController = require('../controllers/user.controller');
const jwt = require('jsonwebtoken');


// router.post('/register',userController.registerUser);
// router.post('/login',userController.loginUser);
// router.get('/users',userController.getAllUsers);
// router.post('/register',userController.registerUser);
// router.post('/login',userController.loginUser);




router.post(
    '/signup',
    async (req, res, next) => {
      passport.authenticate(
        'signup',
        async (err, user, info) => {
          try {
            if (!user) {
               res.status(400).send("Email already registered");  
            }
            else if(err){
              res.status(400).send("Error. Please try again later");  
            }
            else{
               res.json({
                    message: 'Registered Successfully',
                   user: user
                });
                 res.json();
            }
          } catch (error) {
            return next(error);
          }
        }
      )(req, res, next);
    }
  );














  router.post(
    '/login',
    async (req, res, next) => {
      passport.authenticate(
        'login',
        async (err, user, info) => {
          try {
            if (err || !user) {
              const error = new Error('An error occurred.');
              res.status(400).send("Invalid Credentials");  
              return next(error);
            }
  
            req.login(
              user,
              { session: false },
              async (error) => {
            
                if (error) 
               // return next(error);
               return res.status(400).send("Error in JWT Token Generation");
              //  res.json(error);
  
                const body = { _id: user._id, email: user.email };
                const token = jwt.sign({ user: body }, 'TOP_SECRET');
                const msg="Logged In";
                return res.json({ token,msg,_id:user._id});
              }
            );
          } catch (error) {
            return next(error);
          }
        }
      )(req, res, next);
    }
  );


  
  



























module.exports=router;
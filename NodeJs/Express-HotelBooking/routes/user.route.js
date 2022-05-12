const express=require('express');
const router= express.Router();
const passport = require('passport');
const userController = require('../controllers/user.controller');
const jwt = require('jsonwebtoken');
const refreshSchema=require('../models/refreshToken.js')
require('dotenv').config()
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
             // console.log(info.message);
             let message=info.message;
              const error = new Error('An error occurred.');
            return  res.send({msg:message});  
            // return res.send(info.message);
              // return next(error);
            }
  
            req.login(
              user,
              { session: false },
              async (error) => {
            
                if (error) 
                return next(error);
              // return res.status(400).send("Error in JWT Token Generation");
              //  res.json(error);
  
                const body = { _id: user._id, email: user.email };

                // if(user.name ===admin&&user.password ===admin){
                //     role="admin";
                // }
                // else{
                //   role="user";
                // }

                let token = "Bearer "+generateAccessToken(body)+" "; //accesstoken to check whetehr login
                let refreshToken=jwt.sign({ user: body }, process.env.REFRESH_SECRET,{ expiresIn: '60d' });
                const ref_token=new refreshSchema({refreshToken:refreshToken})
                await ref_token.save();
                token+=refreshToken;
                const msg="Logged In";
                return res.send({token,msg,_id:user._id,role:user.role});
              //  const token = jwt.sign({ user: body }, 'TOP_SECRET');
                // const msg="Logged In";
                // return res.json({ token , msg, _id:user._id});
              }
            );
          } catch (error) {
            return next(error);
          }
        }
      )(req, res, next);
    }
  );


  router.delete("/removeToken",async (req,res)=>{
    let ref_Token=req.query.refreshToken
    await refreshSchema.deleteOne({refreshToken:ref_Token})
    res.send("Deleted")
  })


 

  router.get("/getToken",async(req,res)=>{
    let ref_Token=req.query.refreshToken;

    console.log("reft "+ req.query.refreshToken);
    if (ref_Token == null) 
    return res.send("Empty Token")
    let db_ref_Token= await refreshSchema.findOne({refreshToken:ref_Token})
    if(db_ref_Token==null) return res.send("Please Login")
    if (db_ref_Token.refreshToken!==ref_Token) return res.send("Please Login")
    jwt.verify(ref_Token,process.env.REFRESH_SECRET,(err,refreshObject)=>{
      if(err){
        return res.send(err.message)
      }
      if(refreshObject==null){
        return res.send("Refresh JWT Expired")
      }
      console.log("Here inside Refresh"+refreshObject.user._id);
      let token="Bearer "+generateAccessToken(refreshObject.user)+" "+ref_Token
    
      return res.send({"token":token,"role":refreshObject.user.role})
    })
  })

  
  









  function generateAccessToken(body){
    return jwt.sign({ user: body }, process.env.TOP_SECRET,{ expiresIn: '20s' })
  }



  function authenticateJwt(req,res,next){
    const header=req.header('authorization')
    const token=header && header.split(' ')[1];
    if(token==null){
      return res.send("please log in")
    }
    jwt.verify(token,process.env.TOP_SECRET,(err,payload)=>{
      if(err){
        return res.send("IV_JWT")
      }
      req.user=payload.user
      next()
    })
  }
  













module.exports=router;
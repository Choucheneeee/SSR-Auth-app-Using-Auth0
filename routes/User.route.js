const route=require("express").Router();
const userModel=require('../models/User.model');
const { requiresAuth } = require('express-openid-connect');



route.get('/',(req,res)=>{
    if(req.oidc.isAuthenticated()){
        res.send('Hello '+req.oidc.user.name+'<a href="/logout">Logout</a>')
    }
    else{
        res.send('Hello guest <a href="/login">Login</a>')
    }
}
);
route.get('/profile', requiresAuth(), (req, res) => {
    res.send(JSON.stringify(req.oidc.user));
  });
route.post('/register',(req,res)=>{
    const {email,password,username}=req.body;
    userModel.register(email,password,username)
    .then(data=>{
        res.json(data);
    })
    .catch(err=>{
        res.json(err);
    })
    
    

    
}
);
  




module.exports=route
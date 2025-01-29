const express=require('express');
const app=express();
const env=require('dotenv');
const port=process.env.PORT || 3000;
const session=require("express-session")
env.config();
const MongoDbStore=require("connect-mongodb-session")(session)
var cookieParser = require('cookie-parser');
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const user=require('./routes/User.route');
const { auth } = require('express-openid-connect');
  const config = {
    authRequired: false,
    auth0Logout: true,
    secret:process.env.secret,
    baseURL: process.env.baseURL,
    clientID: process.env.clientID,
    issuerBaseURL:process.env.issuerBaseURL
  };
app.use(auth(config));
app.use('',user);

app.listen(port,()=>{
    console.log('Server is running on port 3000');
}
)
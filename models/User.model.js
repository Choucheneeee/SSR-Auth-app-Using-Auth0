const moong=require("mongoose")
const bcrypt=require('bcrypt')
require('dotenv').config();
let schemaUser=moong.Schema({
    username:String,
    email:String,
    password:String,

})

var User=moong.model('user',schemaUser)
moong.connect(process.env.url)
  .then(() => {
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err);
    process.exit(1); 
  });
  

exports.register = async (email, password,username) => {
  return new Promise((resolve,reject)=>{
    User.findOne({ email: email }).then((user) => {
      if (user) {
        reject("email already exist")
      }
      else{
        bcrypt.hash(password, 10).then((hash) => {
          User.create({
            email: email,
            password: hash,
            username:username
          }).then((user) => {
            resolve(user)
          });
        });
      }
    })
})}

exports.login = async (email, password) => {
  return new Promise((resolve,reject)=>{
    User.findOne({ email: email }).then((user) => {
      
      if (!user) {
        reject(null);
      }
      bcrypt.compare(password, user.password).then((match) => {
        if (!match) {
          reject("wrong password")
                }
        resolve(user)
      });
    })
}
  )}



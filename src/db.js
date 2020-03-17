var mongo = require('mongodb');
var monk = require('monk');
var db = monk(`mongodb+srv://josegerdes:oiD0BWQ3BIVwlTh9@cluster0-con3n.mongodb.net/test?retryWrites=true&w=majority`);

db.then(() =>{
  console.log("connection success");
}).catch((e)=>{
  console.error("Error !",e);
});

module.exports = db;
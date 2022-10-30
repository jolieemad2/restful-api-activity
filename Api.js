var mongoose = require('mongoose');

var express = require('express');

var router = express.Router();


const connectionString = "mongodb+srv://jolie_emad:Asdfg2821998@cluster0.42fsqkm.mongodb.net/Shop";



const connectionParams = {

  useNewUrlParser: true,

  useUnifiedTopology: true,

};



mongoose

  .connect(connectionString, connectionParams)

  .then(() => {

    console.log("connected succefully");

  })

  .catch((err) => {

    console.log(err, "error while connecting");

  });



module.exports = router;
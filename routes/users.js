var express = require('express');
var router = express.Router();

var service = require("../controllers/ceams-token-service-master.js")
const { logger, LoggingLevels } = require('../config/winston');

var accesstoken = '';
var resultresponse = '';

/* GET users listing. */
router.get('/', function(req, res, next) {
  const username = "admin";
  const pwd = "password";
  logger.log( LoggingLevels.INFO, +" Username :"+ username, "  pwd: "+ pwd)
  const account = {
    username: username,
    password: pwd,
     };
     service.getTokenService(account).then( result =>{
      console.log(" 100 rubeeeeees:  ",result)
      res.status(200);
      resultresponse = JSON.parse(result);
      accesstoken= resultresponse.access_token;
      res.send(accesstoken);
    })
    .catch(err => {
      console.log("Error --->", err)
      res.status(500);
      res.json("Server Down");
    });  
  });

  

module.exports = router;

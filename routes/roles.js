var express = require('express');
var router = express.Router();

var service = require("../services/err.js")
const { logger, LoggingLevels } = require('../config/winston');
const { options } = require('../app.js');

/* GET Role Details. */
  router.get('/', function(req, res, next) {
    const username = "awsadmin";
    //const customproperty2 = " ";
    //  const requestedObject = " ";
    //  const roletype = " ";
    //  const max = " ";
    logger.log( LoggingLevels.INFO, +" Username :"+ username)
     //logger.log( LoggingLevels.INFO, +" Username :"+ username, "  customproperty2: "+ EAMTeam, 
     //"requestedObject : "+ entitlement_values,users, "roletype : "+ 4,"max : "+ 50)
     const account = {
       username: username
    //    customproperty2: EAMTeam,
    //    requestedObject: entitlement_values,users,
    //    roletype: 4,
    //    max: 50,
     };
     service.getRoleDetails(account).then( result =>{
       console.log("getting till here: ",result)
       res.status(200);
       res.json(JSON.parse(result));
   })
     .catch(err => {
        console.log("Error --->", err)
        res.status(500);
        res.json("Server Down");
   }); 
 });

 module.exports = router;
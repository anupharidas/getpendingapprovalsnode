const https = require('https');
const config = require('../config/config');
const HttpStatus = require("http-status-codes");
const users = require("../routes/roles.js");
const tokenService = require('../services/getTokenService');
const service = require('../services/roleDetails')


getRoleDetails = (req,res) =>{
    var token;
    tokenService.getAdminToken().then(result =>{
        var body =
        {username : req.body.username};

        token = result;

           service.callSaviynt(req.body.username, token).then(saviyntResp =>{
                     
           if(undefined == saviyntResp || null == saviyntResp || "" == saviyntResp){
             res.json("empty&&&&&&&&")
           }else{
           res.status(200)
           res.json(saviyntResp);
           }
         }).catch(err=>{
          res.status(400);
          res.json("unHappy in Saviynt getRoles call  "+ err); 
         })
         
          
    }
    ).catch(err =>{
      res.status(404);
          res.json("unHappy in token API call  "+ err); 
    })
  }
module.exports = {
    getRoleDetails,
    };
const https = require('https');
const config = require('../config/config');
const HttpStatus = require("http-status-codes");
const { Console } = require('console');

const callSaviynt = (username, token )=>{
    var body =
        {username : username};

const options = {
    hostname: `${config.SVNYT_SERVICES6_URL}`,
    path: `${config.LOGIN_ENDPOINT}`,
    method: 'POST',
    headers: {
        'Authorization': 'Bearer ' + token,
        'Content-Type': 'application/json',
        'Content-Length': JSON.stringify(body).length,
          },
    rejectUnauthorized: false,
    requestCert: true,
    agent: false,
 };

 return new Promise((resolve, reject) => {
        const httpsReq = https.request(options, (response) => {
          let result = '';
          response.on('data', chunk => {
            result += chunk;
                 });
          response.on('end', () => {
           console.log('Role Details: Promise resolved from Saviynt',result);

                if (result && JSON.parse(result).Roledetails.length > 0) { 
                    return resolve(JSON.parse(result));
                }
             
             return reject("Saviynt returned no data");
           });
           response.on('error', err => {
             console.log('Role Details: Promise rejected from Saviynt',result);
             reject(err);
           });
         });
        
         httpsReq.write((JSON.stringify(body)));
         httpsReq.end();
       });                       

}

module.exports ={
    callSaviynt,
    };
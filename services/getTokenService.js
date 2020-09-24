const https = require('http');
const config = require('../config/config');
const HttpStatus = require("http-status-codes");


getAdminToken = () =>{
    const account = {
        "username":"admin",
        "password":"password"
    }
    const options = {
        hostname: 'ec2-3-236-143-69.compute-1.amazonaws.com',
        path: '/users',
        port:3000,
        method: 'GET',
        headers: {
             'Content-Type': 'application/json',
         },
        rejectUnauthorized: false,
        requestCert: true,
       agent: false,
     };

     return new Promise((resolve, reject) => {
        const httpsReq = https.request(options, response => {
          let result = '';
          response.on('data', chunk => {
            result += chunk;
          });
          response.on('end', () => {
                        
             if (response.statusCode === HttpStatus.OK) 
             { var access_token = JSON.parse(result).access_token; 
                if (access_token.length > 0) { 
                    return resolve(access_token);
                 } } 
                 return reject(response.statusCode);
           });
           response.on('error', err => {
                 reject(err);
           });
         });  
         
         httpsReq.end();
       });
  
}

module.exports = {
    getAdminToken,
  };
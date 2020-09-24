// const { access } = require('fs');
// const https = require('https');
// const config = require('../config/config');
// const { logger, LoggingLevels } = require('../config/winston');
// const express = require('express');
// const async = require('async');
// const { getTokenService } = require('./ceams-token-service-master');
// const router = express.Router();
// const tokenService = require('../services/getTokenService');

// /**
//  * Service method to get token for a context from Saviynt
//  * @param {*} account
//  */

//  const getRoleDetailsForUser = (req, res) =>{ 
//      logger.log(
//      LoggingLevels.INFO,
//      'Role Details: Request to get Role Details from Saviynt for ',
//      );
//      tokenService.getAdminToken().then(token =>{
//        console.log("Token is coming &&&&&&&&&&&&&&&", token)


//      }).catch(err => {
//       console.log("Error --->", err)
//       res.json(err)
//     });  
    
//     //  const options = {
//     //      hostname: `${config.SVNYT_SERVICES_URL}`,
//     //      path: `${config.LOGIN_ENDPOINT}`,
//     //      method: 'GET',
//     //      headers: {
//     //     'Authorization': 'Bearer' + result  ,
//     //     'Content-Type': 'application/json',
//     //       },
//     //      rejectUnauthorized: false,
//     //      requestCert: true,
//     //     agent: false,
//     //   };
    
//     //    return new Promise((resolve, reject) => {
//     //     const httpsReq = https.request(options, response => {
//     //       let result = '';
//     //       response.on('data', chunk => {
//     //         result += chunk;
//     //       });
//     //       response.on('end', () => {
//     //         logger.log(
//     //            LoggingLevels.INFO,
//     //            'Role Details: Promise resolved from Saviynt',
//     //          );
//     //          resolve(result);
//     //        });
//     //        response.on('error', err => {
//     //          logger.log(
//     //            LoggingLevels.ERROR,
//     //            'Role Details: Promise rejected from Saviynt',
//     //          );
//     //          reject(err);
//     //        });
//     //      });
    
//     //      httpsReq.write(JSON.stringify(account));
//     //      httpsReq.end();
//     //    });
  
//  }

// module.exports = {
//   getRoleDetailsForUser,
// };

// const https = require('https');
// const config = require('../config/config');

// /**
//  * Service method to get token for a context from Saviynt
//  * @param {*} account
//  */
// const getTokenService = account => {
//   console.log(
//     'Token Service: Request to get Token from Saviynt for ',
//   );
//   const options = {
//     //hostname: `${config.SVNYT_SERVICES_URL}`,
//     path: 'http://ec2-3-236-143-69.compute-1.amazonaws.com:3000/users',
//     method: 'GET',
//     headers: {
//       'Content-Type': 'application/json',
//       'Content-Length': JSON.stringify(account).length,
//     },
//     rejectUnauthorized: false,
//     requestCert: true,
//     agent: false,
//   };
//   return new Promise((resolve, reject) => {
//     const httpsReq = https.request(options, response => {
//       let result = '';
//       response.on('data', chunk => {
//         result += chunk;
//       });
//       response.on('end', () => {
//         console.log(
//           'Token Service: Promise resolved from Saviynt',
//         );
//         resolve(result);
//       });
//       response.on('error', err => {
//         console.log(
//           'Token Service: Promise rejected from Saviynt',
//         );
//         reject(err);
//       });
//     });

//     httpsReq.write(JSON.stringify(account));
//     httpsReq.end();
//   });
// };

// module.exports = {
//     getTokenService,
//  };

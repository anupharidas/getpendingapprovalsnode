const https = require('https');
const config = require('../config/config');
const { Console } = require('console');

/* GET Approval Details from Saviynt*/

const callSaviynt = (username, max, token) => {
    var body =
    {
        username: username,
        max: max
    };

    const options = {
        hostname: `${config.SVNYT_SERVICES_URL}`,
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
                console.log('Approval Details: Promise resolved from Saviynt', result);

                return resolve(JSON.parse(result));

            });
            response.on('error', err => {
                console.log('Approval Details: Promise rejected from Saviynt', result);
                reject(err);
            });
        });

        httpsReq.write((JSON.stringify(body)));
        httpsReq.end();
    });

}

module.exports = {
    callSaviynt,
};
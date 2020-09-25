// var express = require('express');
// var service = require("../services/getpendingApprovalService.js")
// var router = express.Router();

// /* Router for GET Pending Approval Details. */
// router.get('/', function (req, res, next) {
//   const username = "anup";
//   const max = 15;

//   const account = {
//     username: username,
//     max: max
//   };

//   service.getPendingApprovalDetails(account).then(result => {
//     res.status(200);
//     res.json(JSON.parse(result));
//   })
//     .catch(err => {
//       console.log("Error --->", err)
//       res.status(500);
//       res.json("Server Down");
//     });
// });

// module.exports = router;
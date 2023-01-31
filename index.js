"use strict";
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const mailAPI = require("./routes/mail-api.js");

// Express body parser
app.use(cors());
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    limit: "50mb",
    extended: false,
    parameterLimit: 50000,
  })
);

// use the routes specified in route folder
app.use("/api/v1", mailAPI);

const port = process.env.PORT || 5000;

//listen to the server
app.listen(port, function () {
  console.log(`listening to the port ${port} .....`);
});

// request:
// {
//   "from": "jknithin9332@gmail.com",
//   "to": [
//       "jknithin6029@gmail.com"
//   ],
//   "subject": "Mail from Nodemailer",
//   "message": "Sending an email using nodemailer package."
// }

// response:

// {
//   "status": true,
//   "payload": "Message sent: <5c0e45a2-ef68-1d76-8f4a-f209b51ebf3d@gmail.com>"
// }

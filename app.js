// dotenv
const dotenv =require('dotenv');
dotenv.config()
const express = require('express');
const app = express();
const router = express.Router();
const con = require("./config");
const emailListRoute = require('./routes/emailListRoutes');

app.use(express.json());
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
  });

app.use('/clientEmail',emailListRoute);

app.listen(process.env.PORT );
console.log('Web Server is listening at port ' + (process.env.PORT ));

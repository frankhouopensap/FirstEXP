
const express = require('express');
const app = express();
const bodyParser =require('body-parser');
//  const userService = require('./Service/userService');
const router = require('./Router/router');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
console.log('App is running!');
app.use('/users', router);
app.listen(3001);







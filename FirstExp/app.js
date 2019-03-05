
const express = require('express');
const app = express();
const bodyParser =require('body-parser');
//  const userService = require('./Service/userService');
const router = require('./Router/router');
console.log('App is running!');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/users', router);
//  userController(app);
 app.listen(3001);
 console.log("hello");






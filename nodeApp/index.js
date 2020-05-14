var express = require ('express');
var router = require ('./router');
var mysql = require('./mysql');
var app =express();
require('dotenv').config();



app.use ('/',router);
var {host,user,password,database}= process.env;
console.log('---->',host, user, password, database);

mysql.connect(host,user,password,database);


app.listen(3000,()=>{
    console.log("Server running on port 3000");
})
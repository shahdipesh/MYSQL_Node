var mysql = require('./mysql');
var query= require('./queries');


var service={
  

    async getAllUser(){
     var data = await mysql.ps(query.getAllUser);
     return data;
    },
    async getUserById(id){
        console.log('ID::: ',id);
        var data = await mysql.ps(query.getUserById,id);
        return data;
    }


}


module.exports=service;
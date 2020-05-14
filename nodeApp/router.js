var express = require ('express');
var userService=require('./user.service');
var router = express.Router();


router.get ('/user',async (req,res)=>{
    const id = req.query.id;
if (id){
     const response = await userService.getUserById(id);
       return  res.send(response);
}
     const allUSer = await userService.getAllUser();
     console.log('--------ok---');
     res.send(allUSer);
}

)



module.exports = router;
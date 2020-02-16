
var express=require('express');
var router=express.Router(); // Router has only one which have all the function
var service=require('../models/service_model'); //Name of the model

router.post('/',function(req,res,next){
    service.deleteAllService(req.body,function(err,rows){
         if(err)
         {
             res.json(err);
         }
         if(rows)
         {
             res.json(rows);
         }
     });
});
module.exports=router;
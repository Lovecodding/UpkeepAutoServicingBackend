var express=require('express');
var router=express.Router(); // Router has only one which have all the function
var vehicle=require('../models/vehicle_assigned_model'); //Name of the model
router.get('/:vehicle_assigned_id',function(req,res,next){
    console.log(req.params.vehicle_assigned_id);
    vehicle.getVehicleById(req.params.vehicle_assigned_id,function(err,rows){
        if(err)
        {
            console.log("err");
            res.json(err);
        }
        if(rows)
        {
            console.log("rows");
            res.json(rows);
        }
    });
});

module.exports=router;
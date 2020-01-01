var express=require('express');
var router=express.Router(); // Router has only one which have all the function
var employee=require('../models/employee_models'); //Name of the model
var path=require('path');
    router.get('/',function(req,res,next){
    employee.getAllEmployee(function(err,rows){
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
router.get('/:employee_id',function(req,res,next){
    employee.getEmployeeById(req.params.employee_id,function(err,rows){
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

 router.post('/',function(req,res,next){
    employee.AddEmployee(req.body,function(err,rows){                   //Insert
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
 router.delete('/:employee_id',function(req,res,next){
    employee.deleteEmployee(req.params.employee_id,function(err,rows){
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
 router.put('/:employee_id',function(req,res,next){
    employee.updateEmployee(req.params.employee_id,req.body,function(err,rows){
         if(err){
             res.json(err);
         }
         else{
             res.json(rows);
         }
     });
 });
module.exports=router;
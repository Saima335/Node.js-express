var express=require("express");
var router=express.Router();
var Student=require('../models/Student');

//functions to controllers to minimize
router.get("/",function(req,res,next){
    res.send("You are at Emp Router");
});

router.get('/employees:name', function(req,res,next){
    var ename=req.params.name;
    // Student.find().exec(function(err,data){
    Student.findOne({name:ename},function(err,data){
        if (err) throw err;
        //Convert in json and send
        res.json(data);
    });
});
module.exports=router;
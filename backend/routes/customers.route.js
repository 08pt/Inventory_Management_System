//add dependency express
const express =  require('express');

//add  router dependency
const router =  express.Router();

//object Id
const ObjectId = require('mongoose').Types.ObjectId;

//import customer model
const Customer = require('../models/customers.js');

//Now we are creating API's These are - Get , Post, Put, Delete
//Base path of routes is http://localhost:3000/customer


// fetch all the Customers details
router.get('/', function(req, res, next) {
   Customer.find({},function (err, data) {
       if (err) {
         res.status(500).json({ status: false, message: err });
       } else {
         res.status(200).json({ status: true, data, message: "Data found!" });
         console.log(data)
       }
     })
   });

   
// // Get Products  by id
router.get('/:cust_id',(req,res)=>{
    const{cust_id}=req.params;
    
    Customer.findOne({cust_id},function(err,data){
        if(err){
            console.log('Error in getting  Data'+err)
       }
        else{
            res.send(data);
        }
        })
    })


//Login a customer
router.post('/', function(req, res, next) {
    Customer.findOne({user:req.body.user ,password:req.body.password}).then(data=>{
  if(data){
    res.status(200).json(data)
  }else{
    res.status(401).json({error:"incorrect user or password"})
  }
    }).catch(err=>{
      res.status(500).json({error:err.message})
    })
      
    
  })
// add customers  into the database
router.post('/',(req,res) => {
    let cust = new Customer({
        cust_id:req.body.cust_id,
        email:req.body.email,
        cust_name:req.body.cust_name,
        address: req.body.address,
        phone_no:req.body.phone_no,
        password:req.body.password,
       
         });
   cust.save((err , doc ) => {
        if(err){
            console.log("Error in Post Data", +err)
        }else{
            res.send(doc);
        }
    })
});
//PUT API Update

router.put('/:cust_id',function(req,res){
    const {cust_id}=req.params;
   Customer.findOneAndUpdate({cust_id},req.body,function(err,data){
        
        if(err){
            console.log('Error in get employee by id'+err)
       }
        else{
            res.send(data);
        }
     });
    
});
//DELETE API
router.delete('/:cust_id',(req,res)=>{
    const {cust_id}=req.params;
    Customer.findOneAndRemove({cust_id},(err,doc)=>{
        if(err){
            console.log('Error in delete employee by id'+err)
       }
        else{
            res.send(doc);
        }
     });
    
});

//exports router so that we can import any other files
module.exports =  router;
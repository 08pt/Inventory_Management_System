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


//GET API for supplier to fetch all the supplier details
router.get('/',(req,res) => {
    //to get data we need supplier Model here
    Customer.find((err,doc) => {
        if(err){
            console.log("Error in getting data from supplier collection",err);
        }else{
            res.send(doc);
        }
    })
})
// Get Products  by id
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


//POST API for supplier add data into the database
router.post('/',(req,res) => {
    let cust = new Customer({
        cust_id:req.body.cust_id,
        cust_name:req.body.cust_name,

        address: req.body.address,
        phone_no:req.body.phone_no
       
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

//search product by name

router.get('/search/:key',async(req,res)=>{
    console.log(req.params.key)
    let data=await Customer.find({
        "$or":[
            {
                "cust_name":{
                    $regex:req.params.key
                }}
            ]
    })
    res.send(data)
})
 
//exports router so that we can import any other files
module.exports =  router;
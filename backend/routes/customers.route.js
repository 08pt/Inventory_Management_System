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


//GET API for CUSTOMER to fetch all the customer details
router.get('/',(req,res) => {
    //to get data we need Customer Model here
    Customer.find((err,doc) => {
        if(err){
            console.log("Error in getting data from customer collection",err);
        }else{
            res.send(doc);
        }
    })
})
//GET API for CUSTOMER to fetch single  customer details using id
router.get('/:id',(req,res) => {
    
    if(ObjectId.isValid(req.params.id)){

        Customer.findById(req.params.id, (err,doc) => {
            if(err){
                console.log("Error in getting customer by id" +err)
            }else{
                res.send(doc);
            }
        })

    }else{
        return res.status(400).send('No Record Found with id' +req.params.id)
    }
  

})


//POST API for CUSTOMER
router.post('/',(req,res) => {
    let cust = new Customer({
        cust_id:req.params.cust_id,
        cust_name : req.body.cust_name,
        address: req.body.address,
        phone_no: req.body.phone_no
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
router.put('/:id',(req,res) => {
    
    if(ObjectId.isValid(req.params.id)){

        let cust = {
            cust_id   :  req.params.cust_id,
            cust_name : req.body.cust_name,
            address  : req.body.address,
            phone_no  : req.body.phone_no
        };

        Customer.findByIdAndUpdate(req.params.id,{$set:cust},{new:true},(err,doc) => {
            if(err){
                console.log("Error in Updating  customer by id" +err)
            }else{
                res.send(doc);
            }
        })

    }else{
        return res.status(400).send('No Record Found with id' +req.params.id)
    }
  

})

//DELETE API
router.delete('/:id',(req,res) => {
    
    if(ObjectId.isValid(req.params.id)){

        Customer.findByIdAndRemove(req.params.id, (err,doc) => {
            if(err){
                console.log("Error in delete customer by id" +err)
            }else{
                res.send(doc);
            }
        })

    }else{
        return res.status(400).send('No Record Found with id' +req.params.id)
    }
  

});
 
//exports router so that we can import any other files
module.exports =  router;
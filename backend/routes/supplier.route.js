//add dependency express
const express =  require('express');

//add  router dependency
const router =  express.Router();

//object Id
const ObjectId = require('mongoose').Types.ObjectId;

//import supplier  model
const Supplier = require('../models/suppliers.js');



//Now we are creating API's These are - Get , Post, Put, Delete
//Base path of routes is http://localhost:3000/customer

//GET API for supplier to fetch all the supplier details
router.get('/',(req,res) => {
    //to get data we need supplier Model here
    Supplier.find((err,doc) => {
        if(err){
            console.log("Error in getting data from supplier collection",err);
        }else{
            res.send(doc);
        }
    })
})

//GET API for CUSTOMER to fetch single  customer details using id
router.get('/:id',(req,res) => {
    
    if(ObjectId.isValid(req.params.id)){

        Supplier.findById(req.params.id, (err,doc) => {
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

//POST API for supplier add data into the database
router.post('/',(req,res) => {
    let sup = new Supplier({
        prod_id:req.body.prod_id,
        nameOfCompany: req.body.nameOfCompany,
        delivery_date:req.body.delivery_date
       
         });
    sup.save((err , doc ) => {
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

        let sup = {
            prod_id:req.body.prod_id,
            nameOfCompany: req.body.nameOfCompany,
            delivery_date:req.body.delivery_date
        };

       Supplier.findByIdAndUpdate(req.params.id,{$set:sup},{new:true},(err,doc) => {
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

        Supplier.findByIdAndRemove(req.params.id, (err,doc) => {
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

//export this router to use in our index.js
module.exports = router;


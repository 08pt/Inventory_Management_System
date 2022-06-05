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

// Get Products  by id
router.get('/:prod_id',(req,res)=>{
    const{prod_id}=req.params;
    
    Supplier.findOne({prod_id},function(err,data){
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

router.put('/:prod_id',function(req,res){
    const {prod_id}=req.params;
   Supplier.findOneAndUpdate({prod_id},req.body,function(err,data){
        
        if(err){
            console.log('Error in get employee by id'+err)
       }
        else{
            res.send(data);
        }
     });
    
});
//DELETE API
router.delete('/:prod_id',(req,res)=>{
    const {prod_id}=req.params;
    Supplier.findOneAndRemove({prod_id},(err,doc)=>{
        if(err){
            console.log('Error in delete employee by id'+err)
       }
        else{
            res.send(doc);
        }
     });
    
});

//search comapny  by name


router.get("/comp/:nameOfCompany", function (req, res) {
    let compName = req.params.nameOfCompany;

    console.log("Search company by name "+req.params.nameOfCompany);

    Supplier.findOne({"nameOfCompany":compName}, function (err, data) {
      if (err) {
        res.status(500).json({ status: false, message: err });
      } else {
        res.status(200).json({ status: true, data, message: "Data found!" });
        console.log(data)
      }
    });
  });


//export this router to use in our index.js
module.exports = router;


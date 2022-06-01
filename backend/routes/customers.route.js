//add dependency express
const express =  require('express');

//add  router dependency
const router =  express.Router();

//object Id
const ObjectId = require('mongoose').Types.ObjectId;

//import customer model
const {Customer} = require('../models/customers');

//Now we are creating API's These are - Get , Post, Put, Delete
//Base path of routes is http://localhost:3000/customer


//View All Users  
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

//Register a User
router.post('/addcustomer', async(req, res, next)=>{
if( await customerExists(req.body.email)){
  res.status(409).json({error:"email alreday exists"})
}
else{
  console.log(req.body)
  const customer = new Customer(req.body);
  Customer.save(err =>{
      if(err){
          res.send(err)
      }else{
          res.send({message:"Successful Registered"})
      }
  })
}
})
  
//Existing User Check Condition
const customerExists=async(email)=>{
const customer = await Customer.findOne({email:email.toLowerCase().trim()})
if(customer){
  return true
}else{
  return false
}
  }

//Login a customer
router.post('/login', function(req, res, next) {
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
// router.post('/',(req,res) => {
//     let cust = new Customer({
//         user:req.body.user,
//         password:req.body.password,
//         cust_name : req.body.cust_name,
//         address: req.body.address,
//         phone_no: req.body.phone_no
//     });
//     cust.save((err , doc ) => {
//         if(err){
//             console.log("Error in Post Data", +err)
//         }else{
//             res.send(doc);
//         }
//     })
// })

// post method in equipment
router.post('/',(req,res)=>{
let cust = new Customer({
        user:req.body.user,
        password:req.body.password,
        cust_name : req.body.cust_name,
        address: req.body.address,
        phone_no: req.body.phone_no
    })
    cust.save((err,doc)=>{
        if(!err){
            console.error(res.send(doc))
        }else{
            console.log("error in saving the equipment")
        }
    })
})

//PUT API Update
router.put('/:id',(req,res) => {
    
    if(ObjectId.isValid(req.params.id)){

        let cust = {
            cust_name : req.body.cust_name,
            address: req.body.address,
            phone_no: req.body.phone_no
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
  

})

//exports router so that we can import any other files
module.exports =  router;
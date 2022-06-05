//add dependency express
const express =  require('express');

//add  router dependency
const router =  express.Router();

//object Id
const ObjectId = require('mongoose').Types.ObjectId;

//import items model
const Items = require('../models/items');


//Now we are creating API's These are - Get , Post, Put, Delete
//Base path of routes is http://localhost:3000/customer


//GET API for ITEMS to fetch all the items details

router.get('/',(req,res) => {
    //to get data we need items Model here
    Items.find((err,doc) => {
        if(err){
            console.log("Error in getting data from items collection",err);
        }else{
            res.send(doc);
        }
    })
})
// Get Items  by Item no
router.get('/:item_no',(req,res)=>{
    const{item_no}=req.params;
    
    Items.findOne({item_no},function(err,data){
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
    let itm = new Items({
        item_no:req.body.itemNo,
        item_Name:req.body.itemName,
        brand:req.body.itemBrand,
        quantity:req.body.itemQuantity,
        price:req.body.itemPrice,
        supplier:req.body.itemSupplier,
        created_at:req.body.itemCreatedAt,
        updated_at:req.body.itemUpdatedAt
       
         });
    itm.save((err , doc ) => {
        if(err){
            console.log("Error in Post Data", +err)
        }else{
            res.send(doc);
        }
    })
});
//PUT API Update

router.put('/:item_no',function(req,res){
    const {item_no}=req.params;
   Items.findOneAndUpdate({item_no},req.body,function(err,data){
        
        if(err){
            console.log('Error in get employee by id'+err)
       }
        else{
            res.send(data);
        }
     });
    
});

//DELETE API
router.delete('/:item_no',(req,res)=>{
    const {item_no}=req.params;
    Items.findOneAndRemove({item_no},(err,doc)=>{
        if(err){
            console.log('Error in delete employee by id'+err)
       }
        else{
            res.send(doc);
        }
     });
    
});
//search item  by name

router.get("/itm/:item_Name", function (req, res) {
    
    let iName = req.params.item_Name;

    console.log("Search Item by name "+req.params.item_Name);

    Items.findOne({"item_Name":iName}, function (err, data) {
      if (err) {
        res.status(500).json({ status: false, message: err });
      } else {
        res.status(200).json({ status: true, data, message: "Data found!" });
        console.log(data)
      }
    });
  });

//exports router so that we can import any other files
module.exports =  router;
var express = require('express');
var router = express.Router();
// const ObjectId = require('mongoose').Types.ObjectId
const   admin  = require('../models/admin');


// get home  for customer
router.get('/',(req,res)=>{
    admin.find((err,doc)=>{
        if(!err){console.error(res.send(doc))}
        else{console.log("error in get method")}
    })
})

router.post('/',(req,res)=>{
    var adm= new admin({
        userName:req.body.userName,
        email:req.body.email,
        password:req.body.password
    })
    adm.save((err,doc)=>{
        if(!err){console.error(res.send(doc))}
        else{console.log("error in post method")}
    })
})

//Login a by existing user
router.post('/check', function(req, res, next) {
    admin.findOne({username:req.body.username,email:req.body.email,password:req.body.password}).then(data=>{
  if(data){
    res.status(200).json(data)
  }else{
    res.status(401).json({error:"incorrect email or password"})
    console.log("error in adding")
  }
    }).catch(err=>{
      res.status(500).json({error:err.message})
      console.log("catch error")
    })
      
    
  })

module.exports = router;
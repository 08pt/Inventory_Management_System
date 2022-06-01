const express = require('express');
const router = express.Router();



const {body , validationResult} = require('express-validator');


// // get
// router.get('/',(req,res)=>{
//     admin.find((err,doc)=>{
//         if(!err){console.error(res.send(doc))}
//         else{console.log("error in get method")}
//     })
// })

// router.post('/',(req,res)=>{
//     var adm = new admin({
//         userName:req.body.userName,
//         password:req.body.password
//     })
//     adm.save((err,doc)=>{
//         if(!err){console.error(res.send(doc))}
//         else{console.log("error in post method")}
//     })
// })

//Login a by existing user
// router.post('/check', function(req, res, next) {
//     admin.findOne({username:req.body.username,password:req.body.password}).then(data=>{
//   if(data){
//     res.status(200).json(data)
//   }else{
//     res.status(401).json({error:"incorrect userName or password"})
//     console.log("error in adding")
//   }
//     }).catch(err=>{
//       res.status(500).json({error:err.message})
//       console.log("catch error")
//     })
      
    
//   })

 router.post('/user',body('userName').isEmail(),body('password').isLength({min:6}),(req,res) => {
  const errors = validationResult(req);
  if(!errors.isEmpty()){
    return res.status(400).json({errors:errors.array()});
  }
  User.create({
    userName:req.body.userName,
    password:req.body.password,
  }).then(user => res.json(user));
})

module.exports = router;
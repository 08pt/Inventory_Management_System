const express = require('express');
const Admin = require('../models/admin');
const router = express.Router();
const { body, validationResult } = require('express-validator');


//create a admin : Post "/api/auth". Doesnot require Auth
router.post('/',[
    body('name','Enter a valid name').isLength({ min: 3}),
    body('email','Enter a valid email').isEmail(),
    body('password','Password must be atleast 5 characters ').isLength({ min: 5}),
],   (req,res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array() });
    }
    Admin.create({
        name: req.body.name,
        email:req.body.email,
        password:req.body.password
    }).then(admin => res.json(admin))
    .catch(err => {console.log(err)
    res.json({error: 'Please enter a unique value for email'})})
    res.send(req.body);
})
module.exports = router;
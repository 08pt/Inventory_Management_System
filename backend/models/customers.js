const mongoose = require('mongoose');

const Costumer  =  mongoose.model('Customer',{
    cust_id:{type:Number},
    email:{type:String},
    cust_name : {type:String},
    address:{type:String},
    phone_no:{type:Number},
    password:{type:String}
});
module.exports = Costumer;
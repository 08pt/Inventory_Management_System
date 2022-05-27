const mongoose = require('mongoose');

const Costumer  =  mongoose.model('Customer',{
    cust_name : {type: string},
    address:{type:string},
    phone_no:{type:number}
});
module.exports = Costumer;
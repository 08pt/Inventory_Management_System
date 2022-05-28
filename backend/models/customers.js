const mongoose = require('mongoose');


//customer collection or schema
const Costumer  =  mongoose.model('Customer',{
    cust_name : {
        type: string,
        required:true
},
    address:{
        type:string,
        required:true
    },
    phone_no:{
        type:number
    }
});
module.exports = Costumer;
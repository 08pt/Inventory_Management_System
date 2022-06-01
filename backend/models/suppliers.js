const mongoose = require('mongoose');

const Supplier  =  mongoose.model('Supplier',{
    prod_id:{type:Number},
    nameOfSupplier : {
    type: String, 
    required:true
},
    delivery_date:{
        type:Date,
        default:Date.now
    }
});
module.exports = Supplier;


const mongoose = require('mongoose');

const Supplier  =  mongoose.model('Supplier',{
    prod_id:{type:Number},
    nameOfCompany : {type: String},
    delivery_date:{type:Date}
});
module.exports = Supplier;
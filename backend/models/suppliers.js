const mongoose = require('mongoose');

const Supplier  =  mongoose.model('Supplier',{
    nameOfCompany : {type: String},
    deleivery_date:{type:Date},
    prod_id:{type:Number}
});
module.exports = Supplier;
const mongoose = require('mongoose');

const Supplier  =  mongoose.model('Supplier',{
    nameOfCompany : {type: string},
    deleivery_date:{type:date},
    prod_id:{type:number}
});
module.exports = Supplier;
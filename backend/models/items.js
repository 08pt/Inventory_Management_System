const mongoose = require('mongoose');

const items  =  mongoose.model('items',{
    item_no:{type:Number},
    item_Name : {type:String},
    brand:{type:String},
    quantity:{type:Number},
    price:{type:Number},
    supplier:{type:String},
    created_at:{type:Date},
    updated_at:{type:Date}
});
module.exports = items;
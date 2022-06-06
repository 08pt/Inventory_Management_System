const mongoose = require('mongoose');

const items  =  mongoose.model('items',{
    item_no:{type:String},
    item_Name : {type:String},
    brand:{type:String},
    quantity:{type:String},
    price:{type:String},
    supplier:{type:String},
    created_at:{type:String},
    updated_at:{type:String}
});
module.exports = items;
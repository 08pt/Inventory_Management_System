const mongoose = require('mongoose');

const Admin  =  mongoose.model('Admin',{
   username : {type: string},
   password :{type:string}
});
module.exports = Admin;
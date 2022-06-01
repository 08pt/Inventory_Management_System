const mongoose = require('mongoose');

const Admin  =  mongoose.model('Admin',{
   userName : {
      type: String,
      required:true
   },
   password :{
      type: String,
      required :true
   }
});
module.exports = {Admin};
const mongoose = require('mongoose');

const Admin  =  mongoose.model('Admin',{
   username : {
      type: string,
      required:true
   },
   password :{
      type:string,
      required :true
   }
});
module.exports = Admin;
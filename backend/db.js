
//assign mongoose in the mongoose var
const mongoose = require('mongoose');
//connect to the database and database name is meanDB and checking that db is connected or not
mongoose.connect('mongodb://localhost:27017/meanDB',(err) =>{
    if(!err){
        console.log('DB Conenction Succesfully');
    }else{
        console.log('Error in Connection' + err);
    }
})

//here we are exporting variable  mongoose
module.export = mongoose;




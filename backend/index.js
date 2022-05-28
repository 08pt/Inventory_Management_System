//now we are creating express server these below three are dependencies
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')

const mongoose = require('./db.js');


const app = express();

app.use(bodyParser.json());

//here our express app will use our angular app path

app.use(bodyParser.urlencoded({extended:true}))

app.use(cors({origin:'https://localhost:4200'}));




//with the listen can only start our server
app.listen(3000,() => 
console.log('Express Server Started at Port: 3000'));

//READ OPERATION
// app.get('/',function(req,res){
//    res.send("Hello World"); 
// })


//use of ES6 arrow function send data in browser 
// app.get('/' ,(req,res) => {
//     res.send("Hello Arrow Function");
// })

//get data from index.html file 
app.get('/',(req,res) => {
    res.sendFile(__dirname +'/index.html');
})

//post method
app.post('/',(req,res) => {
    console.log(req.body)
})
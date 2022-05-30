//now we are creating express server these below three are dependencies
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')

const mongoose = require('./db.js');

const routesCustomers= require('./routes/customers.route.js');
const routesSuppliers= require('./routes/supplier.route.js');



const app = express();

app.use(bodyParser.json());

//here our express app will use our angular app path

app.use(cors({origin:'https://localhost:4200'}));

app.use(express.urlencoded({ extended: false }));



//with the listen can only start our server

app.use('/customers',routesCustomers);
app.use('/suppliers',routesSuppliers);

app.listen(3000,() => console.log('Express Server Started at Port: 3000'));


//now we are creating express server these below three are dependencies
const express = require('express');
const cors = require('cors')
const routesCustomers= require('./routes/customers.route.js');
const routesSuppliers= require('./routes/supplier.route.js');
const routesItems = require('./routes/item.route');
const routesAdmin = require('./routes/admin.route');

const app = express();
//here our express app will use our angular app path
app.use(cors({origin:'http://localhost:4200'}));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
//with the listen can only start our server
app.use('/customers',routesCustomers);
app.use('/suppliers',routesSuppliers);
app.use('/items',routesItems);
app.use('/admin',routesAdmin);

app.listen(3000,() => console.log('Express Server Started at Port: 3000'));


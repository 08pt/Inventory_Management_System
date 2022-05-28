//now we are creating express server these below three are dependencies
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')

const mongoose = require('./db.js');

const routes = require('./routes/routes');


const app = express();

app.use(bodyParser.json());

//here our express app will use our angular app path

app.use(cors({origin:'https://localhost:4200'}));


//with the listen can only start our server
app.listen(3000,() => console.log('Express Server Started at Port: 3000'));

app.use('/customer',routes);

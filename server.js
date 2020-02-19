const express = require('express');
const app = express();
const port = 3000;
const {getRestaurantByID} = require('../InfoPage/mockData/dbHelper.js')
const cors = require('cors')
const morgan = require('morgan');
const proxy = require('express-http-proxy');


app.use(morgan('tiny'));
app.use(cors());
app.use('/', express.static('public'));
//serve static files for url endpoints
app.use('/restaurant/:restaurantId', express.static('public'));
app.use('/restaurantName/:restaurantName', express.static('public'));

//proxy get requests to correct service
//Info Service
app.get('/api/restaurant/:restaurantId', proxy('http://localhost:7000'));
app.get('/api/restaurantName/:restaurantName', proxy('http://localhost:7000'));

//Reviews Service

app.listen(port, () => console.log(`Cygnus-Yelp App Listening on port ${port}!`));
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
app.use('/restaurant/:restaurantId', express.static('public'));
app.get('/api/restaurant/:restaurantId', proxy('http://localhost:7000'));

app.listen(port, () => console.log(`Cygnus-Yelp App Listening on port ${port}!`));
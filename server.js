const express = require('express');
const app = express();
const port = 3000;
const {getRestaurantByID} = require('../InfoPage/mockData/dbHelper.js')
const cors = require('cors')

app.use(cors());

app.use('/', express.static('public'));


//Serve the same html page regardless of endpoint (for proxy)
//individual services will use the url to make get request
app.use('/restaurant/:restaurantId', express.static('public'));

// app.get('/restaurant/:restaurantId', (req, res) => {
//   getRestaurantByID(req.params.restaurantId, (data) => {
//     res.send(data);
//   })
// });

// app.get('/restaurant/:restaurantId', express.static('public'))

app.listen(port, () => console.log(`Cygnus-Yelp App Listening on port ${port}!`));
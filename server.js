const express = require('express');
const app = express();
const port = 3000;
const {getRestaurantByID} = require('../InfoPage/mockData/dbHelper.js')

app.use(express.static('public'));

app.get('/restaurant/:restaurantId', (req, res) => {
  getRestaurantByID(req.params.restaurantId, (data) => {
    res.send(data);
  })
})

app.listen(port, () => console.log(`Cygnus-Yelp App Listening on port ${port}!`));
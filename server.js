const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));

// app.get('/restaurantInfo', (req, res) => {
//   // console.log(getRestaurantByID)
//   getRestaurantByID(1, (data) => {
//     res.send(data);
//   })
//   // res.send('fake data');
// })

// app.get('/restaurant/:restaurantId', (req, res) => {
//   //req.params key value pair of restaurantID

  
//   // res.send(req.params.restaurantId)
//   getRestaurantByID(req.params.restaurantId, (data) => {
//     res.send(data);
//   })
//   // res.send('fake data');
// })

app.listen(port, () => console.log(`Cygnus-Yelp App Listening on port ${port}!`));
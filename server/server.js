
const express = require('express');
const morgan = require('morgan');
const axios = require('axios');
require('dotenv').config();

const app = express();

app.use(morgan('dev'));
app.use(express.static('dist'));
app.use(express.static('public'));

app.get('/search/:city', (req, res) => {
  cityName = req.params.city;
  axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${process.env.OPEN_WEATHER_API_KEY}&units=imperial`)
          .then(response => res.send(response.data))
          .catch(err => console.log(err));
});
// app.get('/search/:city', (req, res) => {
//   cityName = req.params.city;
//   axios({
//       method: 'GET',
//       url: `api.openweathermap.org/data/2.5/weather?q=${cityName}&APPID=${process.env.OPEN_WEATHER_API_KEY}`,
//       timeout: 1000 * 8
//     })
//     .then(response => {
//       res.status(200).send(response.data)
//     })
//     .catch(err => {
//       res.status(404).send(err.response.data)
//     });
// });

// module.exports = app;

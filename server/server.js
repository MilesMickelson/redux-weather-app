const express = require('express');
const morgan = require('morgan');
const axios = require('axios');

require('dotenv').config();
const app = express();

app.use(morgan('dev'));
app.use(express.static('dist'));
app.use(express.static('public'));

const key= process.env.OPEN_WEATHER_API_KEY;
app.get('/weather/:searchTarget', (req, res) => {
  console.log(req.params.searchTarget)
  axios({
    method: 'get',
    url: `https://api.openweathermap.org/data/2.5/weather?q=${req.params.searchTarget}&APPID=${key}&units=imperial`,
    })
    .then(response => {
    console.log('response.data', response.data, '\n')
    res.status(200).send(response.data);
    })
    .catch(err => {
    console.log('Error,',err.code,'has occured');
    })
});

module.exports = app;

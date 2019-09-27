const axios = require('axios');

export const getWeather = city => {
  return dispatch => {
    axios.get(`/search/${city}`)
      .then(response => dispatch({ type: 'GET_WEATHER', payload: response.data }))
      .catch(err => dispatch({ type: 'GET_WEATHER_FAIL', error: true }))
  }
}

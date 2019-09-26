const axios = require ('axios');

export const getWeather = (searchTarget) => ({
    type: 'GET_WEATHER',
    payload: axios.get(`/weather/${searchTarget}`)
});

export const updateCity = (searchTarget) => ({
    type: 'UPDATE_CITY',
    payload: { searchTarget }
})

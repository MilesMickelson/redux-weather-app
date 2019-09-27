import moment from 'moment';

const initalState = {
  lat: null,
  lon: null,
  temp: 0,
  pressure: 0,
  humidity: 0,
  lowTemp: 0,
  highTemp: 0,
  wind: 0,
  searchInput: '',
  searchedCity: '',
  history: [],
  icon: 'O1d',
  error: false
};

export default function searchReducer(state = initalState, action) {
  const { type, payload } = action;

  switch (type) {
    case 'GET_WEATHER': {
      return {
        ...state,
        searchedCity: payload.name,
        lat: payload.coord.lat,
        lon: payload.coord.lon,
        temp: payload.main.temp.toFixed(0),
        pressure: payload.main.pressure,
        humidity: payload.main.humidity,
        lowTemp: payload.main.temp_min.toFixed(0),
        highTemp: payload.main.temp_max.toFixed(0),
        wind: payload.wind.speed,
        icon: payload.weather[0].icon,
        error: false,
        history: [
          ...state.history,
          { searchedCity: payload.name,
            date: moment().format('I'),
            time: moment().format('h:mm:ss a')
          }
        ]
      }
    }

    case 'GET_WEATHER_FAIL': {
      return {
        ...state,
        error: true
      }
    }

    default: {
      return state;
    }
  }
}

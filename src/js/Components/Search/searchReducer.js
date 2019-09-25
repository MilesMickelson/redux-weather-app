const defaultState = {
  name: '',
  date: '',
  time: '',
  location: '',
  temperature: '',
  pressure: '',
  humidity: '',
  lowestTemp: '',
  highestTemp: '',
  windSpeed: '',
  lineItems: []
};

export default function SearchReducer (state = defaultState, action) {
  const { type, payload } = action;

  switch (type) {
    case 'UPDATE_NAME': {
      return {
        ...state,
        description: payload.name
      };
    }

    case 'UPDATE_TEMPERATURE': {
      return {
        ...state,
        description: payload.temperature
      };
    }

    case 'UPDATE_NAME': {
      return {
        ...state,
        description: payload.name
      };
    }

    case 'UPDATE_PRESSURE': {
      return {
        ...state,
        description: payload.pressure
      };
    }

    case 'UPDATE_HUMIDITY': {
      return {
        ...state,
        description: payload.humidity
      };
    }

    case 'UPDATE_LOWEST_TEMP': {
      return {
        ...state,
        description: payload.lowestTEMP
      };
    }

    case 'UPDATE_HIGHEST_TEMP': {
      return {
        ...state,
        description: payload.highestTEMP
      };
    }

    case 'UPDATE_WIND_SPEED': {
      return {
        ...state,
        description: payload.windSpeed
      };
    }

    case 'ADD_HISTORY': {
      const { name, date, time } = action.payload;
      return {
        name: '',
        date: '',
        time: '',
        lineItems: [
          ...state.lineItems,
          { name, date, time }
        ]
      };
    }

    default: {
      return state;
    }
  }
}

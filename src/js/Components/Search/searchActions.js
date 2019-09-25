export function updateName(name) {
  return {
    type: 'UPDATE_NAME',
    payload: { name }
  };
}

export function updateDate(date) {
  return {
    type: 'UPDATE_DATE',
    payload: { date }
  };
}

export function updateTime(time) {
  return {
    type: 'UPDATE_TIME',
    payload: { time }
  };
}

export function updateLocation(location) {
  return {
    type: 'UPDATE_LOCATION',
    payload: { location }
  };
}

export function updateName(temperature) {
  return {
    type: 'UPDATE_TEMPERATURE',
    payload: { temperature }
  };
}

export function updatePressure(pressure) {
  return {
    type: 'UPDATE_PRESSURE',
    payload: { pressure }
  };
}

export function updateHumidity(humidity) {
  return {
    type: 'UPDATE_HUMIDITY',
    payload: { humidity }
  };
}

export function updateLowestTemp(lowestTemp) {
  return {
    type: 'UPDATE_LOWEST_TEMP',
    payload: { lowestTemp }
  };
}

export function updateHighestTemp(highestTemp) {
  return {
    type: 'UPDATE_HIGHEST_TEMP',
    payload: { highestTemp }
  };
}

export function updateWindSpeed(windSpeed) {
  return {
    type: 'UPDATE_WIND_SPEED',
    payload: { windSpeed }
  };
}

export function addHistory(name, date, time) {
  return {
    type: 'ADD_HISTORY',
    payload: {
      name,
      date,
      time
    }
  };
}

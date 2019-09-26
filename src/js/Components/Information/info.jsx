import React, { Component } from 'react';

export default class CityInfo extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { city, lat, lon, temp, pressure, humidity, lowestTemp, highestTemp, wind, icon } = this.props;

    return (
      <div className='wrapper'>
        <div className='info-header'>
          <p className='header-name'>City Information</p>
        </div>
        <div className='info-box'>
          <div className='cloud-city'>
            <div>{icon}</div>
            <div className='info-city-label'>{city}</div>
            <p id='location'>{lat}, {lon}</p>
            <hr />
          </div>
          <div className='info-display'>
            <div className='data-column'>
              <label>Temperature ºF</label>
              <p className='city-info'>{temp}ºF</p>
              <label>Lowest Temp ºF</label>
              <p className='city-info'>{lowestTemp}ºF</p>
            </div>
            <div className='data-column'>
              <label>Pressure</label>
              <p className='city-info'>{pressure}</p>
              <label>Highest Temp ºF</label>
              <p className='city-info'>{highestTemp} ºF</p>
            </div>
            <div className='data-column'>
              <label>Humidity</label>
              <p className='city-info'>{humidity}%</p>
              <label>Wind Speed</label>
              <p className='city-info'>{wind}mph</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

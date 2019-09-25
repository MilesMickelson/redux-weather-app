import React from 'react';

export default class Info extends React.Component {
  render() {
    return (
      <div className='wrapper'>
        <div className='info-header'>
          <p className='header-name'>City Information</p>
        </div>
        <div className='info-box'>
          <div className='cloud-city'>
            <div className='fa fa-cloud fa-2x' aria-hidden='true'></div>
            <div className='info-city-label'>San Diego</div>
            <p id='location'>Lat/Long: 33.45, 132.06</p>
            <hr />
          </div>
          <div className='info-display'>
            <div className='data-column'>
              <label>Temperature (F)</label>
              <p className='city-info'>96.6 F</p>
              <label>Lowest Temp (F)</label>
              <p className='city-info'>73.2 F</p>
            </div>
            <div className='data-column'>
              <label>Pressure</label>
              <p className='city-info'>955</p>
              <label>Highest Temp (F)</label>
              <p className='city-info'>101.2 F</p>
            </div>
            <div className='data-column'>
              <label>Humidity</label>
              <p className='city-info'>37%</p>
              <label>Wind Speed</label>
              <p className='city-info'>22.09mph</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

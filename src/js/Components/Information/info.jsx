import React from 'react';
import { connect } from 'react-redux';

function CityInformation(props) {
  console.log(props.city);

  function getIcon() {
    if(props.city.icon){
      return (
        <img src={`http://openweathermap.org/img/w/${props.city.icon}.png`}></img>
      )
    } else {
      return null;
    }
  }

  function getAlert() {
    if (props.city.error) {
      return (
      alert("Sorry we cant find that city at this time, please try again!")
      )
    } else {
      return null;
    }
  }

  return(
    <div className='wrapper'>

      {getAlert()}

        <div className='info-header'>
          <p className='header-name'>City Information</p>
        </div>
        <div className='info-box'>
          <div className='cloud-city'>
            <div className='col-12'>
            <div className='cloud-cityRow'>
              <div className='weather-icon'>{getIcon()}</div>
              <div className='info-city-label'>{props.city.searchedCity}</div>
            </div>
            </div>
            <div className='row'>
              <div className='col-12'>
                <p id='location'>Lat/Lon :{props.city.lat}, {props.city.lon}</p>
                <hr />
              </div>
            </div>
          </div>
          <div className='info-display'>
            <div className='data-column'>
              <label>Temperature ºF</label>
                <p className='city-info'>{props.city.temp}ºF</p>
              <label>Lowest Temp ºF</label>
                <p className='city-info'>{props.city.lowTemp}ºF</p>
            </div>
            <div className='data-column'>
              <label>Pressure</label>
                <p className='city-info'>{props.city.pressure}</p>
              <label>Highest Temp ºF</label>
                <p className='city-info'>{props.city.highTemp} ºF</p>
            </div>
            <div className='data-column'>
              <label>Humidity</label>
                <p className='city-info'>{props.city.humidity}%</p>
              <label>Wind Speed</label>
                <p className='city-info'>{props.city.wind}mph</p>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const mapStateToProps = state => {
    return {
      city: state.data
    }
  }

  export default connect(mapStateToProps)(CityInformation);

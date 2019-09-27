import React from 'react';

import { connect } from 'react-redux';
import { getWeather } from './weather_Action';

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state= {
      city: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(e) {
    this.setState({ city: e.target.value });
  }

  handleSubmit(city) {
    const searchedCity =  this.state.city;
    this.props.getWeather(searchedCity);
  }

  handleClick(e) {
    this.props.getWeather(e.target.name);
  }

  render() {
    return (
      <div className='row'>
        <div className='col-12'>
          <div className='tab-wrap'>
            <div className='tab'>
              <button type='button' name='San Diego' onClick={this.handleClick}>San Diego</button>
              <button type='button' name='Los Angeles' onClick={this.handleClick}>Los Angeles</button>
              <button type='button' name='Portland' onClick={this.handleClick}>Portland</button>
              <button type='button' name='Las Vegas' onClick={this.handleClick}>Las Vegas</button>
              <button type='button' name='Dallas' onClick={this.handleClick}>Dallas</button>
              <button type='button' name='New York' onClick={this.handleClick}>New York</button>
              <button type='button' name='London' onClick={this.handleClick}>London</button>
            </div>
          </div>
          <div className='search-wrap'>
            <form className='search-bar'>
              <input type='text' placeholder='Search for city here' name='search'
              onChange={this.handlechange} value={this.state.city}/>
              <button type='submit' onClick={() => this.handleSubmit()}><i className='fa fa-search'></i></button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  { getWeather }
  )(Search);

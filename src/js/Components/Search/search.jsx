import React, { Component } from 'react';
import { updateCity, getWeather } from './searchActions';

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.handleInput = this.handleInput.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleButton = this.handleButton.bind(this);
  }

  handleInput(event) {
    const { dispatch } = this.props;
    const { value } = event.target;
    dispatch(updateCity(value));
  }

  handleSearch() {
    const { dispatch, searchTarget } = this.props;
    dispatch(getWeather(searchTarget));
  }

  handleButton(event) {
    const { dispatch } = this.props;
    const { value } = event.target;
    dispatch(updateCity(value));
    const { searchTarget } = this.props;
    dispatch(getWeather(searchTarget));
  }

  render() {
    return (
      <div className='row'>
        <div className='col-12'>
          <div className='tab-wrap'>
            <div className='tab'>
              <button type='button' value='San Diego' onClick={ this.handleButton }>San Diego</button>
              <button type='button' value='Los Angeles' onClick={ this.handleButton }>Los Angeles</button>
              <button type='button' value='Portland' onClick={ this.handleButton }>Portland</button>
              <button type='button' value='Las Vegas' onClick={ this.handleButton }>Las Vegas</button>
              <button type='button' value='Dallas' onClick={ this.handleButton }>Dallas</button>
              <button type='button' value='New York' onClick={ this.handleButton }>New York</button>
              <button type='button' value='London' onClick={ this.handleButton }>London</button>
            </div>
          </div>
          <div className='search-wrap'>
            <form className='search-bar' action='action_page.php'>
              <input type='text' placeholder='Search by city name..' className='search-button'
              onChange={this.handleInput}/>
              <button type='button' onClick={this.handleSearch}><i className='fa fa-search'></i></button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

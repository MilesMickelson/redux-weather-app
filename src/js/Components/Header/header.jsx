import React from 'react';

export default class Header extends React.Component {
  render() {
    return (
      <div className='row'>
        <div className='col-12'>
          <div className='mainHeader-box'>
            <div className='row'>
            <p className='mainTitle'>Origin Weather Application</p>
            </div>
            <div className='row'>
            <p className='subTitle'>Always know if you'll need an umbrella!</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

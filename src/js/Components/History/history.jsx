import React from 'react';

export default class History extends React.Component {
  render() {
    return (
      <div className='wrapper'>
        <div className='history-header'>
          <p className='header-name'>Search History</p>
        </div>
        <div className='history-box'>
          <div className='history-row-dark'>
          </div>
          <div className='history-row-light'>
          </div>
          <div className='history-row-dark'>
          </div>
          <div className='history-row-light'>
          </div>
          <div className='history-row-dark'>
          </div>
        </div>
      </div>
    );
  }
}

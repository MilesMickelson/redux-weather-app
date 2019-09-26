import React, { Component } from 'react';

export default class SearchHistory extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { history } = this.props;

    return (
      <div className='wrapper'>
        <div className='history-header'>
          <p className='header-name'>Search History</p>
        </div>
        <div className='history-box'>
            {/* {
            history.map((search, index) => {
            return (
              <div className='history-row-light' key={index}>
                <p>{search.city} - {search.date}</p>
              </div>
            )
          })
        } */}
        </div>
      </div>
    );
  }
}

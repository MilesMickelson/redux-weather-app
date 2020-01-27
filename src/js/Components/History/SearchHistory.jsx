import React from 'react';
import { connect } from 'react-redux';

function SearchHistory(props) {
  const searchHist = props.history.map(data => {
    return (
      <div key={ data.time } className='history-row-light'>
        <p>{ data.searchedCity }, { data.date }, { data.time }</p>
      </div>
    );
  });

  return (
    <div className='wrapper'>
      <div className='history-header'>
        <p className='header-name'>Search History</p>
      </div>
      <div className='history-box'>
        { searchHist }
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    history: state.data.history
  };
};

export default connect(mapStateToProps)(SearchHistory);

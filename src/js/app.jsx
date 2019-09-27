import React from 'react';
import Header from './Components/Header/Header';
import Search from './Components/Search/Search';
import Info from './Components/Information/Info';
import SearchHistory from './Components/History/SearchHistory';

export default class App extends React.Component {
  render() {
    return (
      <div className='container'>
        <Header />
        <Search />
        <div className='body-wrapper'>
          <Info />
          <SearchHistory />
        </div>
      </div>
    );
  }
}

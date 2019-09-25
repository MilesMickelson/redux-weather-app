import React from 'react';
import Header from './Components/Header/header';
import Search from './Components/Search/search';
import Info from './Components/Information/info';
import History from './Components/History/history';

export default class App extends React.Component {
  render() {
    return (
      <div className='container'>
        <Header />
        <Search />
        <div className='body-wrapper'>
          <Info />
          <History />
        </div>
      </div>
    );
  }
}

import React from 'react';

export default class Search extends React.Component {
  render() {
    return (
      <div className='row'>
        <div className='col-12'>
          <div className='tab-wrap'>
            <div className='tab'>
              <button className='tabLinks' id='defaultOpen'>San Diego</button>
              <button className='tabLinks'>Los Angeles</button>
              <button className='tabLinks'>San Antonio</button>
              <button className='tabLinks'>New York</button>
              <button className='tabLinks'>Denver</button>
            </div>
          </div>
          <div className='search-wrap'>
            <form className='search-bar' action='action_page.php'>
              <input type='text' placeholder='Search..' className='search-button'/>
              <button type='submit'><i className='fa fa-search'></i></button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

// onClick={openCity(event, 'sanDiego')}
{/* <div id='sanDiego' class='tabcontent'>
            <h3>San Diego</h3>
          </div> */}


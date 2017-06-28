import React, { Component } from 'react';
import Popover from '../components/Popover';

class App extends Component {
  render() {
    return (
      <Popover className={`song-heart`}>
        <i className="icon ion-ios-heart"></i>
        <div>
          <p>Test ok</p>
        </div>
      </Popover>
    );
  }
}

export default App;
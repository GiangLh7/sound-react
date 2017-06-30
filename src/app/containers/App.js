import React, { Component } from 'react';
import Popover from '../components/Popover';

class App extends Component {
  render() {
    return (
      <div>
        <button className="button orange">OK</button>
        <Popover className={`song-heart`}>
          <i className="icon ion-ios-heart">Playlist</i>
          <div>
            <p>Test ok</p>
          </div>
        </Popover>
      </div>
      
    );
  }
}

export default App;
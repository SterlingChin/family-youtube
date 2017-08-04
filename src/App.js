import React, { Component } from 'react';
import YouTube from 'react-youtube';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    const opts = {
      height: '390',
      width: '640',
      playerVars: { 
        autoplay: 4
      }
    };
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>   
         
        <YouTube
        videoId="dIVoU_WKV20"
        opts={opts}
        onReady={this._onReady}
      />
        <YouTube
        videoId="DwUyi8wkb74"
        opts={opts}
        onReady={this._onReady}
      />
      </div>
    )
  };
 
  _onReady(event) {
    // access to player in all event handlers via event.target 
    event.target.pauseVideo();
  }
}

export default App;

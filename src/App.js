import React, { Component } from 'react';
import Videos from './Videos';
import './App.css';
import SideMenu from './SideMenu'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showVideos: true
    }
  }

  _handleMenuClick = () => {
    
  }

  render() {
    const styles = this.styles()
    return (
      <div style={styles.App}>
        <SideMenu />
        {this.state.showVideos ? (
          <div style={styles.main}>
            <Videos />
          </div>
        ) : null}
      </div>
    )
  };

  styles = () => {
    return {
      App: {
        display: 'flex',
      },
      main: {
        width: '100%',
        height: '100vh',
        overflow: 'scroll'
      }
    }
  }
}

export default App;

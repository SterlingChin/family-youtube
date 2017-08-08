import React, { Component } from 'react';
import logo from './logo.svg'

class SideMenu extends Component {
  render() {
    const styles = this.styles()
    return (
      <div style={styles.AppHeader}>
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Chin Tube!</h2>
        <div style={styles.button}>
          Button 1
        </div>
        <div style={styles.button}>
          Button 2
        </div>
        <div style={styles.button}>
          Button 3
        </div>
      </div>
    );
  };
    styles = () => {
      return {
        AppHeader: {
          backgroundColor: '#222',
          width: 200,
          height: '95vh',
          padding: 20,
          color: 'white',
          textAlign: 'center'
        },
        button: {
          borderTop:'1px solid grey',
          height: 40,
          lineHeight: '40px'
        }
      }
    }
}

export default SideMenu;
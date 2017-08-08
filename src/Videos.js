import React, { Component } from 'react';
import YouTube from 'react-youtube';

class Videos extends Component {
  constructor (props) {
    super(props);
    this.state = {
      videos:[
        {
          "id": "dIVoU_WKV20",
          "date": "7/28/2017",
          "tags": [
            "Taylor",
            "Grayson",
            "Jensen",
            "Sterling",
            "Hadley"
          ],
          "desc":"This is a default description"  
        },
        {
          "id": "DwUyi8wkb74",
          "date": "7/28/2017",
          "tags": [
            "Taylor",
            "Grayson",
            "Jensen",
            "Sterling",
            "Hadley"
          ],  
          "desc":"This is a default description"  
        },
        {
          "id": "gXvhHVunY7U",
          "date": "7/28/2017",
          "tags": [
            "Taylor",
            "Grayson",
            "Jensen",
            "Sterling",
            "Hadley"
          ],  
          "desc":"The one where Grandma tells me she should slap my damn face"  
        }
      ]
    }
  }
   
  _onReady(event) {
    // access to player in all event handlers via event.target 
    event.target.pauseVideo();
  }

  render() {
    const videos = this.state.videos
    const styles = this.styles()
    const opts = {
      height: '390',
      width: '640',
      playerVars: { 
        autoplay: 4
      },
      margin: 15
    }
    return (
        <div style={styles.youtube}>
          {videos.map(v => 
          <div>
            <YouTube
            key={v}
            videoId={v.id}
            opts={opts}
            onReady={this._onReady}
            /> 
            <div style={styles.tags}>
              Date: {v.date}
            </div>
            <div style={styles.tags}>
              Tags: {v.tags.map(t => 
                t + ' '
              )}
            </div>
            <div style={styles.desc}>
              Description: {v.desc}
            </div>
          </div>
          )}
        </div>
    );
  };
  styles = () => {
    return {
      youtube : {
        display: 'flex',
        flexDirection: 'column',
        margin: '10px auto',
        width: 640,
        height: 390,
      },
      tags: {
        margin: 5
      },
      desc: {
        margin: '5px 5px 15px 5px',
        borderBottom: '2px solid black'
      }
    }
  }
}

export default Videos;
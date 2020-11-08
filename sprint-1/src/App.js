import React, { Component } from 'react';
import Header from './components/Header/Header';
import Video from './components/Video/Video';
import './App.css';
import VideoDetails from './components/VideoDetails/VideoDetails';
import { mainVideo, sideVideo} from './utils/data';


class App extends Component {
  state = {
    mainVideo: mainVideo,
    sideVideo: sideVideo
  }

  
  
  render() {
    console.log(this.state.mainVideo, this.state.sideVideo)
    return (
        <div className="app">
          <Header  />
          <Video mainVideo={this.state.mainVideo}/>  
          <VideoDetails  mainVideo={this.state.mainVideo}/>  
        </div>
    );
  }
}

export default App;






import React, { Component } from 'react';
import Header from './components/Header/Header';
import Video from './components/Video/Video';
import Comments from './components/Comments/Comments';
import VideoQueue from './components/VideoQueue/VideoQueue';
import './App.scss';
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
          <div className="app__bottom-container">
            <div className="app__bottom-container-section">
              <VideoDetails  mainVideo={this.state.mainVideo}/>  
             <Comments mainVideo={this.state.mainVideo}/> 
             </div>
            <VideoQueue sideVideo={this.state.sideVideo}/>
            </div>
        </div>
    );
  }
}

export default App;






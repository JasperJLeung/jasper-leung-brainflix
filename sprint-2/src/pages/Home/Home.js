import React, { Component } from 'react';
import Header from '../../components/Header/Header';
import Video from '../../components/Video/Video';
import Comments from '../../components/Comments/Comments';
import VideoQueue from '../../components/VideoQueue/VideoQueue';
import VideoDetails from '../../components/VideoDetails/VideoDetails';
import { mainVideo, sideVideo} from '../../utils/data';


class Home extends Component {
  state = {
    mainVideo: mainVideo,
    sideVideo: sideVideo
  }


  render() {
    return (
        <div className="app">
          <Header  />
          <Video mainVideo={this.state.mainVideo}/>  
          <div className="app__bottom-container">
            <div className="app__bottom-container-section">
              <VideoDetails  mainVideo={this.state.mainVideo}/>  
             <Comments mainVideo={this.state.mainVideo}/> 
             </div>
            <VideoQueue mainVideo={this.state.mainVideo} sideVideo={this.state.sideVideo}/>
            </div>
        </div>
    );
  }
}

export default Home;
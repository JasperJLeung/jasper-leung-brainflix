import React, { Component } from 'react';
import Video from '../../components/Video/Video';
import Comments from '../../components/Comments/Comments';
import VideoQueue from '../../components/VideoQueue/VideoQueue';
import VideoDetails from '../../components/VideoDetails/VideoDetails';
import axios from 'axios';
import {apiURL} from "../../utils/axios";

class Home extends Component {
  state = {
    mainVideo: {},
    sideVideo: []
  };

  fetchVideos = () => {
    axios.get(apiURL + "/videos").then((response) => {
      this.setState({
        sideVideo: response.data
      }, () => {
        this.fetchMainVideo( this.state.sideVideo[0].id)
      })
    }).catch((error) => console.log(error))
  };

  fetchMainVideo = (id) => {
    axios.get(apiURL + "/videos/"+id).then((response) => {
      this.setState({
        mainVideo: response.data
      })
    })
  };

  componentDidMount () {
   this.fetchVideos()
  };

  componentDidUpdate(prevProps) {
    if(this.props.match.params.id  && this.props.match.params.id !== prevProps.match.params.id){
     this.fetchMainVideo(this.props.match.params.id)
      window.scrollTo(0,0)
    };
     if(this.props.match.path === "/" && this.state.mainVideo.id !== this.state.sideVideo[0].id){
      this.fetchMainVideo(this.state.sideVideo[0].id)
    };
  };

  render() {
    return (
        <div className="app">
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
};

export default Home;
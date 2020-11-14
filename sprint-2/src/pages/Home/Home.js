import React, { Component } from 'react';
import Header from '../../components/Header/Header';
import Video from '../../components/Video/Video';
import Comments from '../../components/Comments/Comments';
import VideoQueue from '../../components/VideoQueue/VideoQueue';
import VideoDetails from '../../components/VideoDetails/VideoDetails';
import axios from 'axios';
import {apiKey, apiURL} from "../../utils/axios";

class Home extends Component {
  state = {
    mainVideo: {},
    sideVideo: []
  }

  componentDidMount () {
    axios.get(apiURL + "/videos?api_key=" + apiKey).then((response) => {
      this.setState({
        sideVideo: response.data
      }, () => {
        axios.get(apiURL + "/videos/" + this.state.sideVideo[0].id +"?api_key=" + apiKey).then((response) => {
          this.setState({
            mainVideo: response.data
          })
        })
      })
    }).catch((error) => console.log(error))
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
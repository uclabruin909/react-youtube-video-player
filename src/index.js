import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyDKzyV30L6TS4KdLJ2XEE-pNMyd63P16Qw';

class App extends Component {
  constructor(props) {
    super(props);

    this.state ={
      videos: [],
      selectedVideo: null,
    };

    this.onVideoSelect = this.onVideoSelect.bind(this);

    //set state.vidoes with initial dummy video information
    this.videoSearch('lebron');

  }

  videoSearch(term) {
    YTSearch({key: API_KEY, term: term}, function(videos) {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    }.bind(this));
  }

  onVideoSelect(selectedVideo) {
    this.setState({
      selectedVideo: selectedVideo
    });
  }

  render() {
    return (
      <div>
        <SearchBar/>
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList
          onVideoSelect={this.onVideoSelect}
          videos={this.state.videos}/>
      </div>
    );
  }

}

ReactDOM.render(<App/>, document.querySelector('.container'));
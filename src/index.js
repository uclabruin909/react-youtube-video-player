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
    };

    //set state.vidoes with initial dummy video information
    YTSearch({key: API_KEY, term: 'lebron james'}, function(videos) {
      this.setState({videos: videos});
    }.bind(this));

  }

  render() {
    return (
      <div>
        <SearchBar/>
        <VideoDetail video={this.state.videos[0]}/>
        <VideoList videos={this.state.videos}/>
      </div>
    );
  }

}

ReactDOM.render(<App/>, document.querySelector('.container'));
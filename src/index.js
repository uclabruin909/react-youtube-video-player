import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyDKzyV30L6TS4KdLJ2XEE-pNMyd63P16Qw';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <SearchBar/>
      </div>
    );
  }

}

ReactDOM.render(<App/>, document.querySelector('.container'));
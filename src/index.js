import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyDKzyV30L6TS4KdLJ2XEE-pNMyd63P16Qw';

const App = function() {
  return (
    <div>
      <SearchBar/>
    </div>
  );
}

ReactDOM.render(<App/>, document.querySelector('.container'));
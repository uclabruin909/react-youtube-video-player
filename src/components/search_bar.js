import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    //define initial state of Searchbar
    this.state = {
      term: '',
    };

    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(event) {
    //on input change, update the state.term value
    this.setState({term: event.target.value});
    this.props.onSearchTermChange(event.target.value);
  }

  render() {
    return (
      <div className="search-bar">
        <input value={this.state.term} onChange={this.onInputChange} />
      </div>
    );
  }

}

export default SearchBar;
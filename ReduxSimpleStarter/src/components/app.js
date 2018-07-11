import React, { Component } from 'react';
import SearchBar from '../containers/search_bar';
import WeatherList from '../containers/weather_list';

export default class App extends Component {
  constructor(props){
    super(props);
    this.state={arg:''};
    this.searchString = this.searchString.bind(this);

  }

  searchString(x){
   console.log(x)  
   this.setState({arg:x});

  }
  
  render() {
    return (
      <div>
        <SearchBar onType={this.searchString}/>
        <WeatherList queryArg={this.state.arg}/>
      </div>
    );
  }
}

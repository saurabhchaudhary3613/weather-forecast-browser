import React, { Component } from 'react';
import { connect } from 'react-redux';
import {  bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';


class SearchBar extends Component{
    constructor(props) {
        super(props);

        this.state = {term: ''};
        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);

    }

    onInputChange (event) {
      //  console.log(event.target.value);
        this.setState({term: event.target.value});        
    }
    onFormSubmit(event) {
        event.preventDefault();
        
        //Todo -> fetch weather data
        this.props.fetchWeather(this.state.term);
        this.setState({term: ''});
    }

    render() {

        return (
            <form onSubmit={this.onFormSubmit} className="input-group search-form">
                <input 
                    placeholder="Get a five day fore-cast in your favorite cities"
                    className="form-control search-input"
                    value={this.state.term}
                    onChange={this.onInputChange}
                />
                <span className="input-grpup-btn">
                    <button type='submit' className="btn btn-secondary">Search</button>
                </span> 
            </form>
        );
    }   
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchWeather }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);
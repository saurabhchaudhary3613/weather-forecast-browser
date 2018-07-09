import React, { Component } from 'react';


export default class SearchBar extends Component{
    constructor(props) {
        super(props);

        this.state = {term: ''};
        this.onInputChange = this.onInputChange.bind(this); 

        
    }

    onInputChange (event) {
        console.log(event.target.value);
        this.setState({term: event.target.value});
    }
    onFormSubmit(event) {
        event.preventDefault();
        
        //Todo -> fetch weather data
    }

    render() {

        return (
            <form onSubmit={this.onFormSubmit} className="input-group">
                <input 
                    placeholder="Get a five day fore-cast in your favorite cities"
                    className="form-control"
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
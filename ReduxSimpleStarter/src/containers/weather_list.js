import React, { Component } from 'react';
import { connect } from 'react-redux';
//import {Sparklines, SparklinesLine} from 'react-sparklines';


class WeatherList extends Component {


    renderWeather(cityData) {
        console.log('data', cityData);
        return (
            <tr key={cityData.city.name}>
                <td>
                    {cityData.city.name}
                </td>
            </tr>

        );
        
    }
    componentWillReceiveProps(nextProps){
        console.log(this.props);
        console.log('next');
        console.log(nextProps);
    }

    render() {
        console.log('in render')
        console.log(this.props.weather);
        //let weather = this.props.weather;
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temprature</th>
                        <th>Pressure</th>
                        <th>Humidty</th>

                    </tr>
                </thead>
                <tbody>
                    {this.props.weather.map(this.renderWeather)}
                    
                </tbody>
            </table>

        );
    }
}

function mapStateToProps({ weather }) {
    return { weather }
}

export default connect(mapStateToProps)(WeatherList);
import React, { Component } from 'react';
import { connect } from 'react-redux';
//import {Sparklines, SparklinesLine} from 'react-sparklines';


class WeatherList extends Component {


    renderWeather(cityData) {
        console.log('data', cityData);
        const name = cityData.city.name;
        return (
            <tr key={name}>
                <td>
                    {name}
                </td>
            </tr>

        );
        
    }
    
    render() {
       
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
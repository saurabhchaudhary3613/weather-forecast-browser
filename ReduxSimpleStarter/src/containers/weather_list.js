import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Sparklines, SparklinesLine } from 'react-sparklines';


class WeatherList extends Component {


    renderWeather(cityData) {
        console.log('data', cityData);
        const name = cityData.city.name;
        const temp = cityData.list.map(weather => weather.main.temp);
        const pressure = cityData.list.map(weather => weather.main.pressure);
        const humidity = cityData.list.map(weather => weather.main.humidity);
        console.log(temp);
        return (
            <tr key={name}>
                <td>
                    {name}
                </td>
                <td>
                    <Sparklines height={120} width={180} data={temp}>
                        <SparklinesLine color="red"/>
                    </Sparklines>
                </td>
                <td>
                    <Sparklines height={120} width={180} data={pressure}>
                        <SparklinesLine color="red"/>
                    </Sparklines>
                </td>
                <td>
                    <Sparklines height={120} width={180} data={humidity}>
                        <SparklinesLine color="red"/>
                    </Sparklines>
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
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google-map';


class WeatherList extends Component {


    renderWeather(cityData) {
        console.log('data', cityData);
        //const showmsg = true
       
        if(cityData) {
            const name = cityData.city.name;
            const temp = cityData.list.map(weather => weather.main.temp);
            const pressure = cityData.list.map(weather => weather.main.pressure);
            const humidity = cityData.list.map(weather => weather.main.humidity);
            // const lon = cityData.city.coord.lon;
            // const lat = cityData.city.coord.lat;
            const { lon, lat } = cityData.city.coord;

            console.log(temp);
            return (
            
                <tr key={name}>
                    {/* <td>
                        {name}
                    </td> */}
                    {<td><GoogleMap lon={lon} lat={lat} /></td>}
                   <td>
                       <Chart data={temp} color="orange" unit="K"/>
                   </td>
                   <td>
                       <Chart data={pressure} color="green" unit="hpa"/>
                   </td>
                   <td>
                       <Chart data={humidity} color="black" unit="%"/>
                   </td>
                </tr>
    
            ); 

        }else {
            return (
                <div>
                    Sorry, data is not available for this city.
                </div>
            )
        }
        
    }
    
    render() {
       
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temprature (k)</th>
                        <th>Pressure (hpa)</th>
                        <th>Humidty (%)</th>

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
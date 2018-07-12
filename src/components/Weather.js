import React, { Component } from 'react';
import WeatherAPI from '../WeatherApi';
import WeatherModel from '../models/Weather';

export default class Weather extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.api = new WeatherAPI('86c279f98dcc643c839697fc7fd258a6');
    }

    search(city) {
        this.api.weather(city).then(response => {
            const modelInfo = new WeatherModel(response.data);
            this.setState({ weather: modelInfo });
        });
    }

    renderWeather() {
        if (this.state.weather) {
            return (
                <ul>
                    <li className="city">{this.state.weather.city}</li>
                    <li>{this.state.weather.description}</li>
                    <li>{this.state.weather.temperature}</li>
                    <li>{this.state.weather.high}/{this.state.weather.low}</li> 
                </ul>
            );
        } else {
            return <h1>Welcome to Rain-Cast! Please Select a city.</h1>;
        }
    }

    render() {
        return <div>
            <input type="text" onBlur={e => this.search(e.target.value)}/>
            {this.renderWeather()}
        </div>;
    }
}
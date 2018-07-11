import axios from 'axios';

export default class WeatherApi {
    constructor(token) {
        this._baseUrl = 'http://api.openweathermap.org/data/2.5';
        this._token = token;
    }

    _url(path) {
        return `${this._baseUrl}${path}&APPID=${this._token}`;
    }

    weather(city) {
        return axios.get(this._url(`/weather?q=${city}&units=imperial`));
    }
}
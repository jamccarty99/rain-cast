export default class Weather {
    constructor(data) {
        const conditions = data.weather[0] || { 'description': 'unknown'};

        this._temperature = data.main.temp;
        this._description = conditions.description;
        this._city = data.name;
        this._high = data.main.temp_max;
        this._low = data.main.temp_min;
    }

    // translates to object.temperature
    get temperature() {
        return this._temperature;
    }

    get description() {
        return this._description;
    }

    get city() {
        return this._city;
    }

    get high() {
        return this._high;
    }

    get low() {
        return this._low;
    }
}
import WeatherApi from './WeatherApi';

it('loads from the API', done => {
    const api = new WeatherApi('86c279f98dcc643c839697fc7fd258a6');

    api.weather('London').then(response => {
        expect(response.data).not.toBeNull();
        done();
    });
})
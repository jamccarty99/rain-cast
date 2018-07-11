import Weather from './Weather';
import Fixtures from '../../resources/Fixtures';

it('retrieves basic weather information', () => {
    const weather = new Weather(Fixtures.london);
    expect(weather.temperature).toEqual(63.41);
    expect(weather.description).toEqual('clear sky');
    expect(weather.city).toEqual('London');
    expect(weather.high).toEqual(69.8);
    expect(weather.low).toEqual(59);
});

it('provides default when no description available', () => {
    const weather = new Weather(Fixtures.sampleNoDescription);
    expect(weather.description).toEqual('unknown');
});
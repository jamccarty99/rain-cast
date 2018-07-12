import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import Weather from './Weather';
import WeatherModel from '../models/Weather';
import Fixtures from '../../resources/Fixtures';

const sample = new WeatherModel(Fixtures.london);

it('renders weather when available', () => {
  const wrapper = shallow(<Weather />);
  wrapper.setState({ weather: sample });
  expect(wrapper.text()).toMatch('London');
  expect(wrapper.text()).toMatch('63.41');
  expect(wrapper.text()).toMatch('69.8/59');
});

import React from 'react';

import { shallow, mount } from 'enzyme';
import toJSON from 'enzyme-to-json';

import App from '../app/App';

describe('App', () => {

  it('shows the App component', () => {
    const wrapper = shallow(<App />);
    console.log(toJSON(wrapper));
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
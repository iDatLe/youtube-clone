<<<<<<< HEAD
import React from 'react';
import { shallow } from 'enzyme';
import { HomeContent } from '../HomeContent';

describe('HomeContent', () => {
  test('renders', () => {
    const wrapper = shallow(
        <HomeContent/>
    );
    expect(wrapper).toMatchSnapshot();
  });
  
=======
import React from 'react';
import { shallow } from 'enzyme';
import HomeContent from '../HomeContent';

describe('HomeContent', () => {
  test('renders', () => {
    const wrapper = shallow(
        <HomeContent/>
    );
    expect(wrapper).toMatchSnapshot();
  });
>>>>>>> 840cc7fbef9e7a1176f1893f1e700bdea41ad19a
});
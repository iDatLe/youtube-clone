import React from 'react';
import { shallow } from 'enzyme';
import { Video } from '../Video';

test('renders correctly', () => {
    const wrapper = shallow(
        <Video id='-7fuHEEmEjs'/>
    )
    expect(wrapper).toMatchSnapshot();
});

test('renders null if there is no video inside of it', () => {
    const wrapper = shallow(
        <Video />
    )
    expect(wrapper).toMatchSnapshot();
});
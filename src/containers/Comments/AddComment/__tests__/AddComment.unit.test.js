import React from 'react';
import { shallow } from 'enzyme';
import { AddComment } from '../AddComment';

describe('AddComment', () => {
    test('renders AddCommen component', () => {
        const wrapper = shallow(
            <AddComment />
        );
        expect(wrapper).toMatchSnapshot();
    });
});
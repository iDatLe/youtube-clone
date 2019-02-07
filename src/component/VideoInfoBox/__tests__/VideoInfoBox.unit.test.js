import React from 'react';
import { shallow } from 'enzyme';
import { VideoInfoBox } from '../VideoInfoBox';

describe('VideoInfoBox render', () => {
    test('render collapsed', () => {
        const wrapper = shallow(
            <VideoInfoBox />
        );
        expect(wrapper).toMatchSnapshot();
    })

    test('render expanded', () => {
        const wrapper = shallow(
            <VideoInfoBox />
        );
        // wrapper.setState({collapse: false})
        expect(wrapper).toMatchSnapshot();
    });
});
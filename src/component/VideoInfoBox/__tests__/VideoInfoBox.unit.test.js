import React from 'react';
// import { shallow } from 'enzyme';
import 'react-testing-library/cleanup-after-each'
import {render} from 'react-testing-library'
import { VideoInfoBox } from '../VideoInfoBox';

// describe('VideoInfoBox render', () => {
//     test('render collapsed', () => {
//         const wrapper = shallow(
//             <VideoInfoBox />
//         );
//         expect(wrapper).toMatchSnapshot();
//     })

//     test('render expanded', () => {
//         const wrapper = shallow(
//             <VideoInfoBox />
//         );
//         // wrapper.setState({collapse: false})
//         expect(wrapper).toMatchSnapshot();
//     });
// });

describe('VideoInfoBox render', () => {
    test('render collapsed', () => {
        const {videoinfobox} = render(<VideoInfoBox />)
    })

    test('render expanded', () => {
        const {videoinfobox} = render(<VideoInfoBox collapse={false}/>)

    })
})
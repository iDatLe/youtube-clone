import React from 'react';
import { shallow } from 'enzyme';
import { SideBarItem } from '../SideBarItem';

describe('SideBarItem', () => {

    test('Renders SideBarItem', () => {
        const wrapper = shallow( 
            <SideBarItem />
        )
        expect(wrapper).toMatchSnapshot();
    });

    test('Check highlights in SideBar', () => {
        const wrapper = shallow(
            <SideBarItem icon='fire' label='Trending' />
        )
        expect(wrapper).toMatchSnapshot();
    });

    test('Renders highlighted SideBarItem with no navigation', () => {
        const wrapper = shallow(
          <SideBarItem  highlighted icon='fire' label='Trending'/>
        );
        expect(wrapper).toMatchSnapshot();
      });
});

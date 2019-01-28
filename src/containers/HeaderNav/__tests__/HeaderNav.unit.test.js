import React from 'react';
import { shallow } from 'enzyme';
import HeaderNav from '../HeaderNav';

test('renders HeaderNav', () => {
    const wrapper = shallow( 
        // Shallow means we're executing the render method of the component
        // and not going down the hierarchy. For example, if child component is in parent component,
        // it'll only test parent and not child
        <HeaderNav />
    )
    expect(wrapper).toMatchSnapshot();
});
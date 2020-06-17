import { shallow } from 'enzyme';
import React from 'react';
import Header from '../Header';
import SideDrawer from '../SideDrawer';

it("displays side drawer when menu icon clicked", ()=>{
    const wrapper = shallow(<Header/>)

    expect(wrapper.find(SideDrawer)).not.toExist();
});

it("closes side drawer after side drawer is open, and outside clicked", ()=>{

});
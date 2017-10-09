import React from 'react';
import { shallow, configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { NavBar } from './nav-bar';

configure({ adapter: new Adapter() });

const history = {
  push: jest.fn(),
};

describe('NavBar', () => {
  it('should render without any data defined', () => {
    const component = shallow(
      <NavBar
        history={history}
      />);
    expect(component).toMatchSnapshot();
  });

  it('When button is clicked history.push is called', () => {
    const component = mount(
      <NavBar
        history={history}
      />);
    component.find('.home-click').simulate('click');
    expect(history.push).toHaveBeenCalled();
    expect(history.push.mock.calls[0][0]).toBe('/');
  });

  it('Renders with correct classes', () => {
    const component = mount(
      <NavBar
        history={history}
      />);

    expect(component.find('#navbar').length).toBe(1);
    expect(component.find('#title').length).toBe(1);
    expect(component.find('.menu-item').length).toBe(3);
    expect(component.find('.home').length).toBe(1);
    expect(component.find('.home-click').length).toBe(1);
    expect(component.find('.nav-links').length).toBe(1);
  });
});

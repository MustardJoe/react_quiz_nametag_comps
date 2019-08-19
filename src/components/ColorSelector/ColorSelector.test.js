import React from 'react';
import { shallow } from 'enzyme';
import ColorSelector from './ColorSelector';

describe('ColorSelector component', () => {
  it('renders ColorSelector', () => {


    const wrapper = shallow(<ColorSelector />);
    expect(wrapper).toMatchSnapshot();
  });

  it('handles the red button press', () => {
    /* eslint-disable no-console */
    console.log = jest.fn();
    const wrapper = shallow(<ColorSelector />);

    wrapper.find('button').at(0).simulate('click');

    /* eslint-disable no-console */
    expect(console.log).toHaveBeenCalledWith('please pretend the background is red');
  });
});

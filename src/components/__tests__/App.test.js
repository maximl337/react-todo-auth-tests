import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';
import Header from '../Header';

it('shows the header', () => {
  let wrapped = shallow(<App />);
  expect(wrapped.find(Header).length).toEqual(1);
})
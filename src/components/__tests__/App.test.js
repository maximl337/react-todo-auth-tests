import React from 'react';
import { shallow } from 'enzyme';
import { Route } from 'react-router-dom';
import App from '../App';
import Header from '../Header';

let wrapped;

beforeEach(() => {
  wrapped = shallow(<App />);
});

it('shows the header', () => {
  expect(wrapped.find(Header).length).toEqual(1);
})

it('shows routes', () => {
  expect(wrapped.find(Route).length).toEqual(4);
})
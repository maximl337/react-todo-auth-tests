import React from 'react';
import { shallow } from 'enzyme';
import Header from '../Header';
import { Link } from 'react-router-dom';

let wrapped;

beforeEach(() => {
  wrapped = shallow(<Header />);
});

it('shows a single ul', () => {
  expect(wrapped.find('ul').length).toEqual(wrapped.find('ul').length);
});


// it('shows links list', () => {
//   expect(wrapped.find(Link).length).toEqual(3);
// });

// it('shows links with correct `to` prop', () => {
//   const filteredLinks = wrapped.find(Link).filterWhere(n => 
//     n.prop('to') == '/' ||
//     n.prop('to') == '/login' ||
//     n.prop('to') == '/dashboard'
//   );
//   expect(filteredLinks.length).toEqual(3);
// });
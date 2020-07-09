import React from 'react';
import Enzyme from 'enzyme';
const {shallow } = Enzyme;
import Adapter from 'enzyme-adapter-react-16';

import MainTitle from '../client/src/index.jsx';

Enzyme.configure({adapter: new Adapter()});

describe('MainTitle Service', () => {
  var wrapper;

  it('should find the #mainTitle div when DescriptionService is mounted', () => {
    wrapper = shallow(<MainTitle />,  { disableLifecycleMethods: true });
    expect((wrapper).find('#mainTitle').length).toBe(1);
  });

})
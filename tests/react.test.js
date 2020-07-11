import React from 'react';
import Enzyme from 'enzyme';
const {shallow } = Enzyme;
import Adapter from 'enzyme-adapter-react-16';

import MainTitle from '../client/src/index.jsx';

Enzyme.configure({adapter: new Adapter()});

describe('MainTitle Service', () => {
  var wrapper;

  it('should find the #mainTitle div when MainTitle is mounted', () => {
    wrapper = shallow(<MainTitle />,  { disableLifecycleMethods: true });
    expect((wrapper).find('#mainTitle').length).toBe(1);
  });

  it('should find the #price div when MainTitle is mounted', () => {
    wrapper = shallow(<MainTitle />,  { disableLifecycleMethods: true });
    expect((wrapper).find('#price').length).toBe(1);
    expect((wrapper).find('#price span').length).toBe(2);
  });

  it('should find the #bottomSection div when MainTitle is mounted', () => {
    wrapper = shallow(<MainTitle />,  { disableLifecycleMethods: true });
    expect((wrapper).find('#bottomSection').length).toBe(1);
    expect((wrapper).find('#bottomSection span').length).toBe(3);
  });

  it('should find the #form div when MainTitle is mounted', () => {
    wrapper = shallow(<MainTitle />,  { disableLifecycleMethods: true });
    expect((wrapper).find('#form').length).toBe(1);
    expect((wrapper).find('#form input').length).toBe(3);
  });

  it("should have initial state set to '' ", () => {
    wrapper = shallow(<MainTitle />);
    expect(wrapper.instance().state.brand).toBe('');
    expect(wrapper.instance().state.title).toBe('');
  });
})
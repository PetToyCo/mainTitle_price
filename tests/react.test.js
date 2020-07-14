import React from 'react';
import Enzyme from 'enzyme';
const { shallow } = Enzyme;
import Adapter from 'enzyme-adapter-react-16';

import MainTitle from '../client/src/index.jsx';
import Info from '../client/src/info.jsx';

Enzyme.configure({ adapter: new Adapter() });

describe('mainTitle_price service', () => {
  var wrapper;

  var fakeState = {
    currency: '$',
    price: '9.99',
    length: '4',
    width: '3',
    brand: 'Meow',
    title: 'Cat Toy',
    rating: '4.5',
    reviews: '19'
  };

  it('should find the #mainTitle div when MainTitle is mounted', () => {
    wrapper = shallow(<MainTitle />, { disableLifecycleMethods: true });
    expect((wrapper).find('#mainTitle').length).toBe(1);
  });

  it("should load title, length, and width into title element", () => {
    wrapper = shallow(<Info product={fakeState} />);
    expect((wrapper).find('#title').text()).toBe('Cat Toy, 4" X 3"');
  });

  it("should load brand into 'by' element", () => {
    wrapper = shallow(<Info product={fakeState} />);
    expect((wrapper).find('#by').text()).toBe(`By: ${fakeState.brand}`);
  });

  it("should load number of reviews into numOfReviews element", () => {
    wrapper = shallow(<Info product={fakeState} />);
    expect((wrapper).find('#numOfReviews').text()).toBe(`(${fakeState.reviews})`);
    expect((wrapper).find('#stars span').length).toBe(6);
  });

  it("should load price and currency into price div", () => {
    wrapper = shallow(<Info product={fakeState} />);
    expect((wrapper).find('#currencySpan').text()).toBe(fakeState.currency);
    expect((wrapper).find('#priceSpan').text()).toBe(fakeState.price);
  });

});


import React from 'react';
import Enzyme from 'enzyme';
const { shallow, mount } = Enzyme;
import Adapter from 'enzyme-adapter-react-16';

import MainTitle from '../client/src/index.jsx';
import Info from '../client/src/info.jsx';
import Stars from '../client/src/stars.jsx';

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
    reviews: '19',
    blackStars: 3,
    whiteStars: 1,
    halfStars: 1
  };

  var fakeStars = {
    reviews: '11',
    blackStars: 3,
    whiteStars: 1,
    halfStars: 1
  }

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

  it("should load price and currency into price div", () => {
    wrapper = shallow(<Info product={fakeState} />);
    expect((wrapper).find('#currencySpan').text()).toBe(fakeState.currency);
    expect((wrapper).find('#priceSpan').text()).toBe(fakeState.price);
  });

  it("should correctly load data into Stars component", () => {
    wrapper = shallow(<Stars reviews={fakeStars.reviews} black={fakeStars.blackStars} white={fakeStars.whiteStars} half={fakeStars.halfStars} />);
    expect((wrapper).find('#numOfReviews').text()).toBe(`(${fakeStars.reviews})`);
    expect((wrapper).find('#starsSection span').length).toBe(7);
    expect((wrapper).find('#b1').length).toBe(1);
    expect((wrapper).find('#b2').length).toBe(1);
    expect((wrapper).find('#b3').length).toBe(1);
    expect((wrapper).find('#b4').length).toBe(0);
    expect((wrapper).find('#b5').length).toBe(0);
    expect((wrapper).find('#h1').length).toBe(1);
    expect((wrapper).find('#w1').length).toBe(1);
    expect((wrapper).find('#w2').length).toBe(0);
    expect((wrapper).find('#w3').length).toBe(0);
    expect((wrapper).find('#w4').length).toBe(0);
    expect((wrapper).find('#w5').length).toBe(0);
  });
});


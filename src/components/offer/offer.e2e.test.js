import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Offer from './offer.jsx';

Enzyme.configure({
  adapter: new Adapter()
});

const offer = {
  name: `Beautiful & luxurious apartment at great location`,
  type: `Apartment`,
  images: [`img/room.jpg`, `img/apartment-01.jpg`, `img/apartment-02.jpg`, `img/apartment-03.jpg`, `img/studio-01.jpg`, `img/apartment-01.jpg`],
  bedrooms: 3,
  adults: 4,
  price: 110,
  premium: false,
  rating: 4.51,
  bookmarked: true
};

it(`Offer item should have been saved`, () => {
  const event = {
    target: null
  };

  const handleMouseEnter = (e) => {
    event.target = e.target;
  };

  const offerWrapper = shallow(
      <Offer {...offer} handleMouseEnter={handleMouseEnter} />
  );

  offerWrapper.simulate(`mouseenter`, {target: offer.name});

  expect(event.target).toBe(`Beautiful & luxurious apartment at great location`);
});

import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Offer from './offer.jsx';

Enzyme.configure({
  adapter: new Adapter()
});

const offer = {
  name: `Cozy corner`
};

it(`Offer item should have been pressed`, () => {
  const onOfferClick = jest.fn();

  const offerWrapper = shallow(
      <Offer name={offer.name} onOfferClick={onOfferClick} />
  );

  const offerName = offerWrapper.find(`.place-card__name`);

  offerName.props().onClick();
  offerName.props().onClick();

  expect(onOfferClick.mock.calls.length).toBe(2);
});

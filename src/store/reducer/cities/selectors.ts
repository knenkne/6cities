import {city} from '../../../common/types';

interface State {
  cities: {
    current: city;
    data: city[];
  };
}

export const getCity = (state: State) => {
  return state.cities.current;
};

export const getCities = (state: State) => {
  return state.cities.data;
};


import Types from './types';
import {city} from '../../../common/types';
import extend from '../../../utils/extend/extend';

import {cities} from '../../../common/const';


interface State {
  current: city;
  data: city[];
}

interface Action {
  type: Types;
  payload: city;
}

const initialState: State = {
  current: cities[0],
  data: cities
};

export default (state: State = initialState, action: Action) => {
  switch (action.type) {
    case Types.SET_CITY: {
      return extend(state, {current: action.payload});
    }

    default: {
      return state;
    }
  }
};

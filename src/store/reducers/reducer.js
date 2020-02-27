import {extend} from '../utils.js';
import {LOL} from '../action-types.js';


const initialState = {
  cities: [],
  offers: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOL: {
      return extend(state, {lol: `kek`});
    }
    default: {
      return state;
    }
  }
};

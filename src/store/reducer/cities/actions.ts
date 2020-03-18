import Types from './types';
import {city} from '../../../common/types';

export const ActionCreator = {
  setCity: (name: city) =>
    ({
      type: Types.SET_CITY,
      payload: name,
    })
};

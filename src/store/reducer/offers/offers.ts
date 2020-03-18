import Types from './types';
import Adapter from '../../../adapter';
import {Offer, Review} from '../../../common/interfaces';
import {sort} from '../../../common/types';
import extend from '../../../utils/extend/extend';


interface State {
  sorting: sort;
  current: number;
  data: Offer[];
  nearby: Offer[];
  comments: Review[];
  favorites: Offer[];
}

interface Action {
  type: Types;
  payload: number | sort | Offer[] | Adapter[];
}

const initialState: State = {
  sorting: `id`,
  current: null,
  data: [],
  nearby: [],
  comments: [],
  favorites: []
};

export default (state = initialState, action: Action) => {
  switch (action.type) {
    case Types.SET_OFFER: {
      return extend(state, {current: action.payload});
    }

    case Types.SET_COMMENTS: {
      return extend(state, {comments: action.payload});
    }

    case Types.SET_SORTING: {
      return extend(state, {sorting: action.payload});
    }

    case Types.SET_OFFERS: {
      return extend(state, {data: action.payload});
    }

    case Types.SET_FAVORITES: {
      return extend(state, {favorites: action.payload});
    }

    case Types.SET_NEARBY: {
      return extend(state, {nearby: action.payload});
    }

    default: {
      return state;
    }
  }
};

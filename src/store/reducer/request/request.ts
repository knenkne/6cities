import Types from './types';
import {OperationStatus} from '../../../common/const';
import extend from '../../../utils/extend/extend';


interface State {
  type: string;
  status: OperationStatus;
  id: number;
}

interface Action {
  type: Types;
  payload: State;
}

const initialState: State = {
  type: ``,
  status: OperationStatus.EMPTY,
  id: null
};

export default (state: State = initialState, action: Action) => {
  switch (action.type) {
    case Types.SET_REQUEST: {
      const {type, status, id} = action.payload;
      return extend(state, {type, status, id});
    }

    default: {
      return state;
    }
  }
};

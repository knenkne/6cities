import Types from './types';

export const ActionCreator = {
  setRequest: ({type, status, id}) =>
    ({
      type: Types.SET_REQUEST,
      payload: {
        type,
        status,
        id
      }
    })
};



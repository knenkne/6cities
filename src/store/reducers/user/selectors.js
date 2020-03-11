export const getAuthorizationStatus = (state) => {
  return state.user.isAuthorized;
};

export const getUsername = (state) => {
  return state.user.email;
};

export const getOperationStatus = (state, name) => {
  return state.user[name];
};

export const getAuthorizationStatus = (state) => {
  return state.user.isAuthorized;
};

export const getUsername = (state) => {
  return state.user.email;
};

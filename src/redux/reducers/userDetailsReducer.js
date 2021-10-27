import actionTypes from '../../constants/actionTypes';

const defaultState = {};

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.SET_USER_API:
      return action.payload;
    default:
      return state;
  }
};

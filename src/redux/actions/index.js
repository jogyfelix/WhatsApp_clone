import actionTypes from '../../constants/actionTypes';

export const setUserApi = userDetails => {
  return {
    type: actionTypes.SET_USER_API,
    payload: userDetails,
  };
};

export const getUserApi = () => {
  return {
    type: actionTypes.GET_USER_API,
  };
};

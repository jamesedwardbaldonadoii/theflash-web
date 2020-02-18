import { LOADING_CLICK_LOGIN } from "../constants/ActionTypes";

// Loading when user did click login
export const setIsLoggingInLoading = value => {
  return {
    type: LOADING_CLICK_LOGIN,
    payload: value
  };
};

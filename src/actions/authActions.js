import axios from "axios";
import setAuthToken from "../utils/setAuthToken";
import jwt_decode from "jwt-decode";

import { GET_ERRORS, SET_CURRENT_USER, USER_LOADING } from "../constants/ActionTypes";
import { setIsLoggingInLoading } from "./loadingActions";
import { toggleLogin } from "./toggleActions";

// Register User
export const registerUser = (userData) => dispatch => {
  axios
    .post("/api/users/register", userData)
    .then(res => {
      dispatch(toggleLogin());
    })
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

// Login - get user token
export const loginUser = (userData, history) => dispatch => {
  dispatch(setIsLoggingInLoading(true));

  axios
    .post("/api/users/login", userData)
    .then(res => {
      // Save to localStorage

      // Set token to localStorage
      const { token } = res.data;
      localStorage.setItem("jwtToken", token);
      // Set token to Auth header
      setAuthToken(token);
      // Decode token to get user data
      const decoded = jwt_decode(token);
      // Set current user
      dispatch(setCurrentUser(decoded));
      dispatch(setIsLoggingInLoading(false));

      //Redirect to dashboard
      history.push("/dashboard");
    })
    .catch(err => {
        dispatch({
          type: GET_ERRORS,
          payload: err.response.data
        });

        dispatch(setIsLoggingInLoading(false));
      }
    );
};

// Set logged in user
export const setCurrentUser = decoded => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded
  };
};

// User loading
export const setUserLoading = () => {
  return {
    type: USER_LOADING
  };
};

// Log user out
export const logoutUser = (history) => dispatch => {
  // Remove token from local storage
  localStorage.removeItem("jwtToken");
  // Remove auth header for future requests
  setAuthToken(false);
  // Set current user to empty object {} which will set isAuthenticated to false
  dispatch(setCurrentUser({}));

  //Redirect to landing
  history.push("/");
};

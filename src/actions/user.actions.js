import { userConstants } from "../constants";
import { userService } from "../services";
import { alertActions } from "./";
import { history } from "../helpers";

export const userActions = {
  login,
  logout,
  getEmp,
};

function login(username, password) {
  return (dispatch) => {
    dispatch(request({ username }));

    userService.login(username, password).then(
      (user) => {
        dispatch(success(user));
        history.push("/");
      },
      (error) => {
        dispatch(failure(error));
        dispatch(alertActions.error(error));
      }
    );
  };

  function request(user) {
    return { type: userConstants.LOGIN_REQUEST, user };
  }
  function success(user) {
    return { type: userConstants.LOGIN_SUCCESS, user };
  }
  function failure(error) {
    return { type: userConstants.LOGIN_FAILURE, error };
  }
}

function logout() {
  return { type: userConstants.LOGOUT };
}

function getEmp(user) {
  return (dispatch) => {
    dispatch(request());

    userService.getEmp(user).then(
      (empList) => dispatch(success(empList)),
      (error) => dispatch(failure(error))
    );
  };

  function request() {
    return { type: userConstants.GETEMP_REQUEST };
  }
  function success(empList) {
    return { type: userConstants.GETEMP_SUCCESS, empList };
  }
  function failure(error) {
    return { type: userConstants.GETEMP_FAILURE, error };
  }
}

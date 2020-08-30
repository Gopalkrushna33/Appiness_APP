import LoginData from "../data/Login.json";
import EmpData from "../data/DashBoardPage.json";

export const userService = {
  login,
  getEmp,
};

function login(username, password) {
  if (username === LoginData.username && password === LoginData.password) {
    return Promise.resolve(LoginData);
  } else {
    return Promise.reject("Username or Password is wrong");
  }
}

function getEmp(user) {
  if (
    user.username === LoginData.username &&
    user.password === LoginData.password
  ) {
    return Promise.resolve(EmpData.user);
  } else {
    return Promise.reject("No Data Found");
  }
}

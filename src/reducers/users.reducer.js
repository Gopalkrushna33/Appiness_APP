import { userConstants } from "../constants";

export function empList(state = {}, action) {
  switch (action.type) {
    case userConstants.GETEMP_REQUEST:
      return {
        loading: true,
      };
    case userConstants.GETEMP_SUCCESS:
      return {
        items: action.empList,
      };
    case userConstants.GETEMP_FAILURE:
      return {
        error: action.error,
      };
    default:
      return state;
  }
}

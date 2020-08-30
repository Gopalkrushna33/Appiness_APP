import { combineReducers } from 'redux';

import { authentication } from './authentication.reducer';
import { empList } from './users.reducer';
import { alert } from './alert.reducer';

const rootReducer = combineReducers({
  authentication,
  empList,
  alert
});

export default rootReducer;
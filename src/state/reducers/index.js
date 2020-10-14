import { combineReducers } from "redux";

import questions from "./questions";
import { loadingBarReducer } from "react-redux-loading-bar";

export default combineReducers({
  questions,
  loadingBar: loadingBarReducer,
});

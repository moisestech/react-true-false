import { combineReducers } from "redux";

import answers from './answers';
import questions from "./questions";
import { loadingBarReducer } from "react-redux-loading-bar";

export default combineReducers({
  questions,
  answers,
  loadingBar: loadingBarReducer,
});

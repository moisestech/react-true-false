import { combineReducers } from "redux";

import answers from "./answers";
import questions from "./questions";
import typing from "./typing";
import { loadingBarReducer } from "react-redux-loading-bar";

export default combineReducers({
  questions,
  answers,
  typing,
  loadingBar: loadingBarReducer,
});

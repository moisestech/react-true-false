import ReactDOM from "react-dom";
import "./index.css";

// COMPONENTS
import App from "./components";

// REDUX
import reducer from "./state/reducers";
import middleware from "./state/middleware";
import LoadingBar from "react-redux-loading-bar";
import { Provider } from "react-redux";
import { createStore } from "redux";

const store = createStore(reducer, middleware);

ReactDOM.render(
  <Provider store={store}>
    <LoadingBar />
    <App />
  </Provider>,
  document.getElementById("root")
);

import ReactDOM from "react-dom";

// ROUTER
import { BrowserRouter as Router } from "react-router-dom";

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
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);

import "./app.css";
import { useEffect } from "react";

// ROUTER
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

// REDUX
import { useSelector, useDispatch } from "react-redux";
import { handleInitialData } from "../state/actions/questions";

// COMPONENTS
import Home from "../pages/Home";
import Quiz from "../pages/Quiz";
import Result from "../pages/Result";
import NotFound from "../pages/NotFound";
import Nav from "../components/Nav";

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(handleInitialData());
  }, [dispatch]);

  const store = useSelector((store) => store);

  return (
    <div className="app">
      <Nav />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route path="/quiz">
          <Quiz questions={store.questions} answers={store.answers} />
        </Route>

        <Route path="/result">
          <Result />
        </Route>

        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </div>
  );
}

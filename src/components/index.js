import { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { handleInitialData } from "../state/actions/questions";

// COMPONENTS
import Home from "../pages/Home";
import Quiz from "../pages/Quiz";
import NotFound from "../pages/NotFound";
import Nav from "../components/Nav";

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(handleInitialData());
  }, [dispatch]);

  const store = useSelector((store) => store);

  console.log("store", store);

  return (
    <Router>
      <div className="app container">
        <Nav />

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/quiz">
            <Quiz 
              questions={store.questions}
              answers={store.answers}
            />
          </Route>

          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

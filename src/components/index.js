import { useEffect } from "react";

// ROUTER
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useLocation,
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

// TRANSITION GROUP
import { TransitionGroup, CSSTransition } from "react-transition-group";

export default function App() {
  const dispatch = useDispatch();
  let location = useLocation();

  useEffect(() => {
    dispatch(handleInitialData());
  }, [dispatch]);

  const store = useSelector((store) => store);
  //console.log("store", store);

  return (
    <div className="app">
      <Nav />
      {/* <TransitionGroup className="container">
        <CSSTransition timeout={500} classNames="fade" key={location.key}> */}
      {/* location={location} */}
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
      {/* </CSSTransition>
      </TransitionGroup> */}
    </div>
  );
}

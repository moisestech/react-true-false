// ROUTER
import { NavLink } from "react-router-dom";

// REDUX
import { useDispatch } from "react-redux";
import { resetAnswers } from "../../state/actions/answers";

export default function Reset() {
  const dispatch = useDispatch();

  const handleReset = (e) => {
    //e.preventDefault();
    dispatch(resetAnswers());
  };

  return (
    <NavLink
      exact
      to="/quiz?number=1"
      className="start-quiz"
      onClick={(e) => handleReset(e)}
    >
      Play Again
    </NavLink>
  );
}

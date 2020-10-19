import "./results.css";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { resetAnswers } from "../../state/actions/answers";

function Score({ answersRight }) {
  return <div>{`You got ${answersRight}/10 correct!`}</div>;
}

Score.propTypes = {
  answersRight: PropTypes.number.isRequired,
};

function Reset() {
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

export default function Result() {
  const answers = useSelector((store) => store.answers);

  const handleScore = () => {
    const correctResults = answers.filter((answer) => {
      return answer.answerResult === "correct";
    }).length;

    return <Score answersRight={correctResults} />;
  };

  return (
    <div className="home">
      <div className="results">
        <div className="result-text">You've completed the challenge!</div>
        <div className="score-text">Your Score is:</div>
        <div className="score">{handleScore()}</div>
        <Reset />
      </div>
    </div>
  );
}

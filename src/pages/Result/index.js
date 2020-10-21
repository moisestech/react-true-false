import "./results.css";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";

// COMPONENTS
import ResetButton from "../../components/ResetButton";
import Stats from "../../components/Stats";

function Score({ answersRight }) {
  return <div>{`You got ${answersRight}/10 correct!`}</div>;
}

Score.propTypes = {
  answersRight: PropTypes.number.isRequired,
};

export default function Result() {
  const answers = useSelector((store) => store.answers);
  const questions = useSelector((store) => store.questions);

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
        <Stats questions={questions} answers={answers} />
        <ResetButton />
      </div>
    </div>
  );
}

Score.propTypes = {
  answersRight: PropTypes.number.isRequired,
};

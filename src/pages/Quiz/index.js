import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

export default function Quiz({ questions = [] }) {
  return (
    <div className="quiz-container">
      <pre className="quiz-data">{JSON.stringify(questions, null, 2)}</pre>
    </div>
  );
}

Quiz.propTypes = {
  questions: PropTypes.array.isRequired,
};

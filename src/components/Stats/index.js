import "./stats.css";
import PropTypes from "prop-types";

import Correct from "../../components/ResultSymbol/components/Correct";
import Wrong from "../../components/ResultSymbol/components/Wrong";

function HandleSymbol({ answer }) {
  console.log("HandleSymbol", answer);
  return answer === "correct" ? (
    <Correct />
  ) : answer === "wrong" ? (
    <Wrong />
  ) : null;
}

HandleSymbol.propTypes = {
  answer: PropTypes.string.isRequired,
};

export default function Stats({ questions, answers }) {
  function checkUserAnswer(index) {
    console.log(answers);
    console.log(answers[index].answerResult);
    const userAnswer = answers[index].answerResult;
    return userAnswer;
  }

  return (
    <div className="stats-container">
      {Object.entries(questions).map((question, index) => {
        const questionObj = question[1];
        return (
          <div className="question-stat" key={index}>
            <div className="question-stat-number">{index + 1}</div>
            <div
              className="question-stat-text"
              dangerouslySetInnerHTML={{ __html: questionObj.question }}
            />
            <div className={`question-stat-result ${checkUserAnswer(index)}`}>
              <HandleSymbol answer={checkUserAnswer(index)} />
            </div>
          </div>
        );
      })}
    </div>
  );
}

Stats.propTypes = {
  questions: PropTypes.object.isRequired,
  answers: PropTypes.array.isRequired,
};

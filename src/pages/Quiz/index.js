import { useEffect, useState } from 'react';
import PropTypes from "prop-types";

// ROUTING
import { NavLink, useLocation } from "react-router-dom";
import queryString from 'query-string';

// HELPERS
import { generateID, parseQuote } from '../../utils/helpers';

// COMPONENTS
import Question from "../../components/Question";
import AnswerButtons from '../../components/AnswerButtons';

export default function Quiz({ questions, answers }) {
  const [quizLength, setQuizLength] = useState(0);
  const lengthOfQuiz = Object.keys(questions).length;

  // receive question number from location
  const { search } = useLocation();
  const { number } = queryString.parse(search)
  const questionNumber = parseInt(number);

  // set length of quiz from props
  useEffect(() => {
    setQuizLength(lengthOfQuiz);
  }, [lengthOfQuiz])

  const handleIsAnswered = (questionNumber, answers) => {
    if (answers.length > 0) {
      if (answers[questionNumber-1].answerResult !== undefined) {
        const result = answers[questionNumber-1].answerResult
        if (result === "correct" || result === "wrong") {
          return true
        } else {
          return false
        }
      }  
    } else {
      return false 
    }
  }

  return (
    <div className="quiz-container">

      {Object.entries(questions)
        .filter(question => parseInt(question[0])+1 === questionNumber)
        .map(([filteredQuestion, value], index) => {
          return (
            <Question
              key={`${index+1}${generateID()}`}
              text={parseQuote(value.question)}
              category={value.category}
              correct_answer={value.correct_answer} 
              questionNumber={questionNumber}
              totalQuestions={quizLength}
              isAnswered={handleIsAnswered(questionNumber, answers)}
            />
          )
        })
      }

      <AnswerButtons 
        questionNumber={questionNumber} 
        questions={questions}
      /> 
    </div>
  );
}

Quiz.propTypes = {
  questions: PropTypes.object.isRequired,
  answers: PropTypes.array.isRequired
};

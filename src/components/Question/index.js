import PropTypes from 'prop-types';

// ROUTER
import { Redirect } from 'react-router-dom';


export default function Question ({
  category, 
  text,
  questionNumber, 
  totalQuestions,
  isAnswered}) {

  console.log("isAnswered", isAnswered)

  // Redirect if answered
  if (isAnswered === true) {
    if(questionNumber === 10) {
      return <Redirect to={"/result"} />
    } else {
      return <Redirect to={`/quiz?number=${questionNumber + 1}`} />
    }
  }

  return (
    <div className="question-card">
      <div className="header">
        <div className="category">Category: {category}</div>
        <div className="number">{questionNumber} out of {totalQuestions}</div>
      </div>
      <div className="text" dangerouslySetInnerHTML={{__html: text}} />
    </div>
  )
}

Question.propTypes = {
  category: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  correct_answer: PropTypes.string.isRequired,
  questionNumber: PropTypes.number.isRequired,
  isAnswered: PropTypes.bool
}
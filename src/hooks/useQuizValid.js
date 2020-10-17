import { useEffect, useState } from "react";

// const isQuizValid = (quizLength) => {
//   console.group("IS-QUIZ-VALID");
//   console.log("QUIZ-LENGTH:", quizLength);
//   console.groupEnd();
//   if (quizLength === 0 || quizLength === undefined) {
//     return false;
//   } else {
//     true;
//   }
// };

// const isQuestionValid = (questionNumber, quizLength) => {
//   //console.group("IS-QUESTION-VALID");
//   console.log("QUESTION-NUMBER:", questionNumber);
//   console.log("QUIZ-LENGTH:", quizLength);
//   //console.groupEnd();
//   if (questionNumber === 0) {
//     console.log("QUESTION NUMBER = 0", questionNumber === 0);
//     return false;
//   } else if (questionNumber > quizLength && quizLength !== 0) {
//     console.log("GREATER THAN QUIZ-LENGTH:", questionNumber > quizLength);
//     console.log("QUIZ-LENGTH-IS-NOT 0:", quizLength !== 0);
//     return false;
//   } else if (quizLength !== 0) {
//     console.log("GREATER THAN QUIZ-LENGTH:", questionNumber > quizLength);
//     return true;
//   } else {
//     return true;
//   }
// };

export default function useQuizValid(questionNumber, quizLength) {
  const [isQuizValid, setIsQuizValid] = useState(false);

  useEffect(() => {
    if (quizLength > 0) {
      if (questionNumber === 0) {
        console.log("QUESTION-NUMBER:", questionNumber);
        setIsQuizValid(false);
      } else if (questionNumber > quizLength) {
        console.log("GREATER THAN QUIZ-LENGTH:", questionNumber > quizLength);
        setIsQuizValid(false);
      } else {
        console.log("USE-QUIZ-VALID | QUESTION-NUMBER:", questionNumber);
        console.log("USE-QUIZ-VALID | QUIZ-LENGTH:", quizLength);
        setIsQuizValid(true);
      }
    }
  }, [questionNumber, quizLength]);

  return isQuizValid;
}

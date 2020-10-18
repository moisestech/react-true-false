import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function useQuizValid(questionNumber, quizLength) {
  const [isQuizValid, setIsQuizValid] = useState(false);
  const answers = useSelector((state) => state.answers);
  const question = questionNumber;

  useEffect(() => {
    if (quizLength > 0) {
      if (question === 0) {
        console.log("QUESTION-NUMBER CANNOT BE 0:", question);
        setIsQuizValid(false);
      } else if (typeof question === "string") {
        console.log(
          "QUESTION-NUMBER CANNOT BE STRING:",
          question,
          typeof question
        );
        setIsQuizValid(false);
      } else if (question > quizLength) {
        console.log(
          "QUESTION-NUMBER CANNOT BE GREATER THAN QUIZ LENGTH:",
          question,
          question > quizLength
        );
        setIsQuizValid(false);
      } else if (question !== 1 && answers[question - 2] === undefined) {
        console.log(
          "ALL PREVIOUS QUESTIONS MUST BE ANSWERED UNLESS IS 1:",
          question,
          `IS-ANSWERED ${answers[question - 2]}`,
          "ANSWERS",
          answers
        );
        setIsQuizValid(false);
      } else {
        console.log("QUIZ-VALID IS TRUE:", question);
        setIsQuizValid(true);
      }
    } else {
      setIsQuizValid(false);
    }
  }, [question, quizLength]);

  return isQuizValid;
}

const quizURL = "https://opentdb.com/api.php";

function getQuestions(quizURL, amount, difficulty, type) {
  const URL = `${quizURL}?amount=${amount}&difficulty=${difficulty}&type=${type}`;
  return fetch(URL)
    .then((res) => res.json())
    .then((json) => ({
      questions: json.results,
    }));

  // const results = json.results
  //   console.log("json.results", results)
  //   console.log("data", data);
  //   return results

  // async () => {
  //   const data = await fetch(quizURL);
  //   console.log("data", data);
  //   const questions = await data.json();
  //   console.log("getQuestions()", questions.results);
  //   return questions.results;
  // };
}

export function getInitialData() {
  return new Promise((res, rej) => {
    res(getQuestions(quizURL, 10, "hard", "boolean"));
  });

  // return new Promise((response, reject) => {
  //   response(getQuestions(quizURL));
  //   reject("Error in Promise getQuestions utils/api.js");
  // });
}

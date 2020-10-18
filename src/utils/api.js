const quizURL = "https://opentdb.com/api.php";

function getQuestions(quizURL, amount, difficulty, type) {
  const URL = `${quizURL}?amount=${amount}&difficulty=${difficulty}&type=${type}`;
  return fetch(URL)
    .then((res) => res.json())
    .then((json) => ({
      questions: json.results,
    }));
}

export function getInitialData() {
  return new Promise((res, rej) => {
    res(getQuestions(quizURL, 10, "hard", "boolean"));
  });
}

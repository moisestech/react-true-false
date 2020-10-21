# True False Challenge

<img src="https://raw.githubusercontent.com/moisestech/react-true-false/main/public/assets/react-truefalse-logo.png" width="150px"/>

**True or False Quiz challenge created in ReactJS**

🚧 In Progress 🚧

## Features

- React 17
- React Router v5
- React Hooks
- Redux
- ES6
- PropTypes
- Light/Dark Theme

## 👁️‍🗨️ Project Preview

Coming Soon!

## 🗺 URL Tree

```bash
├── /                   #Home
├── /start              #Start
├── /quiz               #Quiz
├── /quiz:idi           #Quiz:ID
├── /result             #Result
└── /*                  #404
```

## 🌿 App Tree

```bash
├── README.md
├── package.json
├── public
│   ├── _redirects
│   ├── assets
│   │   ├── not-found.gif
│   │   ├── react-truefalse-logo-square.png
│   │   └── true-false-spinner.gif
│   └── index.html
├── src
│   ├── components
│   │   ├── AnswerButtons
│   │   │   ├── answerbuttons.css
│   │   │   └── index.js
│   │   ├── FilterQuiz
│   │   │   └── index.js
│   │   ├── GlowButton
│   │   │   ├── glowbutton.css
│   │   │   └── index.js
│   │   ├── Logo
│   │   │   ├── index.js
│   │   │   └── logo.css
│   │   ├── Nav
│   │   │   ├── index.js
│   │   │   └── nav.css
│   │   ├── Question
│   │   │   ├── components
│   │   │   │   ├── Category
│   │   │   │   │   ├── icon-category.css
│   │   │   │   │   └── index.js
│   │   │   │   ├── Emoji
│   │   │   │   │   ├── emoji.css
│   │   │   │   │   └── index.js
│   │   │   │   └── IconCategory
│   │   │   │       └── index.js
│   │   │   ├── index.js
│   │   │   └── question.css
│   │   ├── ResetButton
│   │   │   └── index.js
│   │   ├── ResultSymbol
│   │   │   ├── components
│   │   │   │   ├── Correct
│   │   │   │   │   └── index.js
│   │   │   │   └── Wrong
│   │   │   │       └── index.js
│   │   │   ├── index.js
│   │   │   └── result-symbol.css
│   │   ├── Stats
│   │   │   ├── index.js
│   │   │   └── stats.css
│   │   ├── Timer
│   │   │   ├── index.js
│   │   │   └── timer.css
│   │   ├── Typing
│   │   │   ├── index.js
│   │   │   └── typing.css
│   │   ├── app.css
│   │   └── index.js
│   ├── contexts
│   ├── hooks
│   │   ├── useQueryValid.js
│   │   └── useQuizValid.js
│   ├── index.js
│   ├── pages
│   │   ├── Home
│   │   │   ├── home.css
│   │   │   └── index.js
│   │   ├── NotFound
│   │   │   ├── index.js
│   │   │   └── notfound.css
│   │   ├── Quiz
│   │   │   ├── index.js
│   │   │   └── quiz.css
│   │   └── Result
│   │       ├── index.js
│   │       └── results.css
│   ├── state
│   │   ├── actions
│   │   │   ├── answers.js
│   │   │   ├── questions.js
│   │   │   ├── quiz.js
│   │   │   └── typing.js
│   │   ├── middleware
│   │   │   ├── index.js
│   │   │   └── logger.js
│   │   └── reducers
│   │       ├── answers.js
│   │       ├── index.js
│   │       ├── questions.js
│   │       ├── quiz.js
│   │       └── typing.js
│   └── utils
│       ├── api.js
│       └── helpers.js
└── webpack.config.js
```

## ⛰️ Roadmap

- Add Fire base auth
- Add Leaderboard

## 📝 Todos

- Component Timeleft
- Page Results
- 404 if question URL is out of bounds
- Reset the store to play again
- Animate between Routes
- [Implement React CSS Modules](https://github.com/gajus/babel-plugin-react-css-modules)
- Redux Toolkit
- Test going back in url
- Test multiple url endpoints
- Test going directly to results page
- Add Mobile View
- Host in Netlify

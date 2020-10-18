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
│   │   ├── react-truefalse-logo.png
│   │   └── true-false-spinner.gif
│   └── index.html
├── src
│   ├── components
│   │   ├── Logo
│   │   │   └── index.js
│   │   ├── Nav
│   │   │   └── index.js
│   │   └── index.js
│   ├── contexts
│   ├── index.css
│   ├── index.js
│   ├── pages
│   │   ├── Home
│   │   │   └── index.js
│   │   ├── NotFound
│   │   │   └── index.js
│   │   └── Quiz
│   │       └── index.js
│   ├── state
│   │   ├── actions
│   │   │   └── questions.js
│   │   ├── middleware
│   │   │   ├── index.js
│   │   │   └── logger.js
│   │   └── reducers
│   │       ├── index.js
│   │       └── questions.js
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
- Host in Netlify

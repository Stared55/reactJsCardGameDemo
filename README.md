# `Welcome in the demo App developed by Stared55!`

This demo is created to demonstrate my skills in ReactJS/Native
Below I put some informations about packages and libraries which I've used

## How to run

> npm i && npm start

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `Styles`

To styling I chose `aphrodite` because I wanted to keep styling like I used to in `React Native`

In `src/styles` I've put some useful constants like palette with colors or some dummy typography

To handle flip animation I used 3rd library `react-card-flip`

Icons are fetch within `react-icons` and I've made an iconGenerator in `src/components/Icon`

### `Empty directories`

Some of the directories are empty to show you how I handled the architecture of the project.

### `Store and Persistor`

I chose `toolkit` to handle redux and persist to keep some dummy data in local storage. The reason why I decided to work with toolkit was the fact that I was working with it in the last two projects. I didn't implement any middleware like thunk or saga because it is too simple demo app, but I work with them a lot.

I've made some additional dummy functions in the gameSlicer

### `Routing`

I also made simple `Switch` with three screens like u want and in the first one I passed purposely one property by params instead of redux to show you how I handle it

### `Translation`

To translation I used `i18n` to could add in a simple way the feature languages

### `Configuration`

There is a configured `eslint` and `prettier`. I resigned from `husky` and `lint-staged`

# `Welcome in the demo App developed by Stared55!`

This demo has been created to demonstrate my skills in `ReactJS/Native`

Below I put some information about packages and libraries, which I've used

## How to run

> npm i && npm start

> Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `Styles`

For styling, I've chosen `aphrodite` because I wanted to keep styling like I used to in React Native

In `src/styles` I've put some useful constants like `palette` with colors or some dummy `typography`

In order to handle flip animation, I've used 3rd library `react-card-flip`

Icons have been fetched within `react-icons` and I've made an iconGenerator in `src/components/Icon`

### `Empty directories`

Some of the directories are empty just to show how I handled the architecture of the project.

### `Store and Persistor`

I've chosen `toolkit` to handle redux and persist to keep some dummy data in local storage. The reason why I've decided to work with toolkit was the fact that I was working with it in the last two projects. 

I didn't implement any middleware like `thunk` or `saga` because I found it too complex for a simple demo app, but I work with them a lot in general.

I've made some additional dummy functions in the gameSlicer

### `Routing`

I've also made simple `Switch` with three screens like it has been requested. In the first one, I passed purposely one property by params instead of redux to show you how I can handle it.

### `Translation`

For translation I've used `i18n` in order to be able to add the feature languages in a simple way

## `Configuration`

There have been `eslint` and `prettier` configured. I decided to resigne from `husky` and `lint-stager`

# Youtube App #

This is a simple React/Redux application that let you search youtube videos.

## Features Of This App: ##
- The app let you search a list of 25 videos
- You can click on one of those videos to watch it
- After you click on the video link, you will get redirect to another page
- The app has tests verifying it's functionality

Screenshot:

<img src="./src/assets/home.png" width="800"/>

<img src="./src/assets/video.png" width="800"/>

## To Start App ##
To utilize this repo, please do the following:

1. Fork & clone this repository
2. Do an NPM install inside your terminal to obtain necessary node modules: `npm install`
3. To run this app locally, run `npm start` inside your terminal to start up a development server with which you can preview your work at any given time.

## Testing ##
I screenshotted the testing coverage:

Test Coverage Details:

Test Coverage Details:
- Test coverage for components is **100%**
- Test coverage for reducers is **100%**
- Test coverage for actions is **100%**
- Test coverage for utils/api is **100%**

NOTE: I ignore src/index.js when running the coverage. I don't need to test React Dom Render and the store since they were tested by the creators.

1. run ```npm test``` to run all the tests without the test coverage interface
2. run ```npm test -- --coverage --coveragePathIgnorePatterns src/index.js src/redux/store``` to run all the tests with test coverage interface( we don't need to test React Dom Render and the store since they were tested by the creators);
3. run ```npm test -- --coverage``` to run all the files with the test coverage interface
4. run ```open coverage/lcov-report/index.html ``` to open coverage files detail

<img src="./src/assets/test-coverage.png" width="600" />


## Technologies Used

The app is currently built with Javascript, React and Redux.
Other pieces of technologies include:

I used redux-promise-middleware to render the loading screen.

* [Redux-Thunk](https://github.com/gaearon/redux-thunk)(A middleware allows you to write action creators that return a function instead of an action)

I used redux-thunk-middleware to ensure the flow of actions.

## Codes
You can see that the actions take in an api Object(it lives with in the src/utils/api.js directory). In this case, I utilized the extraArgument parameter inside the Thunk-Middleware and set my Api object as the extraArgument.

```Javascript
const store = createStore(reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunkMiddleware.withExtraArgument({ Api }), promiseMiddleware()),
);
```

I hope you had a good time when reviewing this app. I am always open to any feedback.

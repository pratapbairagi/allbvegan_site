# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)





<!-- my readme -->

## 1 for create new react app

> npx create-react-app app_name

## 2 for delete all files except public>index.htm and src> app.js , app.css, index.js , index.css ,reportWebVitals.js

## 3 do not edit index.htm

## 4 remove all css and elements or tags from app.js except top div

## 5 for using redux, we need to install redux and react redux, both are required to use redux

1. for redux
>npm i redux 

2. for react redux
npm i react-redux



## 6 for reducer , we need to create files
1. action_type.js
2. action.js
3. reducer.js
4. store.js

#for action type file
1. do not need to import any file
2. need to export create action type


#for action file
1. need to import action_type file
2. in action function , we need to pass any name as a paramters which we are getting from on dispatch call
3. here in this action function we will use type and payload/parameter (parameter/payload=receive dispatched value)
4. this payload/paramater will pass to the reducer file
5. need to export this action js file


#for reducer file
1. we need to import action_type file
2. have to create an initial state like
    const initial ={
        some_name:"
    }
3. create reducer function , and pass two parameters as :-
    state=initial,
    action
4. use switch case like :-
    switch(action.type){
        case action_type_file : return {...state, some_name:action.payload_name}
        defaule : return {...state}
    }
5. export this function

#for store , we need to import
    reducer file
    createStore from redux
    combineReducer from redux
const combineReducer = combineReducer({
    reducer: reducers_function_name
})
const store = createStore(combineReducer,window_redux_tool())


#to apply store file
1. go to index.js
2. import provider from react-redux
3. use <Provider> tag for provide store globally like :-
    <Provider>
    <app/> 
    </Provider>
4. place created main app file inside provider tag


## 7 to create view port component

1. create a separate new js file
2. create a main div with css:-
    width - 100%
    height - 100vh as min-height
3. create a nav tag inside main div with css :-
    width - 100%
    display - flex
4. create section divs as much as you want, like :-
    we have 3 divs inside nav :-
        first- div for left nav section
        second- div for mid nav section
        third- div for right nav section
5. create two inputs with :-
    type- image
    1st value max - for max button
    2nd value min- for min button
    src - image source for buttons
    alt- empty
    onClick- {handle_event} for both input button
6. create a function with  :-
    condition -
    if we get max value on button trigger then:-
        document.getElementById("id).requestFullscreen().catch(()=>{})
    if we get min value on button trigger then :-
        document.exitFullscreen()
7. use redux value to set condtion for full screen or actual screen function

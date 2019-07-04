import React from "react";
import ReactDOM from "react-dom";
import "!style!css!bootstrap/dist/css/bootstrap.min.css";

import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import MainComponent from "./reduxapp/maincomponent";
// import combinereducer as rootReducer
import rootReducer from "./reduxapp/reducers";
import { listAllProducts } from "./reduxapp/actions";
// 1. Store is created using reducer and Middleware
const store = createStore(rootReducer, applyMiddleware(thunk));
// store dispatch request to action
store.dispatch(listAllProducts());

// function onAppInit(dispatch) {
//   return (nextState, replace, callback) => {
//     dispatch(listAllProducts()).then(() => {
//       // callback is like a "next" function, app initialization is stopped until it is called.
//       callback();
//       alert("in init");
//     });
//   };
// }
// 3. The final rendering of MainComponent and
// state of the store is provided to it.
ReactDOM.render(
  <Provider store={store}>
    <MainComponent />
  </Provider>,
  document.getElementById("app")
);

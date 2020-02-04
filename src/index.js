import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./Store/Reducer/rootReducer";
import reduxThunk from "redux-thunk";
import 'sweetalert2/src/sweetalert2.scss'

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    })
    : compose;

const enhancer = composeEnhancers(
  applyMiddleware(reduxThunk)
  // other store enhancers if any
);

const store = createStore(rootReducer, enhancer);
// if (window.location.protocol === "http:") {
//   window.location = document.URL.replace("https://", "http://")
// }

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();


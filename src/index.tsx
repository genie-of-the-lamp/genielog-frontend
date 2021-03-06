import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import rootReducer, { rootSaga } from "./modules";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import createSagaMiddleware from "redux-saga";
import { createBrowserHistory } from "history";
import { Router } from "react-router-dom";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
import { tempSetUser, check } from "./modules/user";
import { HelmetProvider } from "react-helmet-async";

const customHistory = createBrowserHistory();

const sagaMiddleware = createSagaMiddleware({
  context: {
    history: customHistory,
  },
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

function loadUser() {
  try {
    const user = localStorage.getItem("user");
    if (!user) return;

    store.dispatch(tempSetUser(JSON.parse(user)));
    store.dispatch(check.request());
  } catch (e) {
    console.error("ocalStorage isn't working.");
  }
}

sagaMiddleware.run(rootSaga);
loadUser();

ReactDOM.render(
  <React.StrictMode>
    <Router history={customHistory}>
      <Provider store={store}>
        <HelmetProvider>
          <App />
        </HelmetProvider>
      </Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import App from "./containers/App/App";
import 'bootstrap/dist/css/bootstrap.min.css';
import configureStore from "./redux/ConfigureRedux";
import { Provider } from "react-redux";

const store = configureStore();
ReactDOM.render(
  <Provider store={store}>
    <App />
    
  </Provider>,
  document.getElementById("root")
);
serviceWorker.unregister();

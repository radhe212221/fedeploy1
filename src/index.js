import React from "react";
import ReactDOM from "react-dom/client";
import "./css/index.css";
import App from "./comp/App";
import reducer from "./reducer";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={createStore(reducer)}>
      <App />
      <ToastContainer />
    </Provider>
  </React.StrictMode>
);

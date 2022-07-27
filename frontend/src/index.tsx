import { JumbotronPage } from "components/jumbotron/Jumbotron";
import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import './global.css'
import Card from "components/cards/Card";

ReactDOM.render(
  <React.StrictMode>
    <JumbotronPage />
    <Card />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

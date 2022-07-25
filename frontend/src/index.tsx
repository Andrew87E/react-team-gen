import Card from "components/cards/Card";
import { JumbotronPage } from "components/jumbotron/Jumbotron";
import React from "react";
import ReactDOM from "react-dom";

ReactDOM.render(
  <React.StrictMode>
    <JumbotronPage />
    <Card />
    
  </React.StrictMode>,
  document.getElementById("root")
);

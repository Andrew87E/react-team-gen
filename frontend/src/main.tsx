import React from "react";
import ReactDOM from "react-dom/client";
import Footer from "./components/footer/footer";
import "./index.css";
import { JumbotronPage } from "./components/jumbotron/Jumbotron";
import Card from "./components/cards/Card";
import { Modal } from "./components/Modal/Modal";


ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <JumbotronPage />
    <Card />
    <Modal />
    <Footer />
  </React.StrictMode>
);

// need to add routes for log in page

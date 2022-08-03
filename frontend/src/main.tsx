import React, { Component } from "react";
import ReactDOM from "react-dom/client";
import Footer from "./components/footer/footer";
import "./index.css";
import { JumbotronPage } from "./components/jumbotron/Jumbotron";
import Card from "./components/cards/Card";
import { Modal } from "./components/Modal/Modal";
import Login from "./components/login/login";

type Props = {
  changeLogInState: boolean;
};

type State = {
  isLoggedIn: boolean;
};

// conditional render elements
class App extends React.Component<Props, State> {
    public state = {
      isLoggedIn: false,
    };

  renderPage() {
    if (this.state.isLoggedIn) {
      return <Modal />;
    }
  }

  render() {
    return (
      <React.StrictMode>
        <Login changeLogInState={() => this.setState({ isLoggedIn: true })} />
        {this.renderPage()}
      </React.StrictMode>
    );
  }
}

// main render element
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <JumbotronPage />
    <Card />
    <App changeLogInState />
    <Footer />
  </React.StrictMode>
);

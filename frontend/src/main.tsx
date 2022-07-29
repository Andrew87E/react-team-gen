import React from "react";
import ReactDOM from "react-dom/client";
import Footer from "./components/footer/footer";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import LoggedIn from "./Pages/LoggedIn";
import { Navbar } from "./components/navbar/navbar";
import { JumbotronPage } from "./components/jumbotron/Jumbotron";


ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
    <Navbar />
    <JumbotronPage />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<LoggedIn />} />
      </Routes>
    <Footer />
    </BrowserRouter>
  </React.StrictMode>
);

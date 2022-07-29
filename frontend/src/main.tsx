import React from "react";
import ReactDOM from "react-dom/client";
import Footer from "./components/footer/footer";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import LoggedIn from "./Pages/LoggedIn";
import Login from "./components/login/login";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Login />} />
        <Route path="/change" element={<LoggedIn />} />
      </Routes>
    <Footer />
    </BrowserRouter>
  </React.StrictMode>
);

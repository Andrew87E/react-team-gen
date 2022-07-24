import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { JumbotronPage } from './Components/Jumbotron';
import Card from './Components/Card';
import Footer from './Components/Footer';
import Modal from './Components/Modal/Modal';
import Login from './Components/login/Login';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <JumbotronPage />
    <Card />
    <Login />
    <Modal />
    <Footer />
  </React.StrictMode>
);


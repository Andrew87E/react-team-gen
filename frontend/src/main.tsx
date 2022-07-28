import React from 'react'
import ReactDOM from 'react-dom/client'
import Card from './components/cards/Card'
import Footer from './components/footer/footer'
import { JumbotronPage } from './components/jumbotron/Jumbotron'
import { Modal } from './components/Modal/Modal'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <JumbotronPage />
    <Card />
    <Modal />
    <Footer />
  </React.StrictMode>
)

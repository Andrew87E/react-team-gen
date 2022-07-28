import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { JumbotronPage } from './components/jumbotron/Jumbotron'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <JumbotronPage />
    <App />
  </React.StrictMode>
)

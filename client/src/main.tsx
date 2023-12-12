import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import './scss/main.scss'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
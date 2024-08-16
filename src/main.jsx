import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';

import { BudgetApp } from './BudgetApp'

import './styles.css';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <BudgetApp />
    </BrowserRouter>
  </React.StrictMode>
)

import React from 'react';
import ReactDOM from 'react-dom/client';

import { BudgetApp } from './BudgetApp'

import './styles.css';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BudgetApp />
  </React.StrictMode>
)

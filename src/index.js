import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Dashboard from "./pages/Dashboard"

import './style-global.css';
import Dimensiona from './pages';

ReactDOM.render(
  <React.StrictMode>
    <Dimensiona />


    <Router>
      <Route exact path="/Dashboard" component={Dashboard} />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

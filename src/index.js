import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'


import './style-global.css'
import Dimensiona from './pages'
import Dashboard from "./pages/Dashboard"
import Dashboard_Modelo from "./pages/Dashboard_Modelo"

window.addEventListener("load", async function (event) { // Preloader Página Inteira
  var preloader = document.querySelector('#preloader')
  preloader.style.display = "none"
});

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Route exact path="/" component={Dimensiona} />
      <Route exact path="/Dashboard" component={Dashboard} />
      <Route exact path="/Dashboard_Modelo" component={Dashboard_Modelo} />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

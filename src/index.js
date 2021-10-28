import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from "react-router-dom"

import './style-global.css'

import Login from './pages/Login'
// import Sair from './pages/Sair'
import Dimensiona from './pages'
import Dashboard from "./pages/Dashboard"
import Usuarios from './pages/Usuarios'
import Detalhes from './pages/Usuarios/Detalhes'
import Perfil from './pages/Perfil'
import Configuracoes from './pages/Configuracoes'
import Dashboard_Modelo from './pages/Dashboard_Modelo'
import TempoReal from './pages/TempoReal'

ReactDOM.render(
  <React.StrictMode>
    <Router>
        <Route exact path="/" component={Dimensiona} />
        <Route exact path="/Login" component={Login} />
        {/* <Route exact path="/Sair" component={Sair} /> */}
        <Route exact path="/Dashboard" component={Dashboard} />
        <Route exact path="/Usuarios" component={Usuarios} />
        <Route exact path="/Usuarios/Detalhes" component={Detalhes} />
        <Route exact path="/Perfil" component={Perfil} />
        <Route exact path="/Configuracoes" component={Configuracoes} />
        <Route exact path="/Dashboard_Modelo" component={Dashboard_Modelo} />
        <Route exact path="/TempoReal" component={TempoReal} />
    </Router>,
  </React.StrictMode>,
  document.getElementById('root')
);

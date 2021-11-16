import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from "react-router-dom"

import './style-global.css'

import Dimensiona from './pages'
import Login from './pages/Login'
import Cadastrar from './pages/Login/CadastrarUsuario'
import Recuperar from './pages/Login/RecuperarSenhaUsuario'
// import Sair from './pages/Sair'
import Dashboard from "./pages/Dashboard"
import Usuarios from './pages/Usuarios'
import Detalhes from './pages/Usuarios/Detalhes'
import Perfil from './pages/Perfil'
import Configuracoes from './pages/Configuracoes'
import CampanhaTempoReal from './pages/TempoReal/CampanhaTempoReal'
import CoordenadorTempoReal from './pages/TempoReal/CoordenadorTempoReal'
import SupervisorTempoReal from './pages/TempoReal/SupervisorTempoReal'
import OperadorTempoReal from './pages/TempoReal/OperadorTempoReal'
import CampanhaRelatorio from './pages/Relatorios/CampanhaRelatorio'
import CoordenadorRelatorio from './pages/Relatorios/CoordenadorRelatorio'
import SupervisorRelatorio from './pages/Relatorios/SupervisorRelatorio'
import OperadorRelatorio from './pages/Relatorios/OperadorRelatorio'

ReactDOM.render(
  <React.StrictMode>
    <Router>
        <Route exact path="/" component={Dimensiona} />
        <Route exact path="/Login" component={Login} />
        <Route exact path="/Cadastrar" component={Cadastrar} />
        <Route exact path="/Recuperar" component={Recuperar} />
        {/* <Route exact path="/Sair" component={Sair} /> */}
        <Route exact path="/Dashboard" component={Dashboard} />
        <Route exact path="/Usuarios" component={Usuarios} />
        <Route exact path="/Usuarios/Detalhes" component={Detalhes} />
        <Route exact path="/Perfil" component={Perfil} />
        <Route exact path="/Configuracoes" component={Configuracoes} />
        <Route exact path="/CampanhaTempoReal" component={CampanhaTempoReal} />
        <Route exact path="/CoordenadorTempoReal" component={CoordenadorTempoReal} />
        <Route exact path="/SupervisorTempoReal" component={SupervisorTempoReal} />
        <Route exact path="/OperadorTempoReal" component={OperadorTempoReal} />
        <Route exact path="/CampanhaRelatorio" component={CampanhaRelatorio} />
        <Route exact path="/CoordenadorRelatorio" component={CoordenadorRelatorio} />
      <Route exact path="/SupervisorRelatorio" component={SupervisorRelatorio} />
      <Route exact path="/OperadorRelatorio" component={OperadorRelatorio} />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

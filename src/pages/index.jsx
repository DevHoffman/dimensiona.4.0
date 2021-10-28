import './style.css'

import Dashboard from './Dashboard'
import Usuarios from './Usuarios'

import VerificaAuth from '../components/Funcoes/VerificaAuth' // Verifica autenticação do Usuário
import Navbar from '../components/Template/Navbar'
import Header from '../components/Template/Header'
import Footer from '../components/Template/Footer'

function Dimensiona() {
    VerificaAuth() // Verifica autenticação do Usuário
    const url = window.location.pathname;
    const segment = url.substring(url.lastIndexOf('/') + 1)

    const Componentes = () => {
        if ( segment === '' ) {
            return <Dashboard />
        }
        else if ( segment === 'Usuarios' ) {
            return <Usuarios />
        }
    }
    
    return (
        <div>
            {/* <!--begin::Body-->*/}
            <div id="kt_body" className="header-fixed header-tablet-and-mobile-fixed toolbar-enabled toolbar-fixed aside-enabled aside-fixed">
                {/* <!--begin::Main-->*/}
                {/* <!--begin::Root-->*/}
                <div className="d-flex flex-column flex-root">
                    {/* <!--begin::Page-->*/}
                    <div className="page d-flex flex-row flex-column-fluid">
                        {/* <!--begin::Aside-->*/}
                        <Navbar />
                        {/* <!--end::Aside-->*/}
                        {/* <!--begin::Wrapper-->*/}
                        <div className="wrapper d-flex flex-column flex-row-fluid" id="kt_wrapper">
                            {/* <!--begin::Header-->*/}
                            <Header />
                            {/* <!--end::Header-->*/}
                            {/* <!--begin::Content-->*/}
                            <div className="content d-flex flex-column flex-column-fluid" id="kt_content">
                                <Componentes />
                            </div>
                            {/* <!--end::Content-->*/}
                            {/* <!--begin::Footer-->*/}
                            <Footer />
                            {/* <!--end::Footer-->*/}
                        </div>
                        {/* <!--end::Wrapper-->*/}
                    </div>
                    {/* <!--end::Page-->*/}
                </div>
                {/* <!--end::Root-->*/}
                {/* <!--end::Main-->*/}
            </div>
            {/* <!--end::Body-->*/}
        </div>
    )
}

export default Dimensiona

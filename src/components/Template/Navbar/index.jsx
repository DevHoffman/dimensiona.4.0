import "./style.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChartLine, faUsersCog, faAngleDoubleLeft, faBuilding, faUserTie, faCrown, faUser } from '@fortawesome/free-solid-svg-icons'

import { Link } from "react-router-dom"

function Navbar() {
    const url = window.location.pathname;
    var segment

    if (url.substring(url.lastIndexOf('/') + 1) === '') {
        segment = 'Dashboard'
    }
    else if (url.substring(url.lastIndexOf('/') + 1) === 'CampanhaTempoReal') {
        segment = 'Campanhas em Tempo Real'
    }
    else if (url.substring(url.lastIndexOf('/') + 1) === 'CoordenadorTempoReal') {
        segment = 'Coordenadores em Tempo Real'
    }
    else if (url.substring(url.lastIndexOf('/') + 1) === 'SupervisorTempoReal') {
        segment = 'Supervisores em Tempo Real'
    }
    else if (url.substring(url.lastIndexOf('/') + 1) === 'OperadorTempoReal') {
        segment = 'Operadores em Tempo Real'
    }
    else if (url.substring(url.lastIndexOf('/') + 1) === 'CampanhaRelatorio') {
        segment = 'Relatórios das Campanhas'
    }
    else {
        segment = url.substring(url.lastIndexOf('/') + 1)
    }

    return(
        <div>
            <div id="kt_aside" className="aside aside-dark aside-hoverable" data-kt-drawer="true" data-kt-drawer-name="aside" data-kt-drawer-activate="{default: true, lg: false}" data-kt-drawer-overlay="true" data-kt-drawer-width="{default:'200px', '300px': '250px'}" data-kt-drawer-direction="start" data-kt-drawer-toggle="#kt_aside_mobile_toggle">
                {/* <!--begin::Brand-->*/}
                <div className="aside-logo flex-column-auto" id="kt_aside_logo">
                    {/* <!--begin::Logo-->*/}
                    <Link to="/" title="Redireciona para Home">
                        {/* <img alt="Logo" src="/assets/media/logos/logo-1-dark.svg" className="h-25px logo" /> */}
                        <h1 className="logo-color-light">Dimensiona</h1>
                    </Link>
                    {/* <!--end::Logo-->*/}
                    {/* <!--begin::Aside toggler-->*/}
                    <div id="kt_aside_toggle" className="btn btn-icon w-auto px-0 btn-active-color-primary aside-toggle" data-kt-toggle="true" data-kt-toggle-state="active" data-kt-toggle-target="body" data-kt-toggle-name="aside-minimize">
                        {/* <!--begin::Svg Icon | path: icons/duotune/arrows/arr079.svg-->*/}
                        <FontAwesomeIcon icon={faAngleDoubleLeft} />
                        {/* <!--end::Svg Icon-->*/}
                    </div>
                    {/* <!--end::Aside toggler-->*/}
                </div>
                {/* <!--end::Brand-->*/}
                {/* <!--begin::Aside menu-->*/}
                <div className="aside-menu flex-column-fluid">
                    {/* <!--begin::Aside Menu-->*/}
                    <div className="hover-scroll-overlay-y my-5 my-lg-5" id="kt_aside_menu_wrapper" data-kt-scroll="true" data-kt-scroll-activate="{default: false, lg: true}" data-kt-scroll-height="auto" data-kt-scroll-dependencies="#kt_aside_logo, #kt_aside_footer" data-kt-scroll-wrappers="#kt_aside_menu" data-kt-scroll-offset="0">
                        {/* <!--begin::Menu-->*/}
                        <div className="menu menu-column menu-title-gray-800 menu-state-title-primary menu-state-icon-primary menu-state-bullet-primary menu-arrow-gray-500" id="#kt_aside_menu" data-kt-menu="true">
                            <div className="menu-item">
                                <div className="menu-content pb-2">
                                    <span className="menu-section text-muted text-uppercase fs-8 ls-1">Dimensiona</span>
                                </div>
                            </div>
                            <div className="menu-item">
                                <Link to="/" className={segment === 'Dashboard' ? 'menu-link active' : 'menu-link' }>
                                    <span className="menu-icon">
                                        {/* <!--begin::Svg Icon | path: icons/duotune/general/gen025.svg-->*/}
                                        <FontAwesomeIcon icon={faChartLine} />
                                        {/* <!--end::Svg Icon-->*/}
                                    </span>
                                    <span className="menu-title">Dashboard</span>
                                </Link>
                            </div>

                            {/* Bloco Tempo Real */}
                            <div className="menu-item">
                                <div className="menu-content pb-2">
                                    <span className="menu-section text-muted text-uppercase fs-8 ls-1">Tempo Real</span>
                                </div>
                            </div>
                            <div className="menu-item">
                                <Link to="/CampanhaTempoReal" className={segment === 'Campanhas em Tempo Real' ? 'menu-link active' : 'menu-link' }>
                                    <span className="menu-icon">
                                        {/* <!--begin::Svg Icon | path: icons/duotune/general/gen025.svg-->*/}
                                        <FontAwesomeIcon icon={faBuilding} />
                                        {/* <!--end::Svg Icon-->*/}
                                    </span>
                                    <span className="menu-title">Campanha</span>
                                </Link>
                            </div>
                            <div className="menu-item">
                                <Link to="/CoordenadorTempoReal" className={segment === 'Coordenadores em Tempo Real' ? 'menu-link active' : 'menu-link' }>
                                    <span className="menu-icon">
                                        {/* <!--begin::Svg Icon | path: icons/duotune/general/gen025.svg-->*/}
                                        <FontAwesomeIcon icon={faCrown} />
                                        {/* <!--end::Svg Icon-->*/}
                                    </span>
                                    <span className="menu-title">Coordenador</span>
                                </Link>
                            </div>
                            <div className="menu-item">
                                <Link to="/SupervisorTempoReal" className={segment === 'Supervisores em Tempo Real' ? 'menu-link active' : 'menu-link' }>
                                    <span className="menu-icon">
                                        {/* <!--begin::Svg Icon | path: icons/duotune/general/gen025.svg-->*/}
                                        <FontAwesomeIcon icon={faUserTie} />
                                        {/* <!--end::Svg Icon-->*/}
                                    </span>
                                    <span className="menu-title">Supervisor</span>
                                </Link>
                            </div>
                            <div className="menu-item">
                                <Link to="/OperadorTempoReal" className={segment === 'Operadores em Tempo Real' ? 'menu-link active' : 'menu-link' }>
                                    <span className="menu-icon">
                                        {/* <!--begin::Svg Icon | path: icons/duotune/general/gen025.svg-->*/}
                                        <FontAwesomeIcon icon={faUser} />
                                        {/* <!--end::Svg Icon-->*/}
                                    </span>
                                    <span className="menu-title">Operador</span>
                                </Link>
                            </div>
                            {/* Bloco Tempo Real Fim */}

                            {/* Bloco Relatório */}
                            <div className="menu-item">
                                <div className="menu-content pb-2">
                                    <span className="menu-section text-muted text-uppercase fs-8 ls-1">Gerar Relatórios</span>
                                </div>
                            </div>
                            <div className="menu-item">
                                <Link to="/CampanhaRelatorio" className={segment === 'Relatórios das Campanhas' ? 'menu-link active' : 'menu-link'}>
                                    <span className="menu-icon">
                                        {/* <!--begin::Svg Icon | path: icons/duotune/general/gen025.svg-->*/}
                                        <FontAwesomeIcon icon={faBuilding} />
                                        {/* <!--end::Svg Icon-->*/}
                                    </span>
                                    <span className="menu-title">Campanha</span>
                                </Link>
                            </div>

                        </div>
                        {/* <!--end::Menu-->*/}
                        {/* <!--begin::Menu-->*/}
                        <div className="menu menu-column menu-title-gray-800 menu-state-title-primary menu-state-icon-primary menu-state-bullet-primary menu-arrow-gray-500" id="#kt_aside_menu" data-kt-menu="true">
                            <div className="menu-item">
                                <div className="menu-content pb-2">
                                    <span className="menu-section text-muted text-uppercase fs-8 ls-1">Configurações</span>
                                </div>
                            </div>
                            <div className="menu-item">
                                <Link to="/Usuarios" className={segment === 'Usuarios' ? 'menu-link active' : 'menu-link' }>
                                    <span className="menu-icon">
                                        {/* <!--begin::Svg Icon | path: icons/duotune/general/gen025.svg-->*/}
                                        <span className="svg-icon svg-icon-2">
                                            <FontAwesomeIcon icon={faUsersCog} />
                                        </span>
                                        {/* <!--end::Svg Icon-->*/}
                                    </span>
                                    <span className="menu-title">Usuários</span>
                                </Link>
                            </div>
                        </div>
                        {/* <!--end::Menu-->*/}
                    </div>
                    {/* <!--end::Aside Menu-->*/}
                </div>
                {/* <!--end::Aside menu-->*/}
            </div>
        </div>
    )
}

export default Navbar;

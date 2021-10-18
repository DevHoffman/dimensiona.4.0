import { Link } from "react-router-dom"

import './style.css'
import SubMenuOptions from "./SubMenuOptions"

function Header() {

    let Dados = []
    let NomeUsuario = ''
    Dados = localStorage.getItem('user_data')
    Dados = JSON.parse(Dados) // Transforma em objetos acessíveis

    function separarPalavras(stringToSplit, separator) {
        var arrayOfStrings = stringToSplit.split(separator)
        return arrayOfStrings[0]
    }

    NomeUsuario = Dados.Usuario
    NomeUsuario = separarPalavras(NomeUsuario, ' ')

    function onClickExibeOptions() {
        var menu_sub = document.querySelector('#kt_menu_options')
        menu_sub.classList.toggle('show-custom')
        menu_sub.classList.toggle('show')
    }
    
    return (
        <div>
            <div id="kt_header" className="header align-items-stretch">
                {/* <!--begin::Container-->*/}
                <div className="container-fluid d-flex align-items-stretch justify-content-between">
                    {/* <!--begin::Aside mobile toggle-->*/}
                    <div className="d-flex align-items-center d-lg-none ms-n3 me-1" title="Show aside menu">
                        <div className="btn btn-icon btn-active-light-primary w-30px h-30px w-md-40px h-md-40px" id="kt_aside_mobile_toggle">
                            {/* <!--begin::Svg Icon | path: icons/duotune/abstract/abs015.svg-->*/}
                            <span className="svg-icon svg-icon-2x mt-1">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M21 7H3C2.4 7 2 6.6 2 6V4C2 3.4 2.4 3 3 3H21C21.6 3 22 3.4 22 4V6C22 6.6 21.6 7 21 7Z" fill="black" />
                                    <path opacity="0.3" d="M21 14H3C2.4 14 2 13.6 2 13V11C2 10.4 2.4 10 3 10H21C21.6 10 22 10.4 22 11V13C22 13.6 21.6 14 21 14ZM22 20V18C22 17.4 21.6 17 21 17H3C2.4 17 2 17.4 2 18V20C2 20.6 2.4 21 3 21H21C21.6 21 22 20.6 22 20Z" fill="black" />
                                </svg>
                            </span>
                            {/* <!--end::Svg Icon-->*/}
                        </div>
                    </div>
                    {/* <!--end::Aside mobile toggle-->*/}
                    {/* <!--begin::Mobile logo-->*/}
                    <div className="d-flex align-items-center flex-grow-1 flex-lg-grow-0">
                        <a href="../../demo1/dist/index.html" className="d-lg-none">
                            <img alt="Logo" src={Dados.Foto} className="h-30px" />
                        </a>
                    </div>
                    {/* <!--end::Mobile logo-->*/}
                    {/* <!--begin::Wrapper-->*/}
                    <div className="d-flex align-items-stretch justify-content-between flex-lg-grow-1">
                        {/* <!--begin::Navbar-->*/}
                        <div className="d-flex align-items-stretch" id="kt_header_nav">
                            {/* <!--begin::Menu wrapper-->*/}
                            <div className="header-menu align-items-stretch" data-kt-drawer="true" data-kt-drawer-name="header-menu" data-kt-drawer-activate="{default: true, lg: false}" data-kt-drawer-overlay="true" data-kt-drawer-width="{default:'200px', '300px': '250px'}" data-kt-drawer-direction="end" data-kt-drawer-toggle="#kt_header_menu_mobile_toggle" data-kt-swapper="true" data-kt-swapper-mode="prepend" data-kt-swapper-parent="{default: '#kt_body', lg: '#kt_header_nav'}">
                                {/* <!--begin::Menu-->*/}
                                <div className="menu menu-lg-rounded menu-column menu-lg-row menu-state-bg menu-title-gray-700 menu-state-title-primary menu-state-icon-primary menu-state-bullet-primary menu-arrow-gray-400 fw-bold my-5 my-lg-0 align-items-stretch" id="#kt_header_menu" data-kt-menu="true">
                                    <div className="menu-item me-lg-1">
                                        <Link className="menu-link active py-3" to={'./'}>
                                            <span className="menu-title">Dashboard</span>
                                        </Link>
                                    </div>
                                </div>
                                {/* <!--end::Menu-->*/}
                            </div>
                            {/* <!--end::Menu wrapper-->*/}
                        </div>
                        {/* <!--end::Navbar-->*/}
                        {/* <!--begin::Topbar-->*/}
                        <div className="d-flex align-items-stretch flex-shrink-0">
                            {/* <!--begin::Toolbar wrapper-->*/}
                            <div className="d-flex align-items-stretch flex-shrink-0" onClick={onClickExibeOptions}>
                                {/* <!--begin::Quick links-->*/}
                                <div className="d-flex align-items-center">
                                    {/* <!--begin::Menu wrapper-->*/}
                                    <div className="btn ">
                                        <h3 className="fw-bold no-margin">Olá, {NomeUsuario}</h3>
                                    </div>
                                    {/* <!--end::Menu wrapper-->*/}
                                </div>
                                {/* <!--end::Quick links-->*/}
                                {/* <!--begin::User-->*/}
                                <div className="d-flex align-items-center ms-1 ms-lg-3">
                                    {/* <!--begin::Menu wrapper-->*/}
                                    <div className="cursor-pointer symbol symbol-30px symbol-md-40px">
                                        <img src={Dados.Foto} alt="Imagem do Usuário" />
                                    </div>
                                    {/* <!--begin::Menu-->*/}
                                    <SubMenuOptions />
                                    {/* <!--end::Menu-->*/}
                                    {/* <!--end::Menu wrapper-->*/}
                                </div>
                                {/* <!--end::User -->*/}
                                {/* <!--begin::Heaeder menu toggle-->*/}
                                <div className="d-flex align-items-center d-lg-none ms-2 me-n3" title="Show header menu">
                                    <div className="btn btn-icon btn-active-light-primary w-30px h-30px w-md-40px h-md-40px" id="kt_header_menu_mobile_toggle">
                                        {/* <!--begin::Svg Icon | path: icons/duotune/text/txt001.svg-->*/}
                                        <span className="svg-icon svg-icon-1">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                <path d="M13 11H3C2.4 11 2 10.6 2 10V9C2 8.4 2.4 8 3 8H13C13.6 8 14 8.4 14 9V10C14 10.6 13.6 11 13 11ZM22 5V4C22 3.4 21.6 3 21 3H3C2.4 3 2 3.4 2 4V5C2 5.6 2.4 6 3 6H21C21.6 6 22 5.6 22 5Z" fill="black" />
                                                <path opacity="0.3" d="M21 16H3C2.4 16 2 15.6 2 15V14C2 13.4 2.4 13 3 13H21C21.6 13 22 13.4 22 14V15C22 15.6 21.6 16 21 16ZM14 20V19C14 18.4 13.6 18 13 18H3C2.4 18 2 18.4 2 19V20C2 20.6 2.4 21 3 21H13C13.6 21 14 20.6 14 20Z" fill="black" />
                                            </svg>
                                        </span>
                                        {/* <!--end::Svg Icon-->*/}
                                    </div>
                                </div>
                                {/* <!--end::Heaeder menu toggle-->*/}
                            </div>
                            {/* <!--end::Toolbar wrapper-->*/}
                        </div>
                        {/* <!--end::Topbar-->*/}
                    </div>
                    {/* <!--end::Wrapper-->*/}
                </div>
                {/* <!--end::Container-->*/}
            </div>
        </div>
    )
}

export default Header;
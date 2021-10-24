import './style.css'

import { Link } from "react-router-dom"

function Footer() {
    return(
        <div>
            <div className="footer py-4 d-flex flex-lg-column" id="kt_footer">
                {/* <!--begin::Container-->*/}
                <div className="container-fluid d-flex flex-column flex-md-row align-items-center justify-content-between">
                    {/* <!--begin::Copyright-->*/}
                    <div className="text-dark order-2 order-md-1">
                        <span className="text-muted fw-bold me-1">2021©</span>
                        <a href="https://keenthemes.com" target="_blank" className="text-gray-800 text-hover-primary" rel="noreferrer">Hoffman</a>
                    </div>
                    {/* <!--end::Copyright-->*/}
                    {/* <!--begin::Menu-->*/}
                    <ul className="menu menu-gray-600 menu-hover-primary fw-bold order-1">
                        <li className="menu-item">
                            <Link to="#nada" target="_blank" className="menu-link px-2" rel="noreferrer">Sobre</Link>
                        </li>
                        <li className="menu-item">
                            <Link to="#nada" target="_blank" className="menu-link px-2" rel="noreferrer">Suporte</Link>
                        </li>
                    </ul>
                    {/* <!--end::Menu-->*/}
                </div>
                {/* <!--end::Container-->*/}
            </div>
        </div>
    )
}

export default Footer;
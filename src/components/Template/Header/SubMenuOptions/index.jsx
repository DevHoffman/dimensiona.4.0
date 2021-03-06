import { Link, useHistory } from "react-router-dom"
import iziToast from 'izitoast'
import { useState } from "react"

function SubMenuOptions() {
    const [contrast, setContrast] = useState(false)
    let history = useHistory()

    function Sair(e) {
        e.preventDefault()
        iziToast.destroy()
        console.clear()
        iziToast.info({
            title: 'Usuário Deslogado',
            position: 'topRight', // bottomRight, bottomLeft, topRight, topLeft, topCenter, bottomCenter, center
            transitionOut: 'fadeOut',
            timeout: 3000,
        })
        localStorage.clear()
        history.push("/Login")
    }

    // Auto Contraste Função
    function toggleContrast() { // Função de contrast
        document.body.classList.toggle('contrast')
        setContrast(!contrast)
    }
    // FIM AUTOCONTRASTE

    // Caso tenha API
    // let Dados = []
    // let NomeUsuario = ''
    // Dados = localStorage.getItem('user_data')
    // Dados = JSON.parse(Dados) // Transforma em objetos acessíveis

    // function separarPalavras(stringToSplit, separator) {
    //     var arrayOfStrings = stringToSplit.split(separator)
    //     return arrayOfStrings[0]
    // }

    // NomeUsuario = Dados.Usuario
    // NomeUsuario = separarPalavras(NomeUsuario, ' ')

    return(
        <div>
            <div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg menu-state-primary fw-bold py-4 fs-6 w-275px" data-kt-menu="true" id="kt_menu_options">
                {/* <!--begin::Menu item-->*/}
                <div className="menu-item px-3">
                    <div className="menu-content d-flex align-items-center px-3">
                        {/* <!--begin::Avatar-->*/}
                        <div className="symbol symbol-50px me-5">
                            <img alt="Logo" src="./assets/media/avatars/user-04.jpg"/>
                        </div>
                        {/* <!--end::Avatar-->*/}
                        {/* <!--begin::Username-->*/}
                        <div className="d-flex flex-column">
                            <div className="text-dark fw-bolder fs-3 my-1">Thyago
                                <span className="badge badge-light-success fw-bolder fs-8 px-2 py-1 ms-2">Pro</span></div>
                            <a href="#nada" className="fw-bold text-muted text-hover-primary fs-7">thoffman1698@gmail.com</a>
                        </div>
                        {/* <!--end::Username-->*/}
                    </div>
                </div>
                {/* <!--end::Menu item-->*/}
                {/* <!--begin::Menu separator-->*/}
                <div className="separator my-2"></div>
                {/* <!--end::Menu separator-->*/}
                {/* <!--begin::Menu item-->*/}
                {/* <div className="menu-item px-5">
                    <a href="../../demo1/dist/pages/projects/list.html" className="menu-link px-5">
                        <span className="menu-text">My Projects</span>
                        <span className="menu-badge">
                            <span className="badge badge-light-danger badge-circle fw-bolder fs-7">3</span>
                        </span>
                    </a>
                </div> */}
                {/* <!--end::Menu item-->*/}
                {/* <!--begin::Menu item-->*/}
                <div className="menu-item px-5" data-kt-menu-trigger="hover" data-kt-menu-placement="left-start">
                    {/* <a href="#nada" className="menu-link px-5">
                        <span className="menu-title">My Subscription</span>
                        <span className="menu-arrow"></span>
                    </a> */}
                    {/* <!--begin::Menu sub-->*/}
                    <div className="menu-sub menu-sub-dropdown w-175px py-4">
                        {/* <!--begin::Menu item-->*/}
                        <div className="menu-item px-3">
                            <a href="../../demo1/dist/account/referrals.html" className="menu-link px-5">Referrals</a>
                        </div>
                        {/* <!--end::Menu item-->*/}
                        {/* <!--begin::Menu item-->*/}
                        <div className="menu-item px-3">
                            <a href="../../demo1/dist/account/billing.html" className="menu-link px-5">Billing</a>
                        </div>
                        {/* <!--end::Menu item-->*/}
                        {/* <!--begin::Menu item-->*/}
                        <div className="menu-item px-3">
                            <a href="../../demo1/dist/account/statements.html" className="menu-link px-5">Payments</a>
                        </div>
                        {/* <!--end::Menu item-->*/}
                        {/* <!--begin::Menu item-->*/}
                        <div className="menu-item px-3">
                            <a href="../../demo1/dist/account/statements.html" className="menu-link d-flex flex-stack px-5">Statements
                                <i className="fas fa-exclamation-circle ms-2 fs-7" data-bs-toggle="tooltip" title="View your statements"></i></a>
                        </div>
                        {/* <!--end::Menu item-->*/}
                        {/* <!--begin::Menu separator-->*/}
                        <div className="separator my-2"></div>
                        {/* <!--end::Menu separator-->*/}
                        {/* <!--begin::Menu item-->*/}
                        <div className="menu-item px-3">
                            <div className="menu-content px-3">
                                <label className="form-check form-switch form-check-custom form-check-solid">
                                    <input className="form-check-input w-30px h-20px" type="checkbox" defaultValue="1" defaultChecked name="notifications" />
                                    <span className="form-check-label text-muted fs-7">Notifications</span>
                                </label>
                            </div>
                        </div>
                        {/* <!--end::Menu item-->*/}
                    </div>
                    {/* <!--end::Menu sub-->*/}
                </div>
                {/* <!--end::Menu item-->*/}
                {/* <!--begin::Menu item-->*/}
                <div className="menu-item px-5">
                    <Link to="/Perfil" className="menu-link px-5">Meu Perfil</Link>
                </div>
                {/* <!--end::Menu item-->*/}
                {/* <!--begin::Menu separator-->*/}
                <div className="separator my-2"></div>
                {/* <!--end::Menu separator-->*/}
                {/* <!--begin::Menu item-->*/}
                <div className="menu-item px-5" data-kt-menu-trigger="hover" data-kt-menu-placement="left-start">
                    {/* <a href="#nada" className="menu-link px-5">
                        <span className="menu-title position-relative">Language
                            <span className="fs-8 rounded bg-light px-3 py-2 position-absolute translate-middle-y top-50 end-0">English
                                <img className="w-15px h-15px rounded-1 ms-2" src="assets/media/flags/united-states.svg" alt="" />
                            </span>
                        </span>
                    </a> */}
                    {/* <!--begin::Menu sub-->*/}
                    <div className="menu-sub menu-sub-dropdown w-175px py-4">
                        {/* <!--begin::Menu item-->*/}
                        <div className="menu-item px-3">
                            <a href="../../demo1/dist/account/settings.html" className="menu-link d-flex px-5 active">
                                <span className="symbol symbol-20px me-4">
                                    <img className="rounded-1" src="assets/media/flags/united-states.svg" alt="" />
                                </span>English
                            </a>
                        </div>
                        {/* <!--end::Menu item-->*/}
                        {/* <!--begin::Menu item-->*/}
                        <div className="menu-item px-3">
                            <a href="../../demo1/dist/account/settings.html" className="menu-link d-flex px-5">
                                <span className="symbol symbol-20px me-4">
                                    <img className="rounded-1" src="assets/media/flags/spain.svg" alt="" />
                                </span>Spanish</a>
                        </div>
                        {/* <!--end::Menu item-->*/}
                        {/* <!--begin::Menu item-->*/}
                        <div className="menu-item px-3">
                            <a href="../../demo1/dist/account/settings.html" className="menu-link d-flex px-5">
                                <span className="symbol symbol-20px me-4">
                                    <img className="rounded-1" src="assets/media/flags/germany.svg" alt="" />
                                </span>German</a>
                        </div>
                        {/* <!--end::Menu item-->*/}
                        {/* <!--begin::Menu item-->*/}
                        <div className="menu-item px-3">
                            <a href="../../demo1/dist/account/settings.html" className="menu-link d-flex px-5">
                                <span className="symbol symbol-20px me-4">
                                    <img className="rounded-1" src="assets/media/flags/japan.svg" alt="" />
                                </span>Japanese</a>
                        </div>
                        {/* <!--end::Menu item-->*/}
                        {/* <!--begin::Menu item-->*/}
                        <div className="menu-item px-3">
                            <a href="../../demo1/dist/account/settings.html" className="menu-link d-flex px-5">
                                <span className="symbol symbol-20px me-4">
                                    <img className="rounded-1" src="assets/media/flags/france.svg" alt="" />
                                </span>French</a>
                        </div>
                        {/* <!--end::Menu item-->*/}
                    </div>
                    {/* <!--end::Menu sub-->*/}
                </div>
                {/* <!--end::Menu item-->*/}
                {/* <!--begin::Menu item-->*/}
                <div className="menu-item px-5 my-1">
                    <Link to="/Configuracoes" className="menu-link px-5">Configurações</Link>
                </div>
                {/* <!--end::Menu item-->*/}
                {/* <!--begin::Menu item-->*/}
                <div className="menu-item px-5">
                    <Link to="/Sair" className="menu-link px-5" onClick={Sair}>Log Out</Link>
                </div>
                {/* <!--end::Menu item-->*/}
                {/* <!--begin::Menu separator-->*/}
                <div className="separator my-2"></div>
                {/* <!--end::Menu separator-->*/}
                {/* <!--begin::Menu item-->*/}
                <div className="menu-item px-5">
                    <div className="menu-content px-5">
                        <label className="form-check form-switch form-check-custom form-check-solid pulse pulse-success">
                            <input className="form-check-input w-30px h-20px" type="checkbox" defaultValue="1" name="mode" id="kt_user_menu_dark_mode_toggle" onClick={toggleContrast} />
                            <span className="pulse-ring ms-n1"></span>
                            <span className="form-check-label text-gray-600 fs-7">Dark Mode</span>
                        </label>
                    </div>
                </div>
                {/* <!--end::Menu item-->*/}
            </div>
        </div>
    )
}

export default SubMenuOptions;
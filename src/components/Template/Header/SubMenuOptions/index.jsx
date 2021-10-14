import { useState } from 'react'
import { Link } from "react-router-dom"

function SubMenuOptions(props) {
    const [status, setStatus] = useState(false)
    function onHandleClick() {
        setStatus(!status)
    }

    return(
        <div onClick={onHandleClick}> 

            {/* <!--begin::Menu-->*/}
            <div className={
                   status ? "menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg menu-state-primary fw-bold py-4 fs-6 w-275px show show-custom" 
                    : "menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg menu-state-primary fw-bold py-4 fs-6 w-275px"
                } data-kt-menu="true" id="kt_menu_options" >
                {/* <!--begin::Menu item-->*/}
                <div className="menu-item px-3" >
                    <div className="menu-content d-flex align-items-center px-3">
                        {/* <!--begin::Avatar-->*/}
                        <div className="symbol symbol-50px me-5">
                            <img alt="Logo" src="assets/media/avatars/150-26.jpg" />
                        </div>
                        {/* <!--end::Avatar-->*/}
                        {/* <!--begin::Username-->*/}
                        <div className="d-flex flex-column">
                            <div className="fw-bolder d-flex align-items-center fs-5">Max Smith
                                <span className="badge badge-light-success fw-bolder fs-8 px-2 py-1 ms-2">Pro</span>
                            </div>
                            <a href="#nada" className="fw-bold text-muted text-hover-primary fs-7">max@kt.com</a>
                        </div>
                        {/* <!--end::Username-->*/}
                    </div>
                </div >
                {/* <!--end::Menu item-->*/}
                {/* <!--begin::Menu separator-->*/}
                <div className="separator my-2"></div>
                {/* <!--end::Menu separator-->*/}
                {/* <!--begin::Menu item-->*/}
                <div className="menu-item px-5">
                    <a href="../../demo1/dist/pages/projects/list.html" className="menu-link px-5">
                        <span className="menu-text">My Projects</span>
                        <span className="menu-badge">
                            <span className="badge badge-light-danger badge-circle fw-bolder fs-7">3</span>
                        </span>
                    </a>
                </div>
                {/* <!--end::Menu item-->*/}
                {/* <!--begin::Menu item-->*/}
                <div className="menu-item px-5" data-kt-menu-trigger="hover" data-kt-menu-placement="left-start">
                    <a href="#nada" className="menu-link px-5">
                        <span className="menu-title">My Subscription</span>
                        <span className="menu-arrow"></span>
                    </a>
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
                    <a href="../../demo1/dist/account/statements.html" className="menu-link px-5">My Statements</a>
                </div>
                {/* <!--end::Menu item-->*/}
                {/* <!--begin::Menu separator-->*/}
                <div className="separator my-2"></div>
                {/* <!--end::Menu separator-->*/}
                {/* <!--begin::Menu item-->*/}
                <div className="menu-item px-5" data-kt-menu-trigger="hover" data-kt-menu-placement="left-start">
                    <a href="#nada" className="menu-link px-5">
                        <span className="menu-title position-relative">Language
                            <span className="fs-8 rounded bg-light px-3 py-2 position-absolute translate-middle-y top-50 end-0">English
                                <img className="w-15px h-15px rounded-1 ms-2" src="assets/media/flags/united-states.svg" alt="" />
                            </span>
                        </span>
                    </a>
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
                                </span>
                                French
                            </a>
                        </div>
                        {/* <!--end::Menu item-->*/}
                    </div>
                    {/* <!--end::Menu sub-->*/}
                </div>
                {/* <!--end::Menu item-->*/}
                {/* <!--begin::Menu item-->*/}
                <div className="menu-item px-5 my-1">
                    <Link to="./Configurações" className="menu-link px-5">Configurações</Link>
                </div>
                {/* <!--end::Menu item-->*/}
                {/* <!--begin::Menu item-->*/}
                <div className="menu-item px-5">
                    <Link to="./" className="menu-link px-5">Log Out</Link>
                </div>
                {/* <!--end::Menu item-->*/}
                {/* <!--begin::Menu separator-->*/}
                <div className="separator my-2"></div>
                {/* <!--end::Menu separator-->*/}
                {/* <!--begin::Menu item-->*/}
                <div className="menu-item px-5">
                    <div className="menu-content px-5">
                        <label className="form-check form-switch form-check-custom form-check-solid pulse pulse-success" htmlFor="kt_user_menu_dark_mode_toggle">
                            <input className="form-check-input w-30px h-20px" type="checkbox" defaultValue="1" name="mode" id="kt_user_menu_dark_mode_toggle" data-kt-url="../../demo1/dist/index.html" />
                            <span className="pulse-ring ms-n1"></span>
                            <span className="form-check-label text-gray-600 fs-7">Dark Mode</span>
                        </label>
                    </div>
                </div>
                {/* <!--end::Menu item-->*/}
            </div>
            {/* <!--end::Menu-->*/ }
        </div>
    )
}

export default SubMenuOptions;
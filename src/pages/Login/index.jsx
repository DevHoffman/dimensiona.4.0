import "./style.css"

import LoginUsuario from '../../components/Formularios/LoginUsuario'
import logo from '../../components/assets/img/logo.svg'

function Login() {

    return (
        <div>
            <div className="kt-grid kt-grid--ver kt-grid--root">
                <div className="kt-grid kt-grid--hor kt-grid--root kt-login kt-login--v2 kt-login--signin" id="kt_login">
                    <div className="kt-grid__item kt-grid__item--fluid kt-grid kt-grid--hor">
                        <div id="background-image" className="kt-grid__item kt-grid__item--fluid kt-grid kt-grid--hor">
                            <div className="kt-grid__item kt-grid__item--fluid kt-login__wrapper">
                                <div className="kt-login__container">
                                    <div className="kt-login__logo">
                                        <img src={logo} alt="Logo do Site" />
                                    </div>

                                    <LoginUsuario />

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login

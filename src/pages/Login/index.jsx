
import "./style.css"

import LoginUsuario from '../../components/Formularios/LoginUsuario'
import logo from '../../components/assets/img/logo.svg'

function Login() {

    const onClick = async data => {
        var signup = document.querySelector('.kt-login__signup')
        var signin = document.querySelector('.kt-login__signin')
        var forgot = document.querySelector('.kt-login__forgot')
        var link_account = document.querySelector('.kt-login__account')
        if (data.target.id === 'kt_login_signup' || data.target.id === 'kt_login_signup_cancel') {
            signup.classList.toggle('show') // Cadastro

            signin.classList.toggle('hidden') // Login
            forgot.classList.toggle('hidden') // Reset Senha 
            link_account.classList.toggle('hidden') // Cadastro Link
        }
        else if (data.target.id === 'kt_login_forgot' || data.target.id === 'kt_login_forgot_cancel') {
            forgot.classList.toggle('show') // Reset Senha 

            signup.classList.toggle('hidden') // Cadastro
            signin.classList.toggle('hidden') // Login
            link_account.classList.toggle('hidden') // Cadastro Link
        }
    }

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

                                    <div className="kt-login__forgot">
                                        <div className="kt-login__head">
                                            <h3 className="kt-login__title">Esqueceu sua senha ?</h3>
                                            <div className="kt-login__desc">Entre com suas credenciais para resetar sua senha:</div>
                                        </div>
                                        <form className="kt-form" action="">
                                            <div className="input-group">
                                                <input className="form-control" type="text" placeholder="Login" name="login" id="kt_email" autoComplete="off" />
                                            </div>
                                            <div className="kt-login__actions">
                                                <button id="kt_login_forgot_submit" className="btn btn-pill kt-login__btn-primary">Request</button>&nbsp;&nbsp;
                                                <button type="button" id="kt_login_forgot_cancel" className="btn btn-pill kt-login__btn-secondary" onClick={onClick}>Voltar</button>
                                            </div>
                                        </form>
                                    </div>

                                    <div className="kt-login__account">
                                        <span className="kt-login__account-msg">
                                            Não tem conta ainda ?
                                        </span>&nbsp;&nbsp;
                                        <button type="button" id="kt_login_signup" className="kt-link kt-login__link btn btn-link" onClick={onClick}>Criar Conta</button>
                                    </div>
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

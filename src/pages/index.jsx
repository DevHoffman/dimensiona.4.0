import { useForm } from "react-hook-form"
import logo from '../components/img/logo.svg'
import axios from 'axios'
import "izitoast/dist/css/iziToast.min.css"
import "bootstrap/dist/css/bootstrap.min.css"
import iziToast from "izitoast"

import "./style.css"

function Dimensiona() {
    const { register, handleSubmit } = useForm()
    const onSubmit = async data => {
        
        var button = document.querySelector('.kt-login__btn-primary .loader')
        // Add a request interceptor
        axios.interceptors.request.use(function (config) {
            // Do something before request is sent
            iziToast.destroy();
            button.style.display = 'block' // Exibe o Loader
            iziToast.warning({
                title: 'Autenticação em andamento',
            })
            return config
        })
        axios.post('http://localhost/crud_codeigniter/home/autenticate', data)
        .then(response => {
            button.style.display = 'none' // Some com o Loader
            window.localStorage.setItem("token", response.data.token)
            window.location = "/Dashboard"
            return response
        })
        .catch(error => {
            button.style.display = 'none' // Some com o Loader
            iziToast.error({
                title: 'Erro ao autenticar-se',
            })
            return error
        })
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
                                        <img src={logo} alt="Logo do Site" width="100px" />
                                    </div>
                                    <div className="kt-login__signin">
                                        <div className="kt-login__head">
                                            <h3 className="kt-login__title">Entrar no Painel</h3>
                                        </div>
                                        <form id="login__signin" className="kt-form" onSubmit={handleSubmit(onSubmit)}>
                                            <div className="input-group">
                                                <input {...register("login")} className="form-control" type="text" placeholder="Login" name="login" autoComplete="off" />
                                            </div>
                                            <div className="input-group">
                                                <input {...register("senha")} className="form-control" type="password" placeholder="Senha" name="senha" />
                                            </div>
                                            <div className="row kt-login__extra">
                                                <div className="col">
                                                    <label className="kt-checkbox">
                                                        <input type="checkbox" name="remember" /> Lembrar me
                                                        <span></span>
                                                    </label>
                                                </div>
                                                <div className="col kt-align-right">
                                                    <button id="kt_login_forgot" className="kt-link kt-login__link btn btn-link">Esqueceu sua senha ?</button>
                                                </div>
                                            </div>
                                            <div className="kt-login__actions">
                                                <button id="kt_login_signin_submit" className="btn btn-pill kt-login__btn-primary botao">Autenticar <div className="loader" /></button>
                                            </div>
                                            <div className="message">
                                                
                                            </div>
                                        </form>
                                    </div>

                                    <div className="kt-login__signup">
                                        <div className="kt-login__head">
                                            <h3 className="kt-login__title">Criar Conta</h3>
                                            <div className="kt-login__desc">Deixe seus dados para criar sua conta:</div>
                                        </div>
                                        <form className="kt-login__form kt-form" action="">
                                            <div className="input-group">
                                                <input className="form-control" type="text" placeholder="Fullname" name="fullname" />
                                            </div>
                                            <div className="input-group">
                                                <input className="form-control" type="text" placeholder="Login" name="login" autoComplete="off" />
                                            </div>
                                            <div className="input-group">
                                                <input className="form-control" type="password" placeholder="Senha" name="senha" />
                                            </div>
                                            <div className="input-group">
                                                <input className="form-control" type="password" placeholder="Confirmar Senha" name="senha2" />
                                            </div>
                                            <div className="row kt-login__extra">
                                                <div className="col kt-align-left">
                                                    <label className="kt-checkbox">
                                                        <input type="checkbox" name="agree" />
                                                        Eu concordo com os
                                                        <button type="button" className="kt-link kt-login__link kt-font-bold">termos e confições. </button>
                                                        <span></span>
                                                    </label>
                                                    <span className="form-text text-muted"></span>
                                                </div>
                                            </div>
                                            <div className="kt-login__actions">
                                                <button id="kt_login_signup_submit" className="btn btn-pill kt-login__btn-primary">Criar Conta</button>&nbsp;&nbsp;
                                                <button id="kt_login_signup_cancel" className="btn btn-pill kt-login__btn-secondary">Cancelar</button>
                                            </div>
                                        </form>
                                    </div>

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
                                                <button id="kt_login_forgot_cancel" className="btn btn-pill kt-login__btn-secondary">Cancelar</button>
                                            </div>
                                        </form>
                                    </div>

                                    <div className="kt-login__account">
                                        <span className="kt-login__account-msg">
                                            Não tem conta ainda ?
                                        </span>&nbsp;&nbsp;
                                        <button type="button" id="kt_login_signup" className="kt-link kt-login__link btn btn-link">Criar Conta</button>
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

export default Dimensiona

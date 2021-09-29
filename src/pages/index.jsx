import logo from '../components/img/logo.svg'
import axios from 'axios'
import "bootstrap/dist/css/bootstrap.min.css"
import "izitoast/dist/css/iziToast.min.css"
import iziToast from "izitoast"

import { useForm } from "react-hook-form"
import "./style.css"

function Dimensiona() {
    const { register, handleSubmit } = useForm()
    const onSubmit = async data => {
        var button = document.querySelector('.kt-login__btn-primary .loader')
        // Add a request interceptor
        axios.interceptors.request.use(function (config) {
            // Do something before request is sent
            iziToast.destroy()
            button.style.display = 'block' // Exibe o Loader
            iziToast.warning({
                title: 'Autenticação em andamento',
                position: 'topRight', // bottomRight, bottomLeft, topRight, topLeft, topCenter, bottomCenter, center
            })
            return config
        })
        axios.post('http://localhost/crud_codeigniter/home/autenticate', data)
        .then(response => {
            window.localStorage.setItem("token", response.data.token)
            button.style.display = 'none' // Some com o Loader
            iziToast.show({
                transitionOut: 'fadeOut',
            })
            iziToast.destroy()
            iziToast.success({
                title: 'Usuário Autenticado',
                message: 'Você será redirecionado em 5 segundos...',
                position: 'topRight', // bottomRight, bottomLeft, topRight, topLeft, topCenter, bottomCenter, center
                transitionOut: 'fadeOut',
            })
            setTimeout(() => { // Redireciona para Dashboard
                window.location = "/Dashboard"
            }, 5000);
            return response
        })
        .catch(error => {

            button.style.display = 'none' // Some com o Loader
            iziToast.show({
                transitionOut: 'fadeOut',
            })
            iziToast.destroy()

            if (error.response.status === 401) { // Erro de Credencial
                iziToast.error({
                    title: 'Credenciais Inválidas',
                    position: 'topRight', // bottomRight, bottomLeft, topRight, topLeft, topCenter, bottomCenter, center
                    transitionOut: 'fadeOut',
                })
            }
            else if (error.response.status === 404) { // API Não encontrada
                iziToast.error({
                    title: 'Erro ao Autenticar-se',
                    position: 'topRight', // bottomRight, bottomLeft, topRight, topLeft, topCenter, bottomCenter, center
                    transitionOut: 'fadeOut',
                })
            }
            else {
                iziToast.error({ // Qualquer outro erro
                    title: 'Erro ao Autenticar-se 2',
                    position: 'topRight', // bottomRight, bottomLeft, topRight, topLeft, topCenter, bottomCenter, center
                    transitionOut: 'fadeOut',
                })
            }
            
            return error
        })
    }

    const onClick = async data => {
        console.log(data.target.id)
        if (data.target.id === 'kt_login_signup') {
            var signup = document.querySelector('.kt-login__signup')
            signup.classList.toggle('show'); // Cadastro
            console.log(signup)
            var signin = document.querySelector('.kt-login__signin')
            signin.classList.toggle('hidden'); // Login
            var forgot = document.querySelector('.kt-login__forgot')
            forgot.classList.toggle('hidden'); // Reset Senha
        }
        // var signin = document.querySelector('.kt-login__signin')
        // signin.classList.toggle('hidden');
        // var forgot = document.querySelector('.kt-login__forgot')
        // forgot.classList.toggle('show');
        // document.querySelector('.kt-login__title').html('Esqueceu sua senha ?')
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
                                                    <button type="button" id="kt_login_forgot" className="kt-link kt-login__link btn btn-link" onClick={onClick}>Esqueceu sua senha ?</button>
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
                                                <input className="form-control" type="password" placeholder="Senha" name="senha" autoComplete="off" />
                                            </div>
                                            <div className="input-group">
                                                <input className="form-control" type="password" placeholder="Confirmar Senha" name="senha2" />
                                            </div>
                                            <div className="row kt-login__extra">
                                                <div className="col kt-align-left">
                                                    <label className="kt-checkbox">
                                                        <input type="checkbox" name="agree" />
                                                        Eu concordo com os
                                                        <button type="button" className="kt-link kt-login__link btn btn-link kt-font-bold">Termos e Condições.</button>
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
                                                <button type="button" id="kt_login_forgot_cancel" className="btn btn-pill kt-login__btn-secondary" onClick={onClick}>Cancelar</button>
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

export default Dimensiona

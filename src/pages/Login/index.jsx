
import { useHistory } from "react-router-dom"
import { useForm } from "react-hook-form"

import "./style.css"

import axios from 'axios'
import "izitoast/dist/css/iziToast.min.css"
import iziToast from "izitoast"

import Loader from '../../components/Loader'
import logo from '../../components/assets/img/logo.svg'

function Login() {
    let history = useHistory()
    const { register, handleSubmit } = useForm()

    const onSubmitAuth = async data => { // Função Autenticar
        var button = document.querySelector('.kt-login__btn-primary .loader')

        axios.interceptors.request.use(function (config) {
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
                window.localStorage.setItem("user_data", JSON.stringify(response.data.sessionData))
                var timeout = 3000
                button.style.display = 'none' // Some com o Loader
                iziToast.destroy()
                iziToast.success({
                    title: 'Usuário Autenticado',
                    position: 'topRight', // bottomRight, bottomLeft, topRight, topLeft, topCenter, bottomCenter, center
                    transitionOut: 'fadeOut',
                    timeout: timeout,
                })
                setTimeout(() => { // Redireciona para Dashboard
                    history.push("/")
                }, timeout)
                return response
            })
            .catch(error => {
                button.style.display = 'none' // Some com o Loader
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

    const onSubmitCreateAccount = async data => { // Função Criar Conta
        var button = document.querySelector('.kt-login__btn-primary .loader')

        axios.interceptors.request.use(function (config) {
            iziToast.destroy()
            button.style.display = 'block' // Exibe o Loader
            iziToast.warning({
                title: 'Autenticação em andamento',
                position: 'topRight', // bottomRight, bottomLeft, topRight, topLeft, topCenter, bottomCenter, center
            })
            return config
        })
        axios.post('http://localhost/crud_codeigniter/cadastrar/insert', data)
            .then(response => {
                // window.localStorage.setItem("token", response.data)
                // console.log(response.data)
                var timeout = 3000
                button.style.display = 'none' // Some com o Loader
                iziToast.show({
                    transitionOut: 'fadeOut',
                })
                iziToast.destroy()
                iziToast.success({
                    title: 'Usuário Cadastrado',
                    position: 'topRight', // bottomRight, bottomLeft, topRight, topLeft, topCenter, bottomCenter, center
                    transitionOut: 'fadeOut',
                    timeout: timeout,
                })
                return response
            })
            .catch(error => {
                button.style.display = 'none' // Some com o Loader
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

    function onHandleChange(e) {
        console.log(e.target.value)
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
                                        <form id="login__signin" className="kt-form" onSubmit={handleSubmit(onSubmitAuth)}>
                                            <div className="input-group">
                                                <input {...register("login")} className="form-control" type="text" placeholder="Login" name="login" autoComplete="off" />
                                            </div>
                                            <div className="input-group">
                                                <input {...register("senha")} className="form-control" type="password" placeholder="Senha" name="senha" />
                                            </div>
                                            <div className="row kt-login__extra">
                                                <div className="col">
                                                    {/* <label className="kt-checkbox">
                                                        <input type="checkbox" name="remember" /> Lembrar me
                                                        <span></span>
                                                    </label> */}
                                                </div>
                                                <div className="col kt-align-right">
                                                    <button type="button" id="kt_login_forgot" className="kt-link kt-login__link btn btn-link" onClick={onClick}>Esqueceu sua senha ?</button>
                                                </div>
                                            </div>
                                            <div className="kt-login__actions">
                                                <button id="kt_login_signin_submit" className="btn btn-pill kt-login__btn-primary botao">Autenticar <Loader /></button>
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
                                        <form className="kt-login__form kt-form" onSubmit={handleSubmit(onSubmitCreateAccount)}>
                                            <div className="input-group">
                                                <input className="form-control" type="text" required placeholder="Nome Completo" name="nome" />
                                            </div>
                                            <div className="input-group">
                                                <input className="form-control" type="text" required placeholder="Login" name="login" autoComplete="off" />
                                            </div>
                                            <div className="input-group">
                                                <input className="form-control" type="password" required placeholder="Senha" name="senha" autoComplete="off" />
                                            </div>
                                            <div className="input-group">
                                                <input className="form-control" type="password" required placeholder="Confirmar Senha" name="senha2" onChange={onHandleChange} autoComplete="off" />
                                            </div>
                                            <div className="row kt-login__extra">
                                                <div className="col kt-align-left">
                                                    <label className="kt-checkbox">
                                                        <input type="checkbox" name="agree" required /><span>
                                                            Eu concordo com os
                                                            <a href="#nada" className="kt-link kt-login__link btn btn-link kt-font-bold">Termos e Condições.</a>
                                                        </span>
                                                    </label>
                                                    <span className="form-text text-muted"></span>
                                                </div>
                                            </div>
                                            <div className="kt-login__actions">
                                                <button id="kt_login_signup_submit" className="btn btn-pill kt-login__btn-primary">Criar Conta</button>&nbsp;&nbsp;
                                                <button type="button" id="kt_login_signup_cancel" className="btn btn-pill kt-login__btn-secondary" onClick={onClick}>Voltar</button>
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

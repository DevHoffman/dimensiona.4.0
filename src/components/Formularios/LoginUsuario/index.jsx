import { useHistory } from "react-router-dom"

import axios from 'axios'
import "izitoast/dist/css/iziToast.min.css"
import iziToast from "izitoast"
import Loader from "../../Loader"
import { useState } from "react"

function LoginUsuario() {
    let history = useHistory()
    const [Login, setLogin] = useState('')
    const [Senha, setSenha] = useState('')

    async function onSubmitAuth(e) { // Função Autenticar
        e.preventDefault()
        var button = document.querySelector('.kt-login__btn-primary .loader')
        let data = [Login, Senha]


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
    return(
        <div>
            <div className="kt-login__signin">
                <div className="kt-login__head">
                    <h3 className="kt-login__title">Entrar no Painel</h3>
                </div>
                <form id="login__signin" className="kt-form" onSubmit={onSubmitAuth}>
                    <div className="input-group">
                        <input className="form-control" type="text" placeholder="Login" name="login" autoComplete="off" value={Login} onChange={(e) => setLogin(e.target.value)} />
                    </div>
                    <div className="input-group">
                        <input className="form-control" type="password" placeholder="Senha" name="senha" value={Senha} onChange={(e) => setSenha(e.target.value)} />
                    </div>
                    <div className="row kt-login__extra">
                        <div className="col">
                            {/* <label className="kt-checkbox">
                                                        <input type="checkbox" name="remember" /> Lembrar me
                                                        <span></span>
                                                    </label> */}
                        </div>
                        <div className="col kt-align-right">
                            <button type="button" id="kt_login_forgot" className="kt-link kt-login__link btn btn-link">Esqueceu sua senha ?</button>
                        </div>
                    </div>
                    <div className="kt-login__actions">
                        <button id="kt_login_signin_submit" className="btn btn-pill kt-login__btn-primary botao">Autenticar <Loader /></button>
                    </div>
                    <div className="message">

                    </div>
                </form>
            </div>
        </div>
    )
}

export default LoginUsuario
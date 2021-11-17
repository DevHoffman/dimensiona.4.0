import { Link, useHistory } from "react-router-dom"
import { useForm } from "react-hook-form"

import axios from 'axios'
import "izitoast/dist/css/iziToast.min.css"
import iziToast from "izitoast"
import Loader from "../../Loader"

function LoginUsuario() {
    let history = useHistory()
    const { register, handleSubmit, formState: { errors } } = useForm()

    const onSubmit = async data => { // Função Autenticar
        var button = document.querySelector('.kt-login__btn-primary .loader')

        axios.interceptors.request.use(function (config) {
            iziToast.destroy()
            console.clear()
            button.style.display = 'block' // Exibe o Loader
            iziToast.warning({
                title: 'Autenticação em andamento',
                position: 'topRight', // bottomRight, bottomLeft, topRight, topLeft, topCenter, bottomCenter, center
            })
            return config
        })
        // axios.post('http://localhost/crud_codeigniter/home/autenticate', data) // Minha API
        axios.post('https://vitrinniapi.herokuapp.com/api/auth/login', data) // Usando API do Max
            .then(response => {
                window.localStorage.setItem("token", JSON.stringify(response.data.access_token)) // Usando API do Max
                // window.localStorage.setItem("user_data", JSON.stringify(response.data.sessionData)) // Usando a minha API (Salva os dados do usuario no storage)
                button.style.display = 'none' // Some com o Loader
                iziToast.destroy()
                console.clear()
                iziToast.success({
                    title: 'Usuário Autenticado',
                    position: 'topRight', // bottomRight, bottomLeft, topRight, topLeft, topCenter, bottomCenter, center
                    transitionOut: 'fadeOut',
                })
                
                history.push("./")
                return response
            })
            .catch(error => {
                button.style.display = 'none' // Some com o Loader
                iziToast.destroy()
                console.clear()
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
                <form id="login__signin" className="kt-form" onSubmit={handleSubmit(onSubmit)}>
                    <div className="input-group">
                        {/* <input className="form-control" type="text" placeholder="Login" name="login" autoComplete="off" /> */}
                        <input className="form-control" placeholder="email" {...register('email', { required: true, minLength: 3 })} value="admin@admin.com" />
                    </div>
                    {errors.email && errors.email.type === "required" && <span className="text-danger">Campo Obrigatório</span>}
                    {errors.email && errors.email.type === "minLength" && <span className="text-danger">Mínimo 3 caracteres</span>}
                    <div className="input-group">
                        {/* <input className="form-control" type="password" placeholder="Senha" name="senha" /> */}
                        <input className="form-control" type="password" placeholder="Senha" {...register('password', { required: true, minLength: 3 })} value="admin" />
                    </div>
                    {errors.password && errors.password.type === "required" && <span className="text-danger">Campo Obrigatório</span>}
                    {errors.password && errors.password.type === "minLength" && <span className="text-danger">Mínimo 3 caracteres</span>}
                    <div className="row kt-login__extra">
                        <div className="col">
                            {/* <label className="kt-checkbox">
                                                        <input type="checkbox" name="remember" /> Lembrar me
                                                        <span></span>
                                                    </label> */}
                        </div>
                        <div className="col kt-align-right">
                            <Link to="/Recuperar">
                                <button type="button" id="kt_login_forgot" className="kt-link kt-login__link btn btn-link">Esqueceu sua senha ?</button>
                            </Link>
                        </div>
                    </div>
                    <div className="kt-login__actions">
                        <button id="kt_login_signin_submit" type="submit" className="btn btn-pill kt-login__btn-primary botao">Autenticar <Loader /></button>
                    </div>
                </form>
            </div>

            <div className="kt-login__account">
                <span className="kt-login__account-msg">
                    Não tem conta ainda ?
                </span>&nbsp;&nbsp;
                <Link to="/Cadastrar"><button type="button" className="kt-link kt-login__link btn btn-link">Criar Conta</button></Link>
            </div>
        </div>
    )
}

export default LoginUsuario
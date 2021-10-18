import axios from "axios"
import iziToast from "izitoast"
import { Link } from "react-router-dom"

function CadastroUsuario() {

    async function onSubmitCreateAccount(data) { // Função Criar Conta
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
                console.log(response)
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
                console.log(error)
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

    async function onHandleChange(e) {
        // console.log(e.target.value)
    }
    return(
        <div>


            <div className="kt-login__signup">
                <div className="kt-login__head">
                    <h3 className="kt-login__title">Criar Conta</h3>
                    <div className="kt-login__desc">Deixe seus dados para criar sua conta:</div>
                </div>
                <form className="kt-login__form kt-form" onSubmit={onSubmitCreateAccount}>
                    <div className="input-group">
                        <input className="form-control" type="text" required placeholder="Nome Completo" name="name" />
                    </div>
                    <div className="input-group">
                        <input className="form-control" type="email" required placeholder="Email" name="email" autoComplete="off" />
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
                                    <Link to="#nada" target="_blank" className="kt-link kt-login__link btn btn-link kt-font-bold">Termos e Condições.</Link>
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
        </div>
    )
}

export default CadastroUsuario
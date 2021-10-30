import { Link } from "react-router-dom"

function RecuperaSenha() {
    return (
        <div>
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
                        <Link to="/Login"><button type="button" id="kt_login_forgot_cancel" className="btn btn-pill kt-login__btn-secondary">Voltar</button></Link>
                    </div>
                </form>

                <div className="kt-login__account">
                    <span className="kt-login__account-msg">
                        Não tem conta ainda ?
                    </span>&nbsp;&nbsp;
                    <Link to="/Cadastrar"><button type="button" className="kt-link kt-login__link btn btn-link">Criar Conta</button></Link>
                </div>
            </div>
        </div>
    )
}

export default RecuperaSenha
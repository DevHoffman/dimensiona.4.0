import { useForm } from "react-hook-form"
/* eslint-disable react/style-prop-object */
import "./style.css";
import logo from './img/logo.svg';
import axios from 'axios';
// import background_image from './img/bg/bg-1.jpg';

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

export default function Login() {
    // const { background_image } = 'background-image: url(' + background_image + ');'

    const { register, handleSubmit } = useForm();
    const onSubmit = async data => {
        await sleep(2000)
        // if (data.login === "hoffman") {
        //     alert(JSON.stringify(data));
        // } else {
        //     alert("There is an error");
        // }


        axios({
            method: "post",
            url: "http://localhost/crud_codeigniter/home/autenticate2",
            data: data,
            headers: { "Content-Type": "multipart/form-data" },
        })
            .then(function (response) {
                //handle success
                console.log(response);
            })
            .catch(function (response) {
                //handle error
                console.log(response);
            });

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
                                                <input {...register("login")} className="form-control" type="text" placeholder="Login" name="login" autoComplete="off"  />
                                            </div>
                                            <div className="input-group">
                                                <input {...register("senha")} className="form-control" type="password" placeholder="Senha" name="senha"  />
                                            </div>
                                            <div className="row kt-login__extra">
                                                <div className="col">
                                                    <label className="kt-checkbox">
                                                        <input type="checkbox" name="lembrar" /> Lembrar me
                                                        <span></span>
                                                    </label>
                                                </div>
                                                <div className="col kt-align-right">
                                                    <button id="kt_login_forgot" className="kt-link kt-login__link btn btn-link">Esqueceu sua senha ?</button>
                                                </div>
                                            </div>
                                            <div className="kt-login__actions">
                                                <button id="kt_login_signin_submit" className="btn btn-pill kt-login__btn-primary">Sign In</button>
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

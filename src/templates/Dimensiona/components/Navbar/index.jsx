import "./style.css";

function Navbar() {
    return(
        <div>
            {/* // begin:: Page */}
            <div className="kt-grid kt-grid--ver kt-grid--root">
                <div className="kt-grid kt-grid--hor kt-grid--root kt-login kt-login--v2 kt-login--signin" id="kt_login">
                    <div className="kt-grid__item kt-grid__item--fluid kt-grid kt-grid--hor">
                    {/* <div className="kt-grid__item kt-grid__item--fluid kt-grid kt-grid--hor" style="background-image: url('http://localhost/metronic-admin/../assets/media//bg/bg-1.jpg');"> */}
                        <div className="kt-grid__item kt-grid__item--fluid kt-login__wrapper">
                            <div className="kt-login__container">
                                <div className="kt-login__logo">
                                    <a href="#">
                                        <img src="./logo.svg" />
                                    </a>
                                </div>
                                    <div className="kt-login__signin">
                                        <div className="kt-login__head">
                                            <h3 className="kt-login__title">Sign In To Admin</h3>
                                        </div>
                                        <form className="kt-form" action="">
                                            <div className="input-group">
                                                <input className="form-control" type="text" placeholder="Email" name="email" autoComplete="off" />
                                            </div>
                                            <div className="input-group">
                                                <input className="form-control" type="password" placeholder="Password" name="password" />
                                            </div>
                                            <div className="row kt-login__extra">
                                                <div className="col">
                                                    <label className="kt-checkbox">
                                                        <input type="checkbox" name="remember" /> Remember me 
                                                    </label>
                                                </div>
                                                <div className="col kt-align-right">
                                                    <a href="#" id="kt_login_forgot" className="kt-link kt-login__link">Forget Password ?</a>
                                                </div>
                                            </div>
                                            <div className="kt-login__actions">
                                                <button id="kt_login_signin_submit" className="btn btn-pill kt-login__btn-primary">Sign In</button>
                                            </div>
                                        </form>
                                    </div>
                                    <div className="kt-login__signup">
                                        <div className="kt-login__head">
                                            <h3 className="kt-login__title">Sign Up</h3>
                                            <div className="kt-login__desc">Enter your details to create your account:</div>
                                        </div>
                                        <form className="kt-login__form kt-form" action="">
                                            <div className="input-group">
                                                <input className="form-control" type="text" placeholder="Fullname" name="fullname" />
                                            </div>
                                            <div className="input-group">
                                                <input className="form-control" type="text" placeholder="Email" name="email" autoComplete="off" />
                                            </div>
                                            <div className="input-group">
                                                <input className="form-control" type="password" placeholder="Password" name="password" />
                                            </div>
                                            <div className="input-group">
                                                <input className="form-control" type="password" placeholder="Confirm Password" name="rpassword" />
                                            </div>
                                            <div className="row kt-login__extra">
                                                <div className="col kt-align-left">
                                                    <label className="kt-checkbox">
                                                        <input type="checkbox" name="agree" />
                                                        I Agree the 
                                                        <a href="#" className="kt-link kt-login__link kt-font-bold">terms and conditions. </a>
                                                            <span></span>
                                                    </label>
                                                    <span className="form-text text-muted"></span>
                                                </div>
                                            </div>
                                            <div className="kt-login__actions">
                                                <button id="kt_login_signup_submit" className="btn btn-pill kt-login__btn-primary">Sign Up</button>&nbsp;&nbsp;
                                                <button id="kt_login_signup_cancel" className="btn btn-pill kt-login__btn-secondary">Cancel</button>
                                            </div>
                                        </form>
                                    </div>
                                    <div className="kt-login__forgot">
                                        <div className="kt-login__head">
                                            <h3 className="kt-login__title">Forgotten Password ?</h3>
                                            <div className="kt-login__desc">Enter your email to reset your password:</div>
                                        </div>
                                        <form className="kt-form" action="">
                                            <div className="input-group">
                                                <input className="form-control" type="text" placeholder="Email" name="email" id="kt_email" autoComplete="off" />
                                            </div>
                                            <div className="kt-login__actions">
                                                <button id="kt_login_forgot_submit" className="btn btn-pill kt-login__btn-primary">Request</button>&nbsp;&nbsp;
                                                <button id="kt_login_forgot_cancel" className="btn btn-pill kt-login__btn-secondary">Cancel</button>
                                            </div>
                                        </form>
                                    </div>
                                    <div className="kt-login__account">
                                        <span className="kt-login__account-msg">
                                            Don't have an account yet ?
                                        </span>&nbsp;&nbsp;
                                        <a href="#" id="kt_login_signup" className="kt-link kt-link--light kt-login__account-link">Sign Up</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* // /* <!-- end:: Page --> */}

                {/* // /* <!-- begin::Global Config(global config for global JS sciprts) --> */ }
                {/* <script>
                    var KTAppOptions = {
                        "colors": {
                            "state": {
                                "brand": "#5d78ff",
                                "dark": "#282a3c",
                                "light": "#ffffff",
                                "primary": "#5867dd",
                                "success": "#34bfa3",
                                "info": "#36a3f7",
                                "warning": "#ffb822",
                                "danger": "#fd3995"
                            },
                            "base": {
                                "label": ["#c5cbe3", "#a1a8c3", "#3d4465", "#3e4466"],
                            "shape": ["#f0f3ff", "#d9dffa", "#afb4d4", "#646c9a"]
                            }
                        }
                    };
                </script> */}

                {/* // /* <!-- end::Global Config --> */ }

                {/* // /* <!--begin:: Global Mandatory Vendors --> */ }
                <script src="http://localhost/metronic-admin/../assets/vendors/general/jquery/dist/jquery.js" type="text/javascript"></script>
                <script src="http://localhost/metronic-admin/../assets/vendors/general/popper.js/dist/umd/popper.js" type="text/javascript"></script>
                <script src="http://localhost/metronic-admin/../assets/vendors/general/bootstrap/dist/js/bootstrap.min.js" type="text/javascript"></script>
                <script src="http://localhost/metronic-admin/../assets/vendors/general/js-cookie/src/js.cookie.js" type="text/javascript"></script>
                <script src="http://localhost/metronic-admin/../assets/vendors/general/moment/min/moment.min.js" type="text/javascript"></script>
                <script src="http://localhost/metronic-admin/../assets/vendors/general/tooltip.js/dist/umd/tooltip.min.js" type="text/javascript"></script>
                <script src="http://localhost/metronic-admin/../assets/vendors/general/perfect-scrollbar/dist/perfect-scrollbar.js" type="text/javascript"></script>
                <script src="http://localhost/metronic-admin/../assets/vendors/general/sticky-js/dist/sticky.min.js" type="text/javascript"></script>
                <script src="http://localhost/metronic-admin/../assets/vendors/general/wnumb/wNumb.js" type="text/javascript"></script>

                {/* <!--end:: Global Mandatory Vendors --> */}

                {/* <!--begin:: Global Optional Vendors --> */}
                <script src="http://localhost/metronic-admin/../assets/vendors/general/jquery-form/dist/jquery.form.min.js" type="text/javascript"></script>
                <script src="http://localhost/metronic-admin/../assets/vendors/general/block-ui/jquery.blockUI.js" type="text/javascript"></script>
                <script src="http://localhost/metronic-admin/../assets/vendors/general/bootstrap-datepicker/dist/js/bootstrap-datepicker.min.js" type="text/javascript"></script>
                <script src="http://localhost/metronic-admin/../assets/vendors/custom/components/vendors/bootstrap-datepicker/init.js" type="text/javascript"></script>
                <script src="http://localhost/metronic-admin/../assets/vendors/general/bootstrap-datetime-picker/js/bootstrap-datetimepicker.min.js" type="text/javascript"></script>
                <script src="http://localhost/metronic-admin/../assets/vendors/general/bootstrap-timepicker/js/bootstrap-timepicker.min.js" type="text/javascript"></script>
                <script src="http://localhost/metronic-admin/../assets/vendors/custom/components/vendors/bootstrap-timepicker/init.js" type="text/javascript"></script>
                <script src="http://localhost/metronic-admin/../assets/vendors/general/bootstrap-daterangepicker/daterangepicker.js" type="text/javascript"></script>
                <script src="http://localhost/metronic-admin/../assets/vendors/general/bootstrap-touchspin/dist/jquery.bootstrap-touchspin.js" type="text/javascript"></script>
                <script src="http://localhost/metronic-admin/../assets/vendors/general/bootstrap-maxlength/src/bootstrap-maxlength.js" type="text/javascript"></script>
                <script src="http://localhost/metronic-admin/../assets/vendors/custom/vendors/bootstrap-multiselectsplitter/bootstrap-multiselectsplitter.min.js" type="text/javascript"></script>
                <script src="http://localhost/metronic-admin/../assets/vendors/general/bootstrap-select/dist/js/bootstrap-select.js" type="text/javascript"></script>
                <script src="http://localhost/metronic-admin/../assets/vendors/general/bootstrap-switch/dist/js/bootstrap-switch.js" type="text/javascript"></script>
                <script src="http://localhost/metronic-admin/../assets/vendors/custom/components/vendors/bootstrap-switch/init.js" type="text/javascript"></script>
                <script src="http://localhost/metronic-admin/../assets/vendors/general/select2/dist/js/select2.full.js" type="text/javascript"></script>
                <script src="http://localhost/metronic-admin/../assets/vendors/general/ion-rangeslider/js/ion.rangeSlider.js" type="text/javascript"></script>
                <script src="http://localhost/metronic-admin/../assets/vendors/general/typeahead.js/dist/typeahead.bundle.js" type="text/javascript"></script>
                <script src="http://localhost/metronic-admin/../assets/vendors/general/handlebars/dist/handlebars.js" type="text/javascript"></script>
                <script src="http://localhost/metronic-admin/../assets/vendors/general/inputmask/dist/jquery.inputmask.bundle.js" type="text/javascript"></script>
                <script src="http://localhost/metronic-admin/../assets/vendors/general/inputmask/dist/inputmask/inputmask.date.extensions.js" type="text/javascript"></script>
                <script src="http://localhost/metronic-admin/../assets/vendors/general/inputmask/dist/inputmask/inputmask.numeric.extensions.js" type="text/javascript"></script>
                <script src="http://localhost/metronic-admin/../assets/vendors/general/nouislider/distribute/nouislider.js" type="text/javascript"></script>
                <script src="http://localhost/metronic-admin/../assets/vendors/general/owl.carousel/dist/owl.carousel.js" type="text/javascript"></script>
                <script src="http://localhost/metronic-admin/../assets/vendors/general/autosize/dist/autosize.js" type="text/javascript"></script>
                <script src="http://localhost/metronic-admin/../assets/vendors/general/clipboard/dist/clipboard.min.js" type="text/javascript"></script>
                <script src="http://localhost/metronic-admin/../assets/vendors/general/dropzone/dist/dropzone.js" type="text/javascript"></script>
                <script src="http://localhost/metronic-admin/../assets/vendors/general/summernote/dist/summernote.js" type="text/javascript"></script>
                <script src="http://localhost/metronic-admin/../assets/vendors/general/markdown/lib/markdown.js" type="text/javascript"></script>
                <script src="http://localhost/metronic-admin/../assets/vendors/general/bootstrap-markdown/js/bootstrap-markdown.js" type="text/javascript"></script>
                <script src="http://localhost/metronic-admin/../assets/vendors/custom/components/vendors/bootstrap-markdown/init.js" type="text/javascript"></script>
                <script src="http://localhost/metronic-admin/../assets/vendors/general/bootstrap-notify/bootstrap-notify.min.js" type="text/javascript"></script>
                <script src="http://localhost/metronic-admin/../assets/vendors/custom/components/vendors/bootstrap-notify/init.js" type="text/javascript"></script>
                <script src="http://localhost/metronic-admin/../assets/vendors/general/jquery-validation/dist/jquery.validate.js" type="text/javascript"></script>
                <script src="http://localhost/metronic-admin/../assets/vendors/general/jquery-validation/dist/additional-methods.js" type="text/javascript"></script>
                <script src="http://localhost/metronic-admin/../assets/vendors/custom/components/vendors/jquery-validation/init.js" type="text/javascript"></script>
                <script src="http://localhost/metronic-admin/../assets/vendors/general/toastr/build/toastr.min.js" type="text/javascript"></script>
                <script src="http://localhost/metronic-admin/../assets/vendors/general/raphael/raphael.js" type="text/javascript"></script>
                <script src="http://localhost/metronic-admin/../assets/vendors/general/morris.js/morris.js" type="text/javascript"></script>
                <script src="http://localhost/metronic-admin/../assets/vendors/general/chart.js/dist/Chart.bundle.js" type="text/javascript"></script>
                <script src="http://localhost/metronic-admin/../assets/vendors/custom/vendors/bootstrap-session-timeout/dist/bootstrap-session-timeout.min.js" type="text/javascript"></script>
                <script src="http://localhost/metronic-admin/../assets/vendors/custom/vendors/jquery-idletimer/idle-timer.min.js" type="text/javascript"></script>
                <script src="http://localhost/metronic-admin/../assets/vendors/general/waypoints/lib/jquery.waypoints.js" type="text/javascript"></script>
                <script src="http://localhost/metronic-admin/../assets/vendors/general/counterup/jquery.counterup.js" type="text/javascript"></script>
                <script src="http://localhost/metronic-admin/../assets/vendors/general/es6-promise-polyfill/promise.min.js" type="text/javascript"></script>
                <script src="http://localhost/metronic-admin/../assets/vendors/general/sweetalert2/dist/sweetalert2.min.js" type="text/javascript"></script>
                <script src="http://localhost/metronic-admin/../assets/vendors/custom/components/vendors/sweetalert2/init.js" type="text/javascript"></script>
                <script src="http://localhost/metronic-admin/../assets/vendors/general/jquery.repeater/src/lib.js" type="text/javascript"></script>
                <script src="http://localhost/metronic-admin/../assets/vendors/general/jquery.repeater/src/jquery.input.js" type="text/javascript"></script>
                <script src="http://localhost/metronic-admin/../assets/vendors/general/jquery.repeater/src/repeater.js" type="text/javascript"></script>
                <script src="http://localhost/metronic-admin/../assets/vendors/general/dompurify/dist/purify.js" type="text/javascript"></script>

                {/* <!--end:: Global Optional Vendors --> */}

                {/* <!--begin::Global Theme Bundle(used by all pages) --> */}
                <script src="http://localhost/metronic-admin/../assets/demo/default/base/scripts.bundle.js" type="text/javascript"></script>

                {/* <!--end::Global Theme Bundle --> */}

                {/* <!--begin::Page Scripts(used by this page) --> */}
                <script src="http://localhost/metronic-admin/../assets/app/custom/login/login-general.js" type="text/javascript"></script>

                {/* <!--end::Page Scripts --> */}

                {/* <!--begin::Global App Bundle(used by all pages) --> */}
                <script src="http://localhost/metronic-admin/../assets/app/bundle/app.bundle.js" type="text/javascript"></script>

                {/* <!--end::Global App Bundle --> */}
        </div>
    )
}

export default Navbar;

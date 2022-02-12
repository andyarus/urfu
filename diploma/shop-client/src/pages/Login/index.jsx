import React from "react";
import Product from "../Product";
import Button from "../../components/Button";

import "./Login.scss";

function Login() {
    const onRecoverPass = () => {
        console.log("Забыли пароль?");
    };
    const onAuth = () => {
        console.log("Авторизоваться");
    };
    const onRegistration = () => {
        console.log("Регистрация");
    };
    return (
        <>
            <div className="overlay"></div>
            <div className="page-form">
                <div className="page-form__title">Авторизация </div>
                <div className="page-form__form form">
                    <div className="form__title">Добро пожаловать на самый лучший спортивный магазин</div>
                    <div className="form__input form__input_email input">
                        <div className="input__title">Почта</div>
                        <input type="text" />
                    </div>
                    <div className="form__input form__input_password input">
                        <div className="input__title">Пароль</div>
                        <input type="text" />
                    </div>
                    <div className="form__restore-password">Забыли пароль?</div>
                    <div className="form__actions">
                        <div className="form__auth">Авторизоваться</div>
                        <div className="form__reg">регистрация</div>
                    </div>
                </div>
            </div>
            <Product />;
        </>
    );
}

export default Login;

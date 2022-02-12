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
            <div class="overlay"></div>
            <div class="page-form">
                <div class="page-form__title">Авторизация </div>
                <div class="page-form__form form">
                    <div class="form__title">Добро пожаловать на самый лучший спортивный магазин</div>
                    <div class="form__input form__input_email input">
                        <div class="input__title">Почта</div>
                        <input type="text" />
                    </div>
                    <div class="form__input form__input_password input">
                        <div class="input__title">Пароль</div>
                        <input type="text" />
                    </div>
                    <div class="form__restore-password">Забыли пароль?</div>
                    <div class="form__actions">
                        <div class="form__auth">Авторизоваться</div>
                        <div class="form__reg">регистрация</div>
                    </div>
                </div>
            </div>
            <Product />;
        </>
    );
}

export default Login;

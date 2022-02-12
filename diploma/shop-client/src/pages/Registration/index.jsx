import React from "react";
import Product from "../Product";
import Button from "../../components/Button";

import './Registration.scss'

function Registration() {
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
                <div className="page-form__title">Регистрация </div>
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
                    <div className="form__input form__input_password2 input">
                        <div className="input__title">Повторите пароль</div>
                        <input type="text" />
                    </div>
                    <div className="form__processing-data">
                        <input type="checkbox" name="" id="" />
                        Согласие на обработку персональных данных
                    </div>
                    <div className="form__text">Настоящим подтверждаю, что я ознакомлен и согласен с условиями</div>
                    <div className="form__actions">
                        <div className="form__reg">Зарегестрироваться</div>
                        <div className="form__auth">Авторизоваться</div>
                    </div>
                </div>
            </div>
            <Product />;
        </>
    );
}

export default Registration;

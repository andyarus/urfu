import React from "react";

import { useDispatch } from "react-redux";

import userActions from "../../redux/actions/user";

import Button from "../../components/Button";

import "./Registration.scss";

function Registration() {
    const dispatch = useDispatch();
    const onAuth = () => {
        dispatch(userActions.setFormStatus("login"));
    };
    const onRegistration = () => {
        dispatch(userActions.setUserLogin());
        dispatch(userActions.setFormStatus(false));
    };
    return (
        <>
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
                        <div className="form__reg"  onClick={onRegistration}>Зарегестрироваться</div>
                        <div className="form__auth"  onClick={onAuth}>Авторизоваться</div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Registration;

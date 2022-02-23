import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import userActions from "../../redux/actions/user";

import Button from "../../components/Button";

import "./Login.scss";

function Login() {
    const [email, setEmail] = useState("");
    const dispatch = useDispatch();

    const onRecoverPass = () => {
        console.log("Забыли пароль?");
    };
    const onAuth = () => {
        dispatch(userActions.setUserLogin({ email }));
        dispatch(userActions.setFormStatus(false));
    };
    const onRegistration = () => {
        dispatch(userActions.setFormStatus("register"));
    };

    return (
        <>
            <div className="page-form">
                <div className="page-form__title">Авторизация </div>
                <div className="page-form__form form">
                    <div className="form__title">Добро пожаловать на самый лучший спортивный магазин</div>
                    <div className="form__input form__input_email input">
                        <div className="input__title">Почта</div>
                        <input
                            type="text"
                            value={email}
                            onChange={(e) => {
                                setEmail(e.target.value);
                            }}
                        />
                    </div>
                    <div className="form__input form__input_password input">
                        <div className="input__title">Пароль</div>
                        <input type="password" />
                    </div>
                    <div className="form__restore-password" onClick={onRecoverPass}>
                        Забыли пароль?
                    </div>
                    <div className="form__actions">
                        {email !== "admin" ? (
                            <div className="form__auth" onClick={onAuth}>
                                Авторизоваться
                            </div>
                        ) : (
                            <Link to="/AdminList" className="form__auth" onClick={onAuth}>
                                Авторизоваться
                            </Link>
                        )}
                        <div className="form__reg" onClick={onRegistration}>
                            регистрация
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;

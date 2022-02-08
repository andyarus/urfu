import React from "react";
import Button from "../../components/Button";
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
        <div>
            Авторизация
            <div onClick={onRecoverPass}>Забыли пароль?</div>
            <Button onClick={onAuth}>Авторизоваться</Button>
            <Button onClick={onRegistration}>Регистрация</Button>
        </div>
    );
}

export default Login;

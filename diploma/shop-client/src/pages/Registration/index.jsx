import React from "react";
import Button from "../../components/Button";
function Registration() {
    const onAuth = () => {
        console.log("Авторизоваться");
    };
    const onRegistration = () => {
        console.log("Регистрация");
    };
    return (
        <div>
            Регистрация 
            <Button onClick={onRegistration}>Зарегестрироваться</Button>
            <Button onClick={onAuth}>Авторизоваться</Button>
        </div>
    );
}

export default Registration;

import React from "react";

import { useDispatch } from "react-redux";

import userActions from "../../redux/actions/user";

import Button from "../../components/Button";

import "./Feedback.scss";

function Feedback() {
    const dispatch = useDispatch();
    const onSend = () => {
        console.log("Отправить");
        dispatch(userActions.setFormStatus(false));
    };
    const onСancel = () => {
        console.log("Я передумал");
        dispatch(userActions.setFormStatus(false));
    };
    return (
        <>
            <div className="page-form page-form_feetback">
                <div className="page-form__title">Задать вопрос </div>
                <div className="page-form__form form">
                    <div className="form__title">Добро пожаловать на самый лучший спортивный магазин</div>
                    <div className="form__input form__input_email input">
                        <div className="input__title">Ваше имя</div>
                        <input type="text" />
                    </div>
                    <div className="form__input form__input_password input">
                        <div className="input__title">Пароль</div>
                        <input type="text" />
                    </div>
                    <div className="form__input form__input_password2 input">
                        <div className="input__title">Ваша почта</div>
                        <input type="text" />
                    </div>
                    <div className="form__textarea form__textarea_feetback-comment textarea">
                        <div className="textarea__title">Комментарий к заказу</div>
                        <textarea></textarea>
                    </div>
                    <div className="form__processing-data">
                        <input type="checkbox" name="" id="" />
                        Согласие на обработку персональных данных
                    </div>
                    <div className="form__text">Настоящим подтверждаю, что я ознакомлен и согласен с условиями</div>
                    <div className="form__actions">
                        <div className="form__send" onClick={onSend}>Отправить</div>
                        <div className="form__cansel" onClick={onСancel}>Я передумал</div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Feedback;

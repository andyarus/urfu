import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import userActions from "../../redux/actions/user";
import cartActions from "../../redux/actions/cart";

import Button from "../Button";

import "./OrderCompletion.scss";

function OrderCompletion() {
    const dispatch = useDispatch();
    const handleClickEnter = () => {
        dispatch(userActions.setFormStatus("login"));
    };
    const onPay = () => {
        dispatch(cartActions.deleteItems());
    };
    return (
        <div className="order__completion-form completion-form">
            <div className="completion-form__auth-info auth-info">
                <div className="auth-info__text">Вы не авторизованы!</div>
                <div className="auth-info__enter" onClick={handleClickEnter}>
                    Войти
                    <svg width="10" height="14" viewBox="0 0 10 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M8.90625 7.53125L2.84375 13.5938C2.69792 13.7396 2.52083 13.8125 2.3125 13.8125C2.10417 13.8125 1.92708 13.7396 1.78125 13.5938L1.09375 12.9062C0.947917 12.7604 0.864583 12.5833 0.84375 12.375C0.84375 12.1667 0.916667 11.9896 1.0625 11.8438L5.90625 7L1.0625 2.15625C0.916667 2.01042 0.84375 1.83333 0.84375 1.625C0.864583 1.41667 0.947917 1.23958 1.09375 1.09375L1.78125 0.40625C1.92708 0.260417 2.10417 0.1875 2.3125 0.1875C2.52083 0.1875 2.69792 0.260417 2.84375 0.40625L8.90625 6.46875C9.07292 6.61458 9.15625 6.79167 9.15625 7C9.15625 7.20833 9.07292 7.38542 8.90625 7.53125Z"
                            fill="#5D43E1"
                        />
                    </svg>
                </div>
            </div>
            <div className="completion-form__input completion-form__input_country input">
                <div className="input__title">Страна</div>
                <input type="text" />
            </div>
            <div className="completion-form__input completion-form__input_city input">
                <div className="input__title">Город</div>
                <input type="text" />
            </div>
            <div className="completion-form__delivary-settings delivary-settings">
                <div className="delivary-settings__title">Способ доставки</div>
                <div className="delivary-settings__types">
                    <div className="delivary-settings__delivary-type delivary-type">
                        <input type="checkbox" name="" id="" />
                        <div className="delivary-type__info">
                            <div className="delivary-type__info_title">Курьером СДЭК (тариф экспресс до двери)</div>
                            <div className="delivary-type__info_description">Доставка курьером до двери</div>
                            <div className="delivary-type__info_description">
                                Доставка осуществляется от 4 до 5 дней
                            </div>
                        </div>
                        <div className="delivary-type__price">+ 0 руб</div>
                    </div>
                    <div className="delivary-settings__delivary-type delivary-type">
                        <input type="checkbox" name="" id="" />
                        <div className="delivary-type__info">
                            <div className="delivary-type__info_title">Курьером СДЭК (тариф экспресс до двери)</div>
                            <div className="delivary-type__info_description">Доставка курьером до двери</div>
                            <div className="delivary-type__info_description">
                                Доставка осуществляется от 4 до 5 дней
                            </div>
                        </div>
                        <div className="delivary-type__price">+ 0 руб</div>
                    </div>
                    <div className="delivary-settings__delivary-type delivary-type">
                        <input type="checkbox" name="" id="" />
                        <div className="delivary-type__info">
                            <div className="delivary-type__info_title">Курьером СДЭК (тариф экспресс до двери)</div>
                            <div className="delivary-type__info_description">Доставка курьером до двери</div>
                            <div className="delivary-type__info_description">
                                Доставка осуществляется от 4 до 5 дней
                            </div>
                        </div>
                        <div className="delivary-type__price">+ 0 руб</div>
                    </div>
                </div>
            </div>
            <div className="completion-form__input completion-form__input_street input">
                <div className="input__title">Улица</div>
                <input type="text" />
            </div>
            <div className="completion-form__input-line">
                <div className="completion-form__input completion-form__input_house input input_small">
                    <div className="input__title">Дом</div>
                    <input type="text" />
                </div>
                <div className="completion-form__input completion-form__input_flat input input_small">
                    <div className="input__title">Квартира</div>
                    <input type="text" />
                </div>
            </div>
            <div className="completion-form__textarea completion-form__textarea_comment textarea">
                <div className="textarea__title">Комментарий к заказу</div>
                <textarea></textarea>
            </div>
            <div className="completion-form__buyer">Покупатель</div>
            <div className="completion-form__input-line">
                <div className="completion-form__input completion-form__input_name input">
                    <div className="input__title">Имя</div>
                    <input type="text" />
                </div>
                <div className="completion-form__input completion-form__input_surname input">
                    <div className="input__title">Фамилия</div>
                    <input type="text" />
                </div>
            </div>
            <div className="completion-form__input completion-form__input_telephone input">
                <div className="input__title">Телефон</div>
                <input type="text" />
            </div>
            <div className="completion-form__input completion-form__input_email input">
                <div className="input__title">Почта</div>
                <input type="text" />
            </div>
            <div className="completion-form__payment-method payment-method">
                <div className="payment-method__title">Способ оплаты</div>
                <div className="payment-method__types">
                    <div className="payment-method__type">
                        <input type="checkbox" name="" id="" />
                        <div className="payment-method__info">
                            <div className="payment-method__info_title">
                                Картой Visa, Mastercard или МИР онлайн оплата,
                            </div>

                            <div className="payment-method__info_description">
                                Онлайн - оплата картой Visa, Mastercard, Google Pay. (зачисление мгновенное, без
                                комиссии)
                            </div>
                        </div>
                        <div className="payment-method__price">+ 0 руб</div>
                    </div>
                    <div className="payment-method__type">
                        <input type="checkbox" name="" id="" />
                        <div className="payment-method__info">
                            <div className="payment-method__info_title">
                                Картой Visa, Mastercard или МИР онлайн оплата,
                            </div>

                            <div className="payment-method__info_description">
                                Онлайн - оплата картой Visa, Mastercard, Google Pay. (зачисление мгновенное, без
                                комиссии)
                            </div>
                        </div>
                        <div className="payment-method__price">+ 0 руб</div>
                    </div>
                </div>
            </div>
            <Link to="/" className="completion-form__to-pay" onClick={onPay}>
                <div className="to-pay__content">
                    <div className="to-pay__icon">
                        <svg width="28" height="24" viewBox="0 0 28 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M24.75 14.1094L26.9531 4.35938C27.0469 4.01563 26.9844 3.70312 26.7656 3.42188C26.5469 3.14062 26.25 3 25.875 3H7.45312L7.03125 0.890625C6.96875 0.640625 6.82812 0.4375 6.60938 0.28125C6.42188 0.09375 6.20312 0 5.95312 0H1.125C0.8125 0 0.546875 0.109375 0.328125 0.328125C0.109375 0.546875 0 0.8125 0 1.125V1.875C0 2.1875 0.109375 2.45312 0.328125 2.67188C0.546875 2.89063 0.8125 3 1.125 3H4.40625L7.6875 19.0781C7.28125 19.3281 6.95312 19.6562 6.70312 20.0625C6.48438 20.4688 6.375 20.9062 6.375 21.375C6.375 22.0938 6.625 22.7031 7.125 23.2031C7.65625 23.7344 8.28125 24 9 24C9.71875 24 10.3281 23.7344 10.8281 23.2031C11.3594 22.7031 11.625 22.0781 11.625 21.3281C11.625 20.6094 11.3594 20 10.8281 19.5H20.6719C20.1406 20 19.875 20.6094 19.875 21.3281C19.875 22.0781 20.125 22.7031 20.625 23.2031C21.1562 23.7344 21.7812 24 22.5 24C23.2188 24 23.8281 23.7344 24.3281 23.2031C24.8594 22.7031 25.125 22.0938 25.125 21.375C25.125 20.875 24.9844 20.4219 24.7031 20.0156C24.4531 19.5781 24.0938 19.25 23.625 19.0312L23.9062 17.8594C23.9688 17.5156 23.8906 17.2031 23.6719 16.9219C23.4531 16.6406 23.1719 16.5 22.8281 16.5H10.2188L9.9375 15H23.6719C23.9219 15 24.1406 14.9219 24.3281 14.7656C24.5469 14.6094 24.6875 14.3906 24.75 14.1094Z"
                                fill="white"
                            />
                        </svg>
                    </div>
                    Оплатить
                </div>
            </Link>
        </div>
    );
}

export default OrderCompletion;

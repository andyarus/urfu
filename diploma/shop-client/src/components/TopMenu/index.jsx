import React from "react";
import classnames from "classnames";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import userActions from "../../redux/actions/user";
import { getFullInfo, numberWithSpaces } from "../../api/product";
import Logo from "../Logo";
import Search from "../Search";
import Navigation from "../Navigation";
import Button from "../Button";

import "./TopMenu.scss";

function TopMenu({ searchInfo }) {
    const dispatch = useDispatch();
    const cart = useSelector(({ cart }) => {
        return cart;
    });
    const isAuth = useSelector(({ user }) => {
        return user.isAuth;
    });
    const isAdmin = useSelector(({ user }) => {
        return user.isAdmin;
    });
    const products = useSelector(({ products }) => {
        return products.items;
    });
    const handleClickQuestion = () => {
        dispatch(userActions.setFormStatus("feedback"));
    };
    const handleClickEnter = () => {
        if (!isAuth) {
            dispatch(userActions.setFormStatus("login"));
        } else {
            dispatch(userActions.setUserLogout());
        }
    };
    const fullInfo = getFullInfo(products, cart);
    return (
        <nav className="top-menu">
            <div className="top-menu__container">
                <div className="top-menu__panel panel">
                    <Link to="/">
                        <div className="panel__logo">
                            <svg
                                width="284"
                                height="41"
                                viewBox="0 0 284 41"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M169.693 7.12954C171.263 2.84388 175.299 0 179.812 0H273.197C280.717 0 285.932 7.59522 283.316 14.7371L276.307 33.8705C274.737 38.1561 270.701 41 266.188 41H172.803C165.283 41 160.068 33.4048 162.684 26.2629L169.693 7.12954Z"
                                    fill="#5D43E1"
                                />
                                <path
                                    d="M24.9396 40V24.2714L39.7273 1H28.2844L19.893 15.3838L11.3842 1H0L14.8464 24.2714V40H24.9396Z"
                                    fill="#1A191F"
                                />
                                <path
                                    d="M79.5525 40L64.7648 1H52.0896L37.3606 40H48.8034L50.7399 34.3868H66.1731L68.1096 40H79.5525ZM63.4151 25.6162H53.4393L58.4272 10.94L63.4151 25.6162Z"
                                    fill="#1A191F"
                                />
                                <path
                                    d="M124.836 40L110.048 1H97.3731L82.644 40H94.0869L96.0234 34.3868H111.457L113.393 40H124.836ZM108.699 25.6162H98.7227L103.711 10.94L108.699 25.6162Z"
                                    fill="#1A191F"
                                />
                                <path
                                    d="M147.212 40L162 1H150.557L140.875 29.1244L131.251 1H119.808L134.537 40H147.212Z"
                                    fill="#1A191F"
                                />
                                <path
                                    d="M191.396 27C195.264 27 197.403 25.0652 197.403 22.1522C197.403 16.7609 189.257 18.1087 189.257 16.2609C189.257 15.6522 189.732 15.2174 190.812 15.2174C192.239 15.2174 193.816 15.7174 195.026 16.7174L197.057 14.0435C195.523 12.7174 193.513 12.0217 191.201 12.0217C187.506 12.0217 185.454 14.1957 185.454 16.6304C185.454 22.2174 193.621 20.6304 193.621 22.6087C193.621 23.3043 192.844 23.8043 191.569 23.8043C189.602 23.8043 188.003 22.9348 186.966 21.8913L185 24.6957C186.448 26.087 188.479 27 191.396 27Z"
                                    fill="white"
                                />
                                <path
                                    d="M204.208 26.7391V21.8696H207.708C210.949 21.8696 212.721 19.6739 212.721 17.0652C212.721 14.4348 210.949 12.2391 207.708 12.2391H200.491V26.7391H204.208ZM207.211 18.6087H204.208V15.5H207.211C208.205 15.5 208.94 16.0652 208.94 17.0652C208.94 18.0435 208.205 18.6087 207.211 18.6087Z"
                                    fill="white"
                                />
                                <path
                                    d="M222.706 27C227.114 27 230.398 23.913 230.398 19.5C230.398 15.087 227.114 12 222.706 12C218.298 12 214.992 15.087 214.992 19.5C214.992 23.913 218.298 27 222.706 27ZM222.706 23.6957C220.307 23.6957 218.773 21.8478 218.773 19.5C218.773 17.1304 220.307 15.3043 222.706 15.3043C225.082 15.3043 226.617 17.1304 226.617 19.5C226.617 21.8478 225.082 23.6957 222.706 23.6957Z"
                                    fill="white"
                                />
                                <path
                                    d="M245.915 26.7391L242.976 21.413C244.316 20.9348 245.85 19.587 245.85 17.0652C245.85 14.3696 244.035 12.2391 240.837 12.2391H233.62V26.7391H237.337V21.8696H239.238L241.658 26.7391H245.915ZM240.275 18.6087H237.337V15.5H240.275C241.248 15.5 242.069 16.0652 242.069 17.0435C242.069 18.0652 241.248 18.6087 240.275 18.6087Z"
                                    fill="white"
                                />
                                <path
                                    d="M255.981 26.7391V15.5H260V12.2391H248.224V15.5H252.265V26.7391H255.981Z"
                                    fill="white"
                                />
                            </svg>
                        </div>
                    </Link>
                    <Search searchInfo={searchInfo} />
                    <div className="panel__contacts contacts">
                        <div className="contacts__number">8 (800)-550-98-68</div>
                        <div className="contacts__info">Бесплатный звонок по России</div>
                    </div>
                    <div className="panel__question button button_question" onClick={handleClickQuestion}>
                        Задать вопрос
                    </div>
                    <div className="panel__enter enter button button_enter" onClick={handleClickEnter}>
                        {!isAuth ? (
                            <div className="enter__content">
                                <div className="enter__icon">
                                    <svg
                                        width="18"
                                        height="18"
                                        viewBox="0 0 18 18"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M0.28125 8.75C0.28125 7.17969 0.667969 5.72656 1.44141 4.39062C2.23828 3.05469 3.30469 2 4.64062 1.22656C5.97656 0.429687 7.42969 0.03125 9 0.03125C10.5703 0.03125 12.0234 0.429687 13.3594 1.22656C14.6953 2 15.75 3.05469 16.5234 4.39062C17.3203 5.72656 17.7188 7.17969 17.7188 8.75C17.7188 10.3203 17.3203 11.7734 16.5234 13.1094C15.75 14.4453 14.6953 15.5 13.3594 16.2734C12.0234 17.0703 10.5703 17.4688 9 17.4688C7.42969 17.4688 5.97656 17.0703 4.64062 16.2734C3.30469 15.5 2.23828 14.4453 1.44141 13.1094C0.667969 11.7734 0.28125 10.3203 0.28125 8.75ZM2.8125 13.1797C3.51562 14.1641 4.40625 14.9375 5.48438 15.5C6.58594 16.0625 7.75781 16.3438 9 16.3438C10.2422 16.3438 11.4023 16.0625 12.4805 15.5C13.582 14.9375 14.4844 14.1641 15.1875 13.1797C15.1172 12.7109 14.918 12.3008 14.5898 11.9492C14.2852 11.5742 13.8984 11.3281 13.4297 11.2109L12.3047 10.8945C11.3438 11.7148 10.2422 12.125 9 12.125C7.75781 12.125 6.65625 11.7148 5.69531 10.8945L4.57031 11.2109C4.10156 11.3281 3.70312 11.5742 3.375 11.9492C3.07031 12.3008 2.88281 12.7109 2.8125 13.1797ZM5.0625 7.0625C5.0625 7.76562 5.23828 8.42188 5.58984 9.03125C5.94141 9.64062 6.42188 10.1211 7.03125 10.4727C7.64062 10.8242 8.29688 11 9 11C9.70312 11 10.3594 10.8242 10.9688 10.4727C11.5781 10.1211 12.0586 9.64062 12.4102 9.03125C12.7617 8.42188 12.9375 7.76562 12.9375 7.0625C12.9375 6.35938 12.7617 5.70312 12.4102 5.09375C12.0586 4.48438 11.5781 4.00391 10.9688 3.65234C10.3594 3.30078 9.70312 3.125 9 3.125C8.29688 3.125 7.64062 3.30078 7.03125 3.65234C6.42188 4.00391 5.94141 4.48438 5.58984 5.09375C5.23828 5.70312 5.0625 6.35938 5.0625 7.0625Z"
                                            fill="white"
                                        />
                                    </svg>
                                </div>
                                Войти
                            </div>
                        ) : (
                            "Выйти"
                        )}
                    </div>
                </div>

                <div className="top-menu__navigation navigation">
                    <div className="navigation__items">
                        <div className="navigation__item navigation__item_sale">SALE</div>
                        <Link to="/Category" className="navigation__item">Мужчинам</Link>
                        <Link to="/Category" className="navigation__item">Женщинам</Link>
                        <Link to="/Category" className="navigation__item">Детям</Link>
                        <Link to="/Category" className="navigation__item">Одежда</Link>
                        {isAdmin && (
                            <Link to="/AdminList" className="navigation__item">
                                Администрирование
                            </Link>
                        )}
                    </div>
                    <Link to="/cart" className="navigation__item cart-info">
                        <div className="cart-info__logo">
                            <svg
                                width="23"
                                height="21"
                                viewBox="0 0 23 21"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M20.625 12.2578L22.4609 4.13281C22.5391 3.84635 22.487 3.58594 22.3047 3.35156C22.1224 3.11719 21.875 3 21.5625 3H6.21094L5.85938 1.24219C5.80729 1.03385 5.6901 0.864583 5.50781 0.734375C5.35156 0.578125 5.16927 0.5 4.96094 0.5H0.9375C0.677083 0.5 0.455729 0.591146 0.273438 0.773438C0.0911458 0.955729 0 1.17708 0 1.4375V2.0625C0 2.32292 0.0911458 2.54427 0.273438 2.72656C0.455729 2.90885 0.677083 3 0.9375 3H3.67188L6.40625 16.3984C6.06771 16.6068 5.79427 16.8802 5.58594 17.2188C5.40365 17.5573 5.3125 17.9219 5.3125 18.3125C5.3125 18.9115 5.52083 19.4193 5.9375 19.8359C6.38021 20.2786 6.90104 20.5 7.5 20.5C8.09896 20.5 8.60677 20.2786 9.02344 19.8359C9.46615 19.4193 9.6875 18.8984 9.6875 18.2734C9.6875 17.6745 9.46615 17.1667 9.02344 16.75H17.2266C16.7839 17.1667 16.5625 17.6745 16.5625 18.2734C16.5625 18.8984 16.7708 19.4193 17.1875 19.8359C17.6302 20.2786 18.151 20.5 18.75 20.5C19.349 20.5 19.8568 20.2786 20.2734 19.8359C20.7161 19.4193 20.9375 18.9115 20.9375 18.3125C20.9375 17.8958 20.8203 17.5182 20.5859 17.1797C20.3776 16.8151 20.0781 16.5417 19.6875 16.3594L19.9219 15.3828C19.974 15.0964 19.9089 14.8359 19.7266 14.6016C19.5443 14.3672 19.3099 14.25 19.0234 14.25H8.51562L8.28125 13H19.7266C19.9349 13 20.1172 12.9349 20.2734 12.8047C20.4557 12.6745 20.5729 12.4922 20.625 12.2578Z"
                                    fill="white"
                                />
                            </svg>
                            <div
                                className={classnames("cart-info__counter", {
                                    "cart-info__counter_hide": cart.totalCount <= 0,
                                })}
                            >
                                {cart.totalCount}
                            </div>
                        </div>
                        <div className="cart-ifo__price">
                            {numberWithSpaces(fullInfo.fullPrice - fullInfo.fullDiscount)} ₽
                        </div>
                    </Link>
                </div>
            </div>
        </nav>
    );
}

export default TopMenu;

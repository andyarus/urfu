import React from "react";

import delivery from "../../assets/delivery.png"
import payment from "../../assets/payment.png"

import "./Footer.scss";

function Footer() {
    return (
        <footer className="footer">
            <div className="footer__container">
                <div className="footer__main">
                    <div className="main__section section">
                        <div className="section__title">Для мужчин</div>
                        <div className="section__item">Термобелье</div>
                        <div className="section__item">Лыжные костюмы</div>
                        <div className="section__item">Кроссовки для бега</div>
                        <div className="section__item">Одежда для бега</div>
                        <div className="section__item">Лыжная одежда</div>
                    </div>
                    <div className="main__section section">
                        <div className="section__title">Для женщин</div>
                        <div className="section__item">О магазине</div>
                        <div className="section__item">Отзывы о нас</div>
                        <div className="section__item">Контакты и схема проезда</div>
                        <div className="section__item">Наши скидки</div>
                        <div className="section__item">Сертификаты качества</div>
                        <div className="section__item">5 причин купить в Five-sport</div>
                    </div>
                    <div className="main__section section">
                        <div className="section__title">Для детей</div>
                        <div className="section__item">Доставка</div>
                        <div className="section__item">Реквизиты</div>
                        <div className="section__item">Оферта</div>
                        <div className="section__item">Статьи и обзоры</div>
                        <div className="section__item">Политика конфиденциальности</div>
                    </div>
                    <div className="main__section section">
                        <div className="section__title">
                            <svg
                                width="112"
                                height="18"
                                viewBox="0 0 112 18"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M66.9212 3.74281C67.5403 2.05268 69.1321 0.931152 70.9118 0.931152H107.74C110.705 0.931152 112.762 3.92645 111.73 6.74298L108.966 14.2885C108.347 15.9787 106.755 17.1002 104.975 17.1002H68.1476C65.1819 17.1002 63.1252 14.1049 64.157 11.2884L66.9212 3.74281Z"
                                    fill="#5D43E1"
                                />
                                <path
                                    d="M9.83534 16.706V10.5031L15.6671 1.32568H11.1544L7.84513 6.99818L4.48954 1.32568H0L5.85492 10.5031V16.706H9.83534Z"
                                    fill="white"
                                />
                                <path
                                    d="M31.3728 16.706L25.5411 1.32568H20.5424L14.7338 16.706H19.2464L20.0101 14.4923H26.0965L26.8602 16.706H31.3728ZM25.0088 11.0335H21.0747L23.0417 5.2457L25.0088 11.0335Z"
                                    fill="white"
                                />
                                <path
                                    d="M49.2311 16.706L43.3994 1.32568H38.4007L32.5921 16.706H37.1047L37.8684 14.4923H43.9548L44.7184 16.706H49.2311ZM42.8671 11.0335H38.933L40.9 5.2457L42.8671 11.0335Z"
                                    fill="white"
                                />
                                <path
                                    d="M58.0556 16.706L63.8874 1.32568H59.3747L55.5563 12.417L51.761 1.32568H47.2483L53.057 16.706H58.0556Z"
                                    fill="white"
                                />
                                <path
                                    d="M75.4802 11.5781C77.0055 11.5781 77.8491 10.8151 77.8491 9.66627C77.8491 7.54012 74.6366 8.07166 74.6366 7.34294C74.6366 7.10289 74.8241 6.93143 75.2502 6.93143C75.8126 6.93143 76.4346 7.12861 76.9118 7.52298L77.7128 6.46848C77.1078 5.94551 76.3153 5.67117 75.4035 5.67117C73.9464 5.67117 73.1369 6.52849 73.1369 7.48869C73.1369 9.69199 76.3579 9.06615 76.3579 9.84631C76.3579 10.1207 76.0512 10.3178 75.5484 10.3178C74.773 10.3178 74.1424 9.97491 73.7334 9.5634L72.9579 10.6693C73.5289 11.218 74.3299 11.5781 75.4802 11.5781Z"
                                    fill="white"
                                />
                                <path
                                    d="M80.5329 11.4752V9.55482H81.9133C83.1915 9.55482 83.8902 8.68893 83.8902 7.66015C83.8902 6.62279 83.1915 5.7569 81.9133 5.7569H79.0672V11.4752H80.5329ZM81.7173 8.26885H80.5329V7.04288H81.7173C82.1093 7.04288 82.399 7.26578 82.399 7.66015C82.399 8.04594 82.1093 8.26885 81.7173 8.26885Z"
                                    fill="white"
                                />
                                <path
                                    d="M87.8277 11.5781C89.5661 11.5781 90.8613 10.3607 90.8613 8.62035C90.8613 6.87999 89.5661 5.6626 87.8277 5.6626C86.0894 5.6626 84.7856 6.87999 84.7856 8.62035C84.7856 10.3607 86.0894 11.5781 87.8277 11.5781ZM87.8277 10.275C86.8819 10.275 86.2769 9.54625 86.2769 8.62035C86.2769 7.68587 86.8819 6.96572 87.8277 6.96572C88.7651 6.96572 89.3701 7.68587 89.3701 8.62035C89.3701 9.54625 88.7651 10.275 87.8277 10.275Z"
                                    fill="white"
                                />
                                <path
                                    d="M96.9806 11.4752L95.8217 9.37479C96.35 9.18618 96.955 8.65464 96.955 7.66015C96.955 6.59707 96.2393 5.7569 94.9781 5.7569H92.132V11.4752H93.5977V9.55482H94.3475L95.3019 11.4752H96.9806ZM94.7566 8.26885H93.5977V7.04288H94.7566C95.14 7.04288 95.4638 7.26578 95.4638 7.65158C95.4638 8.05452 95.14 8.26885 94.7566 8.26885Z"
                                    fill="white"
                                />
                                <path
                                    d="M100.95 11.4752V7.04288H102.535V5.7569H97.8913V7.04288H99.4847V11.4752H100.95Z"
                                    fill="white"
                                />
                            </svg>
                        </div>
                        <div className="section__item">О магазине</div>
                        <div className="section__item">Отзывы о нас</div>
                        <div className="section__item">Контакты и схема проезда</div>
                        <div className="section__item">Наши скидки</div>
                        <div className="section__item">Сертификаты качества</div>
                        <div className="section__item">5 причин купить в Five-sport</div>
                    </div>
                </div>
            </div>
            <div className="footer__info">
                <div className="footer__delivery">
                    <div className="footer__info_title">Способы доставки:</div>
                    <div className="footer__info_list">
                        <img src={delivery} alt="Способы доставки" />
                    </div>
                </div>
                <div className="footer__payment">
                    <div className="footer__info_title">Способы оплаты:</div>
                    <div className="footer__info_list">
                        <img src={payment} alt="Способы оплаты" />
                    </div>
                </div>
            </div>
            <div className="footer__container">
                <div className="footer__responsibility">JAAV-sport.ru © 2021. Спортивный интернет-магазин</div>
            </div>
        </footer>
    );
}

export default Footer;

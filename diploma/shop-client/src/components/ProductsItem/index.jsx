import React from "react";
import Button from "../Button";
import ProductsItemAdditionalInfo from "./ProductsItemAdditionalInfo";
import ProductsItemMainInfo from "./ProductsItemMainInfo";

import bigSneakers from "../../assets/bigSneakers.png";
import preview1 from "../../assets/preview1.png";
import preview2 from "../../assets/preview2.png";
import preview3 from "../../assets/preview3.png";
import preview4 from "../../assets/preview4.png";
import preview5 from "../../assets/preview5.png";

import "./ProductsItem.scss";

function ProductsItem() {
    const toggleAdditionalInformation = (type) => {
        console.log(`toggleAdditionalInformation ${type}`);
    };
    return (
        <>
            <div className="product-full-item">
                <div className="product-full-item__product-main-info product-main-info">
                    <div className="product-main-info__discription">
                        <div className="product-main-info__title">
                            Mizuno Wave Rider 24 кроссовки для бега мужские желтые (Распродажа)
                        </div>
                        <div className="product-main-info__number">Артикул J1GC2003 17</div>
                        <div className="product-main-info__img">
                            <img src={bigSneakers} alt="" />
                        </div>
                    </div>
                    <div className="product-main-info__photo-preview photo-preview">
                        <div className="photo-preview__item photo-preview__item_active">
                            <img src={preview1} alt="" />
                        </div>
                        <div className="photo-preview__item">
                            <img src={preview2} alt="" />
                        </div>
                        <div className="photo-preview__item">
                            <img src={preview3} alt="" />
                        </div>
                        <div className="photo-preview__item">
                            <img src={preview4} alt="" />
                        </div>
                        <div className="photo-preview__item">
                            <img src={preview5} alt="" />
                        </div>
                    </div>
                    <div className="product-main-info__details">
                        <div className="product-main-info__product-price product-price">
                            <div className="product-price__title">Стоимость</div>
                            <div className="product-price__now">8 590 ₽</div>
                            <div className="product-price__without-discount">11 490 ₽</div>
                        </div>
                        <div className="product-main-info__size product-size">
                            <div className="product-size__title">Выберите размер</div>
                            <div className="product-size__line">
                                <div className="product-size__item">1</div>
                                <div className="product-size__item">2</div>
                                <div className="product-size__item product-size__item_active">3</div>
                                <div className="product-size__item">4</div>
                                <div className="product-size__item">5</div>
                            </div>
                            <div className="product-size__line">
                                <div className="product-size__item">6</div>
                                <div className="product-size__item">7</div>
                                <div className="product-size__item">8</div>
                                <div className="product-size__item">9</div>
                                <div className="product-size__item">10</div>
                            </div>
                            <div className="product-size__line">
                                <div className="product-size__item product-size__item_empty"></div>
                                <div className="product-size__item">11</div>
                                <div className="product-size__item">12</div>
                                <div className="product-size__item">14</div>
                                <div className="product-size__item product-size__item_empty"></div>
                            </div>
                        </div>
                        <div className="product-main-info__purchase purchase">
                            <div className="purchase__add-to-cart">
                                <div className="add-to-cart__content">
                                    <div className="add-to-cart__icon">
                                        <svg
                                            width="28"
                                            height="24"
                                            viewBox="0 0 28 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M24.75 14.1094L26.9531 4.35938C27.0469 4.01563 26.9844 3.70312 26.7656 3.42188C26.5469 3.14062 26.25 3 25.875 3H7.45312L7.03125 0.890625C6.96875 0.640625 6.82812 0.4375 6.60938 0.28125C6.42188 0.09375 6.20312 0 5.95312 0H1.125C0.8125 0 0.546875 0.109375 0.328125 0.328125C0.109375 0.546875 0 0.8125 0 1.125V1.875C0 2.1875 0.109375 2.45312 0.328125 2.67188C0.546875 2.89063 0.8125 3 1.125 3H4.40625L7.6875 19.0781C7.28125 19.3281 6.95312 19.6562 6.70312 20.0625C6.48438 20.4688 6.375 20.9062 6.375 21.375C6.375 22.0938 6.625 22.7031 7.125 23.2031C7.65625 23.7344 8.28125 24 9 24C9.71875 24 10.3281 23.7344 10.8281 23.2031C11.3594 22.7031 11.625 22.0781 11.625 21.3281C11.625 20.6094 11.3594 20 10.8281 19.5H20.6719C20.1406 20 19.875 20.6094 19.875 21.3281C19.875 22.0781 20.125 22.7031 20.625 23.2031C21.1562 23.7344 21.7812 24 22.5 24C23.2188 24 23.8281 23.7344 24.3281 23.2031C24.8594 22.7031 25.125 22.0938 25.125 21.375C25.125 20.875 24.9844 20.4219 24.7031 20.0156C24.4531 19.5781 24.0938 19.25 23.625 19.0312L23.9062 17.8594C23.9688 17.5156 23.8906 17.2031 23.6719 16.9219C23.4531 16.6406 23.1719 16.5 22.8281 16.5H10.2188L9.9375 15H23.6719C23.9219 15 24.1406 14.9219 24.3281 14.7656C24.5469 14.6094 24.6875 14.3906 24.75 14.1094Z"
                                                fill="white"
                                            />
                                        </svg>
                                    </div>
                                    В корзину
                                </div>
                            </div>
                            <div className="purchase__delivery">
                                <span>Доставка в г.</span> <span className="purchase__delivery_city">Маунтин-Вью</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="product-addition-info__switch">
                <div className="product-addition-info__switch_item product-addition-info__switch_active">Описание</div>
                <div className="product-addition-info__switch_item">Таблица размеров</div>
                <div className="product-addition-info__switch_item">О бренде</div>
                <div className="product-addition-info__switch_item">Доставка и оплата</div>
            </div>
            <div className="product-addition-info__content">
                <div className="product-addition-info__text">
                    <p>
                        Очередное воплощение культовой модели Wave Rider вышло с новациями в области верха и средней
                        части подошвы. Примененная технология Mizuno Enerzy дает в плюсе 17% амортизации и 15%
                        энергоотдачи, по сравнению с предыдущей моделью.
                    </p>
                    <p>
                        Эффективное сотрудничество с Pebax Power позволило обновить пластину Wave, сделав ее еще более
                        устойчивой. Вставки из резины с повышенным содержанием углерода значительно повышают
                        износоустойчивость подметки. Wave Rider 24 – прекрасный вариант комфортных
                        высокопроизводительных кроссовок для бега по асфальту.
                    </p>
                    <p>Подходят нейтральным пронаторам.</p>
                    <p>
                        Очередное воплощение культовой модели Wave Rider вышло с новациями в области верха и средней
                        части подошвы. Примененная технология Mizuno Enerzy дает в плюсе 17% амортизации и 15%
                        энергоотдачи, по сравнению с предыдущей моделью.
                    </p>
                    <p>
                        Эффективное сотрудничество с Pebax Power позволило обновить пластину Wave, сделав ее еще более
                        устойчивой. Вставки из резины с повышенным содержанием углерода значительно повышают
                        износоустойчивость подметки. Wave Rider 24 – прекрасный вариант комфортных
                        высокопроизводительных кроссовок для бега по асфальту.
                    </p>
                    <p>Подходят нейтральным пронаторам.</p>
                </div>
                <div className="product-addition-info__advantages">
                    <div className="advantages-item">
                        <div className="advantages-item__icon">
                            <svg
                                width="28"
                                height="24"
                                viewBox="0 0 28 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M24.75 14.1094L26.9531 4.35938C27.0469 4.01563 26.9844 3.70312 26.7656 3.42188C26.5469 3.14062 26.25 3 25.875 3H7.45312L7.03125 0.890625C6.96875 0.640625 6.82812 0.4375 6.60938 0.28125C6.42188 0.09375 6.20312 0 5.95312 0H1.125C0.8125 0 0.546875 0.109375 0.328125 0.328125C0.109375 0.546875 0 0.8125 0 1.125V1.875C0 2.1875 0.109375 2.45312 0.328125 2.67188C0.546875 2.89063 0.8125 3 1.125 3H4.40625L7.6875 19.0781C7.28125 19.3281 6.95312 19.6562 6.70312 20.0625C6.48438 20.4688 6.375 20.9062 6.375 21.375C6.375 22.0938 6.625 22.7031 7.125 23.2031C7.65625 23.7344 8.28125 24 9 24C9.71875 24 10.3281 23.7344 10.8281 23.2031C11.3594 22.7031 11.625 22.0781 11.625 21.3281C11.625 20.6094 11.3594 20 10.8281 19.5H20.6719C20.1406 20 19.875 20.6094 19.875 21.3281C19.875 22.0781 20.125 22.7031 20.625 23.2031C21.1562 23.7344 21.7812 24 22.5 24C23.2188 24 23.8281 23.7344 24.3281 23.2031C24.8594 22.7031 25.125 22.0938 25.125 21.375C25.125 20.875 24.9844 20.4219 24.7031 20.0156C24.4531 19.5781 24.0938 19.25 23.625 19.0312L23.9062 17.8594C23.9688 17.5156 23.8906 17.2031 23.6719 16.9219C23.4531 16.6406 23.1719 16.5 22.8281 16.5H10.2188L9.9375 15H23.6719C23.9219 15 24.1406 14.9219 24.3281 14.7656C24.5469 14.6094 24.6875 14.3906 24.75 14.1094Z"
                                    fill="white"
                                />
                            </svg>
                        </div>
                        <div className="advantages-item__title">Надежный магазин</div>
                        <div className="advantages-item__text">
                            Более 3000 положительных отзывов и 40000 заказов за 7 лет работы
                        </div>
                    </div>
                    <div className="advantages-item">
                        <div className="advantages-item__icon">
                            <svg
                                width="28"
                                height="24"
                                viewBox="0 0 28 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M24.75 14.1094L26.9531 4.35938C27.0469 4.01563 26.9844 3.70312 26.7656 3.42188C26.5469 3.14062 26.25 3 25.875 3H7.45312L7.03125 0.890625C6.96875 0.640625 6.82812 0.4375 6.60938 0.28125C6.42188 0.09375 6.20312 0 5.95312 0H1.125C0.8125 0 0.546875 0.109375 0.328125 0.328125C0.109375 0.546875 0 0.8125 0 1.125V1.875C0 2.1875 0.109375 2.45312 0.328125 2.67188C0.546875 2.89063 0.8125 3 1.125 3H4.40625L7.6875 19.0781C7.28125 19.3281 6.95312 19.6562 6.70312 20.0625C6.48438 20.4688 6.375 20.9062 6.375 21.375C6.375 22.0938 6.625 22.7031 7.125 23.2031C7.65625 23.7344 8.28125 24 9 24C9.71875 24 10.3281 23.7344 10.8281 23.2031C11.3594 22.7031 11.625 22.0781 11.625 21.3281C11.625 20.6094 11.3594 20 10.8281 19.5H20.6719C20.1406 20 19.875 20.6094 19.875 21.3281C19.875 22.0781 20.125 22.7031 20.625 23.2031C21.1562 23.7344 21.7812 24 22.5 24C23.2188 24 23.8281 23.7344 24.3281 23.2031C24.8594 22.7031 25.125 22.0938 25.125 21.375C25.125 20.875 24.9844 20.4219 24.7031 20.0156C24.4531 19.5781 24.0938 19.25 23.625 19.0312L23.9062 17.8594C23.9688 17.5156 23.8906 17.2031 23.6719 16.9219C23.4531 16.6406 23.1719 16.5 22.8281 16.5H10.2188L9.9375 15H23.6719C23.9219 15 24.1406 14.9219 24.3281 14.7656C24.5469 14.6094 24.6875 14.3906 24.75 14.1094Z"
                                    fill="white"
                                />
                            </svg>
                        </div>
                        <div className="advantages-item__title">Оплата при получении</div>
                        <div className="advantages-item__text">Оплачивайте заказ после получения и примерки*</div>
                    </div>
                    <div className="advantages-item">
                        <div className="advantages-item__icon">
                            <svg
                                width="28"
                                height="24"
                                viewBox="0 0 28 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M24.75 14.1094L26.9531 4.35938C27.0469 4.01563 26.9844 3.70312 26.7656 3.42188C26.5469 3.14062 26.25 3 25.875 3H7.45312L7.03125 0.890625C6.96875 0.640625 6.82812 0.4375 6.60938 0.28125C6.42188 0.09375 6.20312 0 5.95312 0H1.125C0.8125 0 0.546875 0.109375 0.328125 0.328125C0.109375 0.546875 0 0.8125 0 1.125V1.875C0 2.1875 0.109375 2.45312 0.328125 2.67188C0.546875 2.89063 0.8125 3 1.125 3H4.40625L7.6875 19.0781C7.28125 19.3281 6.95312 19.6562 6.70312 20.0625C6.48438 20.4688 6.375 20.9062 6.375 21.375C6.375 22.0938 6.625 22.7031 7.125 23.2031C7.65625 23.7344 8.28125 24 9 24C9.71875 24 10.3281 23.7344 10.8281 23.2031C11.3594 22.7031 11.625 22.0781 11.625 21.3281C11.625 20.6094 11.3594 20 10.8281 19.5H20.6719C20.1406 20 19.875 20.6094 19.875 21.3281C19.875 22.0781 20.125 22.7031 20.625 23.2031C21.1562 23.7344 21.7812 24 22.5 24C23.2188 24 23.8281 23.7344 24.3281 23.2031C24.8594 22.7031 25.125 22.0938 25.125 21.375C25.125 20.875 24.9844 20.4219 24.7031 20.0156C24.4531 19.5781 24.0938 19.25 23.625 19.0312L23.9062 17.8594C23.9688 17.5156 23.8906 17.2031 23.6719 16.9219C23.4531 16.6406 23.1719 16.5 22.8281 16.5H10.2188L9.9375 15H23.6719C23.9219 15 24.1406 14.9219 24.3281 14.7656C24.5469 14.6094 24.6875 14.3906 24.75 14.1094Z"
                                    fill="white"
                                />
                            </svg>
                        </div>
                        <div className="advantages-item__title">Оригинальные товары</div>
                        <div className="advantages-item__text">Только оригинальные товары от официальных дилеров.</div>
                    </div>
                    <div className="advantages-item">
                        <div className="advantages-item__icon">
                            <svg
                                width="28"
                                height="24"
                                viewBox="0 0 28 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M24.75 14.1094L26.9531 4.35938C27.0469 4.01563 26.9844 3.70312 26.7656 3.42188C26.5469 3.14062 26.25 3 25.875 3H7.45312L7.03125 0.890625C6.96875 0.640625 6.82812 0.4375 6.60938 0.28125C6.42188 0.09375 6.20312 0 5.95312 0H1.125C0.8125 0 0.546875 0.109375 0.328125 0.328125C0.109375 0.546875 0 0.8125 0 1.125V1.875C0 2.1875 0.109375 2.45312 0.328125 2.67188C0.546875 2.89063 0.8125 3 1.125 3H4.40625L7.6875 19.0781C7.28125 19.3281 6.95312 19.6562 6.70312 20.0625C6.48438 20.4688 6.375 20.9062 6.375 21.375C6.375 22.0938 6.625 22.7031 7.125 23.2031C7.65625 23.7344 8.28125 24 9 24C9.71875 24 10.3281 23.7344 10.8281 23.2031C11.3594 22.7031 11.625 22.0781 11.625 21.3281C11.625 20.6094 11.3594 20 10.8281 19.5H20.6719C20.1406 20 19.875 20.6094 19.875 21.3281C19.875 22.0781 20.125 22.7031 20.625 23.2031C21.1562 23.7344 21.7812 24 22.5 24C23.2188 24 23.8281 23.7344 24.3281 23.2031C24.8594 22.7031 25.125 22.0938 25.125 21.375C25.125 20.875 24.9844 20.4219 24.7031 20.0156C24.4531 19.5781 24.0938 19.25 23.625 19.0312L23.9062 17.8594C23.9688 17.5156 23.8906 17.2031 23.6719 16.9219C23.4531 16.6406 23.1719 16.5 22.8281 16.5H10.2188L9.9375 15H23.6719C23.9219 15 24.1406 14.9219 24.3281 14.7656C24.5469 14.6094 24.6875 14.3906 24.75 14.1094Z"
                                    fill="white"
                                />
                            </svg>
                        </div>
                        <div className="advantages-item__title">Размер на выбор</div>
                        <div className="advantages-item__text">
                            У нас вы можете заказать два размера на примерку без лишних проблем
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProductsItem;

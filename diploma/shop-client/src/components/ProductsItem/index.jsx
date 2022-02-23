import React, { useState } from "react";
import { useDispatch } from "react-redux";
import cn from "classnames";

import { numberWithSpaces } from "../../api/product";
import cartActions from "../../redux/actions/cart";
import SizeItem from "../SizeItem";
import Button from "../Button";
import ProductsItemAdditionalInfo from "./ProductsItemAdditionalInfo";
import ProductsItemMainInfo from "./ProductsItemMainInfo";

import preview1 from "../../assets/preview1.png";
import preview2 from "../../assets/preview2.png";
import preview3 from "../../assets/preview3.png";
import preview4 from "../../assets/preview4.png";
import preview5 from "../../assets/preview5.png";

import "./ProductsItem.scss";

function ProductsItem({ item }) {
    const [activeImg, setActiveImg] = useState(0);
    const [pageContentType, setPageContentType] = useState("description");
    const [activeSize, setActiveSize] = useState();
    const toggleAdditionalInformation = (type) => {
        console.log(`toggleAdditionalInformation ${type}`);
    };
    const dispatch = useDispatch();

    const addToCart = () => {
        console.log("addToCart");
        dispatch(cartActions.setChangeItems({ count: 1, id: item.id }));
    };
    const priceNow = Math.round(item.price - (item.price * item.discount) / 100);
    return (
        <>
            <div className="product-full-item">
                <div className="product-full-item__product-main-info product-main-info">
                    <div className="product-main-info__discription">
                        <div className="product-main-info__title">{item.name}</div>
                        <div className="product-main-info__number">Артикул {item.article}</div>
                        <div className="product-main-info__img">
                            <img src={item.image_url[activeImg]} alt="" />
                        </div>
                    </div>
                    <div className="product-main-info__photo-preview photo-preview">
                        {item.image_url.map((url, index) => {
                            return (
                                <div
                                    key={index}
                                    className={cn("photo-preview__item", {
                                        "photo-preview__item_active": index === activeImg,
                                    })}
                                    onClick={() => {
                                        setActiveImg(index);
                                    }}
                                >
                                    <img src={url} alt="" />
                                </div>
                            );
                        })}
                    </div>
                    <div className="product-main-info__details">
                        <div className="product-main-info__product-price product-price">
                            <div className="product-price__title">Стоимость</div>
                            <div className="product-price__now">{numberWithSpaces(priceNow)} ₽</div>
                            <div className="product-price__without-discount">{numberWithSpaces(item.price)} ₽</div>
                        </div>
                        <div className="product-main-info__size product-size">
                            <div className="product-size__title">Выберите размер</div>
                            <div className="product-size__line">
                                <SizeItem number={1} setActiveSize={setActiveSize} activeSize={activeSize} />
                                <SizeItem number={2} setActiveSize={setActiveSize} activeSize={activeSize} />
                                <SizeItem number={3} setActiveSize={setActiveSize} activeSize={activeSize} />
                                <SizeItem number={4} setActiveSize={setActiveSize} activeSize={activeSize} />
                                <SizeItem number={5} setActiveSize={setActiveSize} activeSize={activeSize} />
                            </div>
                            <div className="product-size__line">
                                <SizeItem number={6} setActiveSize={setActiveSize} activeSize={activeSize} />
                                <SizeItem number={7} setActiveSize={setActiveSize} activeSize={activeSize} />
                                <SizeItem number={8} setActiveSize={setActiveSize} activeSize={activeSize} />
                                <SizeItem number={9} setActiveSize={setActiveSize} activeSize={activeSize} />
                                <SizeItem number={10} setActiveSize={setActiveSize} activeSize={activeSize} />
                            </div>
                            <div className="product-size__line">
                                <SizeItem number={0} setActiveSize={setActiveSize} activeSize={activeSize} />
                                <SizeItem number={11} setActiveSize={setActiveSize} activeSize={activeSize} />
                                <SizeItem number={12} setActiveSize={setActiveSize} activeSize={activeSize} />
                                <SizeItem number={14} setActiveSize={setActiveSize} activeSize={activeSize} />
                                <SizeItem number={0} setActiveSize={setActiveSize} activeSize={activeSize} />
                            </div>
                        </div>
                        <div className="product-main-info__purchase purchase">
                            <div className="purchase__add-to-cart" onClick={addToCart}>
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
                <div
                    className={cn("product-addition-info__switch_item", {
                        "product-addition-info__switch_active": pageContentType === "description",
                    })}
                    onClick={() => {
                        setPageContentType("description");
                    }}
                >
                    Описание
                </div>
                <div
                    className={cn("product-addition-info__switch_item", {
                        "product-addition-info__switch_active": pageContentType === "sizes",
                    })}
                    onClick={() => {
                        setPageContentType("sizes");
                    }}
                >
                    Таблица размеров
                </div>
                <div
                    className={cn("product-addition-info__switch_item", {
                        "product-addition-info__switch_active": pageContentType === "brand",
                    })}
                    onClick={() => {
                        setPageContentType("brand");
                    }}
                >
                    О бренде
                </div>
                <div
                    className={cn("product-addition-info__switch_item", {
                        "product-addition-info__switch_active": pageContentType === "delivery",
                    })}
                    onClick={() => {
                        setPageContentType("delivery");
                    }}
                >
                    Доставка и оплата
                </div>
            </div>
            <ProductsItemAdditionalInfo item={item} type={pageContentType} />
        </>
    );
}

export default ProductsItem;

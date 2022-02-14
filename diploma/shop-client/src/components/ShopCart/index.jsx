import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import classnames from 'classnames'
import { getProductById, getFullInfo, numberWithSpaces } from "../../api/product";

import ShopCartItem from "./ShopCartItem";
import Button from "../Button";

import "./ShopCart.scss";

function ShopCart() {
    const cart = useSelector(({ cart }) => {
        return cart;
    });
    const products = useSelector(({ products }) => {
        return products.items;
    });

    const fullInfo = getFullInfo(products, cart);

    return (
        <div className="cart">
            <div className="cart__cart-info cart-info">
                <div className="cart-info__title">Корзина</div>
                <div className="cart-info__cart-items cart-items">
                    {Object.keys(cart.items).map((id) => {
                        if (cart.items[id].count > 0) {
                            return (
                                <ShopCartItem
                                    key={id}
                                    count={cart.items[id].count}
                                    item={getProductById(products, id)}
                                />
                            );
                        }
                    })}
                </div>
            </div>
            <div className="cart__total-price total-price">
                <div className="total-price__title">Стоимость</div>
                <div className="total-price__without-discount">
                    <div className="total-price__without-discount_title">Общая цена:</div>
                    <div className="total-price__without-discount_number">
                        {numberWithSpaces(fullInfo.fullPrice)} руб
                    </div>
                </div>
                <div className="total-price__discount">
                    <div className="total-price__discount_title">Скидка</div>
                    <div className="total-price__discount_number">
                        {fullInfo.fullDiscount > 0
                            ? `-${numberWithSpaces(fullInfo.fullDiscount)} руб`
                            : `${numberWithSpaces(fullInfo.fullDiscount)} руб`}
                    </div>
                </div>

                <div className="total-price__now">
                    <div className="total-price__now_title">Итого:</div>
                    <div className="total-price__now_number">
                        {numberWithSpaces(fullInfo.fullPrice - fullInfo.fullDiscount)} руб
                    </div>
                </div>
                <Link
                    to="/order"
                    className={classnames("total-price__order", {
                        "total-price__order_disabled": cart.totalCount == 0,
                    })}
                >
                    Оформить заказ
                </Link>
            </div>
        </div>
    );
}

export default ShopCart;

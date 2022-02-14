import React from "react";

import { useSelector } from "react-redux";

import { getProductById, getFullInfo, numberWithSpaces } from "../../api/product";

import OrderResultItem from "./OrderResultItem";

import "./CartResultInfo.scss";

function CartResultInfo() {
    const cart = useSelector(({ cart }) => {
        return cart;
    });
    const products = useSelector(({ products }) => {
        return products.items;
    });
    const fullInfo = getFullInfo(products, cart);

    return (
        <div className="order__order-result">
            <div className="order-result">
                <div className="order-result__title">Заказ №100500</div>
                <div className="order-result__items">
                    {Object.keys(cart.items).map((id) => {
                        if (cart.items[id].count > 0) {
                            return (
                                <OrderResultItem
                                    key={id}
                                    count={cart.items[id].count}
                                    item={getProductById(products, id)}
                                />
                            );
                        }
                    })}
                </div>
                <div className="order-result__info">
                    <div className="order-result__info_line">
                        <div className="order-result__info_title">Сумма по товарам</div>
                        <div className="order-result__info_number">
                            {numberWithSpaces(fullInfo.fullPrice - fullInfo.fullDiscount)} руб
                        </div>
                    </div>
                    <div className="order-result__info_line">
                        <div className="order-result__info_title">Стоимость доставки</div>
                        <div className="order-result__info_number">0 руб</div>
                    </div>
                </div>
                <div className="order-result__order-total-price order-total-price">
                    <div className="order-total-price__title">Итого:</div>
                    <div className="order-total-price__number">
                        {numberWithSpaces(fullInfo.fullPrice - fullInfo.fullDiscount)} руб
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CartResultInfo;

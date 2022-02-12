import React from "react";
import preview1 from "../../assets/preview1.png";

import "./CartResultInfo.scss";

function CartResultInfo() {
    return (
        <div className="order__order-result">
            <div className="order-result">
                <div className="order-result__title">Заказ №100500</div>
                <div className="order-result__items">
                    <div className="order-result__item">
                        <div className="order-result__item_img">
                            <img src={preview1} alt="" />
                        </div>
                        <div className="order-result__item_description">
                            Mizuno Wave Rider 24 кроссовки для бега мужские желтые (Распродажа)
                        </div>
                        <div className="order-result__item_details">
                            <div className="order-result__item_price">8 590 руб</div>
                            <div className="order-result__item_count">1 шт.</div>
                        </div>
                    </div>
                    <div className="order-result__item">
                        <div className="order-result__item_img">
                            <img src={preview1} alt="" />
                        </div>
                        <div className="order-result__item_description">
                            Mizuno Wave Rider 24 кроссовки для бега мужские желтые (Распродажа)
                        </div>
                        <div className="order-result__item_details">
                            <div className="order-result__item_price">8 590 руб</div>
                            <div className="order-result__item_count">1 шт.</div>
                        </div>
                    </div>
                </div>
                <div className="order-result__info">
                    <div className="order-result__info_line">
                        <div className="order-result__info_title">Сумма по товарам</div>
                        <div className="order-result__info_number">15 580 руб</div>
                    </div>
                    <div className="order-result__info_line">
                        <div className="order-result__info_title">Стоимость доставки</div>
                        <div className="order-result__info_number">0 руб</div>
                    </div>
                </div>
                <div className="order-result__order-total-price order-total-price">
                    <div className="order-total-price__title">Итого:</div>
                    <div className="order-total-price__number">15 580 руб</div>
                </div>
            </div>
        </div>
    );
}

export default CartResultInfo;

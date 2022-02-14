import React from "react";
import { numberWithSpaces } from "../../../api/product";

function OrderResultItem({ item, count }) {
    const priceNow = Math.round(item.price - (item.price * item.discount) / 100);
    return (
        <div className="order-result__item">
            <div className="order-result__item_img">
                <img src={item.image_url} alt="" />
            </div>
            <div className="order-result__item_description">{item.name}</div>
            <div className="order-result__item_details">
                <div className="order-result__item_price">{numberWithSpaces(priceNow * count)} руб</div>
                <div className="order-result__item_count">{count} шт.</div>
            </div>
        </div>
    );
}

export default OrderResultItem;

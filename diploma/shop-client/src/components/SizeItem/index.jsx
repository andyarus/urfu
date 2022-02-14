import React from "react";
import classnames from "classnames";

import './SizeItem.scss'

function SizeItem({ number, setActiveSize, activeSize }) {
    return (
        <div
            className={classnames("product-size__item", {
                "product-size__item_active": activeSize === number,
                "product-size__item_empty": number === 0,
            })}
            onClick={() => {
                setActiveSize(number);
            }}
        >
            {number}
        </div>
    );
}

export default SizeItem;

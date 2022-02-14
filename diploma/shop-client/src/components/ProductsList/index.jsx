import React from "react";
import ProductsListItem from "./ProductsListItem";

import "./ProductsList.scss";

function ProductsList({ title, className, items }) {
    return (
        <div className={`products-list ${className}`}>
            <div className="products-list__title">{title}</div>
            <div className="products-list__items">
                {items && items.map(item => <ProductsListItem key={item.id} item={item}/>)}
            </div>
        </div>
    );
}

export default ProductsList;

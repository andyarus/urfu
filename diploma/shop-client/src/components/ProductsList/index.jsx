import React from "react";
import ProductsListItem from "./ProductsListItem";

import productitemimg from "../../assets/productitemimg.png";

import "./ProductsList.scss";

function ProductsList({ title, className }) {
    return (
        <div className={`products-list ${className}`}>
            <div className="products-list__title">{title}</div>
            <div className="products-list__items">
                <ProductsListItem />
                <ProductsListItem />
                <ProductsListItem />
                <ProductsListItem />
                <ProductsListItem />
            </div>
        </div>
    );
}

export default ProductsList;

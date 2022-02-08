import React from "react";
import ProductsListItem from "./ProductsListItem";

import './ProductsList.scss'
function ProductsList() {
    return (
        <div>
            <div>ProductsList:</div>
            <ProductsListItem></ProductsListItem>
            <ProductsListItem></ProductsListItem>
            <ProductsListItem></ProductsListItem>
            <ProductsListItem></ProductsListItem>
            <ProductsListItem></ProductsListItem>
        </div>
    );
}

export default ProductsList;

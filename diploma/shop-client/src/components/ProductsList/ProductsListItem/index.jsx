import React from "react";
import Button from "../../Button";
import "./ProductsItem.scss";

function ProductsItem() {
    const addToCart = () => {
        console.log("addToCart");
    };
    return (
        <div>
            ProductsItem
            <Button onClick={addToCart}>Add to Cart</Button>
        </div>
    );
}

export default ProductsItem;

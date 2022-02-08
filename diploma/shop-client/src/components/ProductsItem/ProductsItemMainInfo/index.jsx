import React from "react";
import Button from "../../Button";

function ProductsItemMainInfo() {
    const addToCart = () => {
        console.log("addToCart");
    };
    return (
        <div>
            ProductsItemMainInfo
            <Button onClick={addToCart}>Add to Cart</Button>
        </div>
    );
}

export default ProductsItemMainInfo;

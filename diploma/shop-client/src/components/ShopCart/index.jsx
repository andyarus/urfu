import React from "react";
import ShopCartItem from "./ShopCartItem";
import Button from "../Button";

function ShopCart() {
    const onApproveOrder = () => {
        console.log(onApproveOrder)
    }
    return (
        <div>
            <ShopCartItem />
            <ShopCartItem />
            <ShopCartItem />
            <Button onClick={onApproveOrder}>Оформить заказ</Button>
        </div>
    );
}

export default ShopCart;

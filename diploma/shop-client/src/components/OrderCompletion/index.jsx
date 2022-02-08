import React from "react";
import Button from "../Button";

import "./OrderCompletion.scss";

function OrderCompletion() {
    const handleClickEnter = () => {
        console.log("handleClickEnter");
    };
    const onPay = () => {
        console.log("Оплатить");
    };
    return (
        <div>
            <div onClick={handleClickEnter}>Войти</div>
            OrderCompletion
            <Button onClick={onPay}>Оплатить</Button>
        </div>
    );
}

export default OrderCompletion;

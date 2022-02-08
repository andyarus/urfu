import React from "react";
import Button from "../../Button";
function ShopCartItem() {
    const onDelete = () => {
        console.log("Удалить из корзины");
    };
    const changeCount = (number) => {
        console.log(`Изменить кол-во элементов на ${number}`);
    };
    return (
        <div>
            ShopCartItem:
            <div
                onClick={() => {
                    changeCount(1);
                }}
            >
                +
            </div>
            <div
                onClick={() => {
                    changeCount(-1);
                }}
            >
                -
            </div>
            <div onClick={onDelete}>Удалить</div>
        </div>
    );
}

export default ShopCartItem;

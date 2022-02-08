import React from "react";
import Button from "../Button";
import ProductsItemAdditionalInfo from "./ProductsItemAdditionalInfo";
import ProductsItemMainInfo from "./ProductsItemMainInfo";

function ProductsItem() {
    const toggleAdditionalInformation = (type) => {
        console.log(`toggleAdditionalInformation ${type}`);
    };
    return (
        <div>
            <ProductsItemMainInfo />
            <Button
                onClick={() => {
                    toggleAdditionalInformation("Описание");
                }}
            >
                {" "}
                Описание{" "}
            </Button>
            <Button
                onClick={() => {
                    toggleAdditionalInformation("Таблица размеров");
                }}
            >
                {" "}
                Таблица размеров{" "}
            </Button>
            <Button
                onClick={() => {
                    toggleAdditionalInformation("О бренде");
                }}
            >
                {" "}
                О бренде{" "}
            </Button>
            <Button
                onClick={() => {
                    toggleAdditionalInformation("Доставка и оплата");
                }}
            >
                {" "}
                Доставка и оплата{" "}
            </Button>
            <ProductsItemAdditionalInfo />
        </div>
    );
}

export default ProductsItem;

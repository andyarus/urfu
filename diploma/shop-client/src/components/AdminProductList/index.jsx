import React from "react";
import Button from "../Button";
import ProductsItem from "../ProductsItem";

function AdminProductList() {
    const onAdd = () => {
        console.log("Добавить товар");
    };
    return (
        <div>
            <Button onClick={onAdd}>Добавить товар</Button>
            <ProductsItem />
            <ProductsItem />
            <ProductsItem />
            <ProductsItem />
            <ProductsItem />
            <ProductsItem />
        </div>
    );
}

export default AdminProductList;

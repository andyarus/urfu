import React from "react";
import Button from "../Button";

import './ProductsItemEditForm.scss'

function ProductsItemEditForm() {
    const onDelete = () => {
        console.log("Удалить");
    };
    const onSave = () => {
        console.log("Сохранить");
    };
    return (
        <div>
            ProductsItemEditForm
            <Button onClick={onDelete}>Удалить</Button>
            <Button onClick={onSave}>Сохранить</Button>
        </div>
    );
}

export default ProductsItemEditForm;

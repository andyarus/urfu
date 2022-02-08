import React from "react";
import Filter from "../Filter";
import Button from "../Button";

function FullFilterSettings() {
    const onSubmit = () => {
        console.log("onSubmit");
    };
    const onReset = () => {
        console.log("onReset");
    };
    return (
        <div>
            <Filter title={"Цена"} />
            <Filter title={"Размер"} />
            <Filter title={"Пол"} />
            <Filter title={"Бренд"} />
            <Filter title={"Назначение"} />
            <Filter title={"Цвет"} />
            <Button onClick={onSubmit}>Применить</Button>
            <Button onClick={onReset}>Сбросить фильтр</Button>
        </div>
    );
}

export default FullFilterSettings;

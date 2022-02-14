import React from "react";
import AdvantageItem from "../AdvantageItem";

import "./AdvantageList.scss";

const advantagesText = [
    "Широкий выбор спортивной одежды, обуви и термобелья",
    "Бесплатная и быстрая доставка по всей России от 2 дней!",
    "Сотрудники - мастера спорта, спортсмены с богатым опытом",
    "Только оригинальные, фирменные товары от производителей",
];

function AdvantageList() {
    return (
        <section className="advantage-list">
            {advantagesText.map((item, index) => (
                <AdvantageItem key={index} text={item} />
            ))}
        </section>
    );
}

export default AdvantageList;

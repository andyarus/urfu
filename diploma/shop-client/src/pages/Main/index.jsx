import React, { useEffect } from "react";
import { useSelector } from "react-redux";

import TopMenu from "../../components/TopMenu";
import AdvantageList from "../../components/AdvantageList";
import Baner from "../../components/Baner";
import ProductsList from "../../components/ProductsList";
import Footer from "../../components/Footer";

//Получение популярных продуктов
const getPorular = (items) => {
    const popular = items.slice(0, 5);
    return popular;
};

//Получение самых новых продуктов
const getNew = (items) => {
    const newest = items.slice(-5);
    return newest;
};

function Main() {
    //Получение продуктов из store
    const products = useSelector(({ products }) => {
        return products.items;
    });
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const popularProducts = getPorular(products);
    const newProducts = getNew(products);

    return (
        <div>
            <AdvantageList />
            <Baner />
            <ProductsList title={"Новинки"} items={newProducts} className="products-list_new" />
            <ProductsList title={"Популярные товары"} items={popularProducts} className="products-list_popular" />
        </div>
    );
}

export default Main;

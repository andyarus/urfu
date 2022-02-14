import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import TopMenu from "../../components/TopMenu";
import BreadCrumbs from "../../components/BreadCrumbs";
import ProductsItem from "../../components/ProductsItem";
import ProductsList from "../../components/ProductsList";
import Footer from "../../components/Footer";

//Получение похожих продуков
const getSame = (items) => {
    const popular = items.slice(0, 5);
    return popular;
};

function Product() {
    const products = useSelector(({ products }) => {
        return products.items;
    });
    const { id } = useParams();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    const currentProduct = products.filter((item) => item.id === +id)[0];

    const sameProducts = getSame(products);
    return (
        <div>
            <BreadCrumbs />
            <ProductsItem item={currentProduct} />
            <ProductsList title={"Похожие товары"} items={sameProducts} className="products-list__products-page" />
        </div>
    );
}

export default Product;

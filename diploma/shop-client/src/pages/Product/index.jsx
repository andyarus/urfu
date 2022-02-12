import React from "react";
import TopMenu from "../../components/TopMenu";
import BreadCrumbs from "../../components/BreadCrumbs";
import ProductsItem from "../../components/ProductsItem";
import ProductsList from "../../components/ProductsList";
import Footer from "../../components/Footer";

function Product() {
    return (
        <div class="page-style">
            <TopMenu />
            <BreadCrumbs />
            <ProductsItem />
            <ProductsList title={"Похожие товары"} className="products-list__products-page" />
            <Footer />
        </div>
    );
}

export default Product;

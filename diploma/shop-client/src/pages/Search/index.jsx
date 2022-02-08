import React from "react";
import TopMenu from "../../components/TopMenu";
import BreadCrumbs from "../../components/BreadCrumbs";
import ProductsList from "../../components/ProductsList";
import Footer from "../../components/Footer";

function Search() {
    
    return (
        <div>
            <TopMenu />
            <BreadCrumbs />
            <ProductsList title={"По запросу «Кросовки» найдено 300 товаров "} />

            <Footer />
        </div>
    );
}

export default Search;

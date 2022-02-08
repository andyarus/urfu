import React from "react";
import TopMenu from "../../components/TopMenu";
import AdvantageList from "../../components/AdvantageList";
import Baner from "../../components/Baner";
import ProductsList from "../../components/ProductsList";
import Footer from "../../components/Footer";

function Main() {
    return (
        <div>
            <TopMenu />
            <AdvantageList />
            <Baner />
            <ProductsList title={"Новинки"} className="products-list_new"/>
            <ProductsList title={"Популярные товары"} className="products-list_popular"/>
            <Footer />
        </div>
    );
}

export default Main;

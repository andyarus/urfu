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
            <ProductsList title={"Новинки"} />
            <ProductsList title={"Популярные товары"} />
            <Footer />
        </div>
    );
}

export default Main;

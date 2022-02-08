import React from "react";
import TopMenu from "../../components/TopMenu";
import BreadCrumbs from "../../components/BreadCrumbs";
import CartResultInfo from "../../components/CartResultInfo";
import OrderCompletion from "../../components/OrderCompletion";
import Footer from "../../components/Footer";

function Search() {
    return (
        <div>
            <TopMenu />
            <BreadCrumbs />
            <CartResultInfo />
            <OrderCompletion />
            <Footer />
        </div>
    );
}

export default Search;

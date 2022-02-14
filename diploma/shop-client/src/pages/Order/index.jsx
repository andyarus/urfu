import React from "react";
import TopMenu from "../../components/TopMenu";
import BreadCrumbs from "../../components/BreadCrumbs";
import CartResultInfo from "../../components/CartResultInfo";
import OrderCompletion from "../../components/OrderCompletion";
import Footer from "../../components/Footer";

import "./Order.scss"

function Search() {
    return (
        <div>
            <BreadCrumbs />
            <div className="order">
                <CartResultInfo />
                <OrderCompletion />
            </div>
        </div>
    );
}

export default Search;

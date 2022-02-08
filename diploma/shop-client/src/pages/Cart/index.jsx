import React from "react";
import TopMenu from "../../components/TopMenu";
import BreadCrumbs from "../../components/BreadCrumbs";
import ShopCart from "../../components/ShopCart";
import Footer from "../../components/Footer";

function Cart() {
    return (
        <div>
            <TopMenu />
            <BreadCrumbs />
            <ShopCart />

            <Footer />
        </div>
    );
}

export default Cart;

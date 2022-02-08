import React from "react";
import TopMenu from "../../components/TopMenu";
import BreadCrumbs from "../../components/BreadCrumbs";
import ProductsItemEditForm from "../../components/ProductsItemEditForm";
import Footer from "../../components/Footer";

function AdminItem() {
    return (
        <div>
            <TopMenu />
            <BreadCrumbs />
            <ProductsItemEditForm />
            <Footer />
        </div>
    );
}

export default AdminItem;
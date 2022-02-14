import React from "react";
import TopMenu from "../../components/TopMenu";
import BreadCrumbs from "../../components/BreadCrumbs";
import AdminProductList from "../../components/AdminProductList";
import Footer from "../../components/Footer";

function AdminList() {
    return (
        <div>

            <BreadCrumbs />
            <AdminProductList />

        </div>
    );
}

export default AdminList;

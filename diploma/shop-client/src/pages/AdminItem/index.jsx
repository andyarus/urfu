import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import TopMenu from "../../components/TopMenu";
import BreadCrumbs from "../../components/BreadCrumbs";
import ProductsItemEditForm from "../../components/ProductsItemEditForm";
import ProductsItemAddForm from "../../components/ProductsItemAddForm";
import Footer from "../../components/Footer";

function AdminItem({ type }) {
    const products = useSelector(({ products }) => {
        return products.items.sort((a, b) => {
            return a.id - b.id;
        });
    });
    const { id } = useParams();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    const currentProduct = products.filter((item) => item.id === +id)[0];
    return (
        <div>
            <BreadCrumbs />
            {type === "edit" ? (
                <ProductsItemEditForm item={currentProduct} />
            ) : (
                <ProductsItemAddForm item={currentProduct} />
            )}
        </div>
    );
}

export default AdminItem;

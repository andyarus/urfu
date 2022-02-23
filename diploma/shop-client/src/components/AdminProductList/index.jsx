import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import Pagination from "../Pagination";
import AdminProductListItem from "./AdminProductListItem";
import "./AdminProductList.scss";

function AdminProductList() {
    const onAdd = () => {
        
    };

    const products = useSelector(({ products }) => {
        return products.items;
    });
    return (
        <>
            <div className="admin-list">
                <div className="admin-list__menu">
                    <div className="admin-list__title">Товары</div>
                    <Link to="/AdminListItem/newItem" className="admin-list__add-item">Добавить товар</Link>
                </div>
                {products.map((item) => (
                    <AdminProductListItem key={item.id} item={item} />
                ))}
                
            </div>
            <Pagination />
        </>
    );
}

export default AdminProductList;

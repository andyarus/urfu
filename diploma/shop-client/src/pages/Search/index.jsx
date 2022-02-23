import React from "react";
import cn from "classnames";
import { useSelector } from "react-redux";

import Pagination from "../../components/Pagination";
import BreadCrumbs from "../../components/BreadCrumbs";
import ProductsListItem from "../../components/ProductsList/ProductsListItem";
import Footer from "../../components/Footer";

import "./Search.scss";

function Search() {
    const { products, search } = useSelector(({ products }) => {
        const tmpProducts = products.items.filter((item) => {
            let suitable = false;
            if (
                item.name.toLocaleLowerCase().includes(products.search.toLocaleLowerCase()) ||
                item.description.toLocaleLowerCase().includes(products.search.toLocaleLowerCase())
            ) {
                suitable = true;
            }
            return suitable;
        });
        return { products: tmpProducts, search: products.search };
    });

    return (
        <div>
            <BreadCrumbs />
            <div className="search-result">
                <div className="search-result__title">
                    По запросу «{search}» найдено {products.length} товаров
                </div>
                <div className={cn("search-result__items", { "search-result__items_space-btw": products.length > 2 })}>
                    {products.map((item) => {
                        return <ProductsListItem item={item} key={item.id} />;
                    })}
                </div>
                <Pagination />
            </div>
        </div>
    );
}

export default Search;

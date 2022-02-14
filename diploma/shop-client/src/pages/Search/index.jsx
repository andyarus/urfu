import React from "react";
import { useSelector } from "react-redux";

import TopMenu from "../../components/TopMenu";
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

    

    console.log("products!!", products);
    return (
        <div>
            <BreadCrumbs />
            <div className="search-result">
                <div className="search-result__title">По запросу «{search}» найдено {products.length} товаров</div>
                <div className="search-result__items">
                    {products.map(item => {
                        return <ProductsListItem item={item} key={item.id}/>

                    })}
                    
                </div>
                <div className="search-result__pagination pagination">
                    <div className="pagination_item">
                        <svg width="11" height="18" viewBox="0 0 11 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M0.367188 9.66406L7.94531 17.2422C8.1276 17.4245 8.34896 17.5156 8.60938 17.5156C8.86979 17.5156 9.09115 17.4245 9.27344 17.2422L10.1328 16.3828C10.3151 16.2005 10.4193 15.9792 10.4453 15.7188C10.4453 15.4583 10.3542 15.237 10.1719 15.0547L4.11719 9L10.1719 2.94531C10.3542 2.76302 10.4453 2.54167 10.4453 2.28125C10.4193 2.02083 10.3151 1.79948 10.1328 1.61719L9.27344 0.757812C9.09115 0.575521 8.86979 0.484375 8.60938 0.484375C8.34896 0.484375 8.1276 0.575521 7.94531 0.757812L0.367188 8.33594C0.158854 8.51823 0.0546875 8.73958 0.0546875 9C0.0546875 9.26042 0.158854 9.48177 0.367188 9.66406Z"
                                fill="#5D43E1"
                            />
                        </svg>
                    </div>
                    <div className="pagination_item">1</div>
                    <div className="pagination_item pagination_active">2</div>
                    <div className="pagination_item">3</div>
                    <div className="pagination_item">4</div>
                    <div className="pagination_item">5</div>
                    <div className="pagination_item">
                        <svg width="11" height="18" viewBox="0 0 11 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M10.6328 9.66406L3.05469 17.2422C2.8724 17.4245 2.65104 17.5156 2.39062 17.5156C2.13021 17.5156 1.90885 17.4245 1.72656 17.2422L0.867188 16.3828C0.684896 16.2005 0.580729 15.9792 0.554688 15.7188C0.554688 15.4583 0.645833 15.237 0.828125 15.0547L6.88281 9L0.828125 2.94531C0.645833 2.76302 0.554688 2.54167 0.554688 2.28125C0.580729 2.02083 0.684896 1.79948 0.867188 1.61719L1.72656 0.757812C1.90885 0.575521 2.13021 0.484375 2.39062 0.484375C2.65104 0.484375 2.8724 0.575521 3.05469 0.757812L10.6328 8.33594C10.8411 8.51823 10.9453 8.73958 10.9453 9C10.9453 9.26042 10.8411 9.48177 10.6328 9.66406Z"
                                fill="#5D43E1"
                            />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Search;

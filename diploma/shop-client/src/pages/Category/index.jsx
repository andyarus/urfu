import React, { useState } from "react";
import { useSelector } from "react-redux";
import Pagination from "../../components/Pagination";

import TopMenu from "../../components/TopMenu";
import ProductsListItem from "../../components/ProductsList/ProductsListItem";
import FullFilterSettings from "../../components/FullFilterSettings";
import BreadCrumbs from "../../components/BreadCrumbs";
import FilterViewInfo from "../../components/FilterViewInfo";
import ViewSettings from "../../components/ViewSettings";

import Footer from "../../components/Footer";
import { getSizeFilterValues, getBrandFilterValues, isFiltersPassed } from "../../api/filter";

import "react-input-range/lib/css/index.css";
import "./Category.scss";

function Category() {
    const [currentFilter, setCurrentFilter] = useState([]);
    const products = useSelector(({ products }) => {
        return products.items;
    });
    const filteredProduts = products.filter((item) => {
        return isFiltersPassed(item, currentFilter);
    });
    const [priceFilter, setPriceFilter] = useState({
        min: 0,
        max: 30000,
    });
    const availibleSizes = getSizeFilterValues(products);
    const availibleBrands = getBrandFilterValues(products);
    const [sizeFilter, setSizeFilter] = useState({});
    const [sexFilter, setSexFilter] = useState([]);
    const [brandFilter, setBrandFilter] = useState([]);
    const [destinationFilter, setDestinationFilter] = useState([]);
    const [colorFilter, setColorFilter] = useState([]);

    const onSetFilter = () => {
        setCurrentFilter([
            {
                title: "Цена",
                filter: priceFilter,
            },
            {
                title: "Размер",
                filter: sizeFilter,
            },

            {
                title: "Бренд",
                filter: brandFilter,
            },
        ]);
    };
    const clearFilter = () => {
        setCurrentFilter([]);
    };
    console.log("currentFilter", currentFilter);
    return (
        <div>
            <BreadCrumbs />

            <div className="categories">
                <FullFilterSettings
                    priceInfo={{ priceFilter, setPriceFilter }}
                    sizeInfo={{ sizeFilter, setSizeFilter, availibleSizes }}
                    brandInfo={{ availibleBrands, setBrandFilter, brandFilter }}
                    onSetFilter={onSetFilter}
                    clearFilter={clearFilter}
                />
                <div className="categories__categories-content categories-content">
                    <div className="categories-content__title">БЕГОВЫЕ КРОССОВКИ</div>
                    <div className="categories-content__settings">
                        <FilterViewInfo clearFilter={clearFilter} currentFilter={currentFilter} />
                        <div className="categories-content__view-settings view-settings">
                            <div className="view-settings__item view-settings__item_sort">
                                <div className="view-settings__item_title">Сортировать по</div>
                                <div className="view-settings__item_choice">Цене</div>
                            </div>
                            <div className="view-settings__item">
                                <div className="view-settings__item_title">Показать по</div>
                                <div className="view-settings__item_choice">20</div>
                            </div>
                        </div>
                    </div>
                    <div className="categories-content__products">
                        {filteredProduts.map((item) => {
                            return <ProductsListItem item={item} key={item.id} />;
                        })}
                    </div>
                    <Pagination />
                </div>
            </div>
        </div>
    );
}

export default Category;

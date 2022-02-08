import React from "react";
import TopMenu from "../../components/TopMenu";
import FullFilterSettings from "../../components/FullFilterSettings";
import BreadCrumbs from "../../components/BreadCrumbs";
import FilterViewInfo from "../../components/FilterViewInfo";
import ViewSettings from "../../components/ViewSettings";
import ProductsList from "../../components/ProductsList";
import Footer from "../../components/Footer";

function Categories() {
   
    return (
        <div>
            <TopMenu />
            <BreadCrumbs />
            <div>
                <FullFilterSettings />
                <div>
                    <FilterViewInfo />
                    <ViewSettings />
                    <ProductsList title={"БЕГОВЫЕ КРОССОВКИ"} />
                </div>
            </div>

            <Footer />
        </div>
    );
}

export default Categories;

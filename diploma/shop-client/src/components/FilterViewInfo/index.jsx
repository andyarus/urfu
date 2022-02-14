import React from "react";
import FilterViewInfoItem from "./FilterViewInfoItem";

function FilterViewInfo({ currentFilter, clearFilter }) {
    return (
        <div className="categories-content__filter-view-info filter-view-info">
            {currentFilter.length !== 0 && (
                <>
                    <div className="filter-view-info__name">Ваш выбор</div>
                    {currentFilter.map((item, index) => {
                        if (Object.keys(item.filter).length !== 0) {
                            return <FilterViewInfoItem key={index} title={item.title} filter={item.filter} />;
                        }
                    })}

                    <div className="filter-view-info__reset" onClick={clearFilter}>Сбросить фильтр</div>
                </>
            )}
        </div>
    );
}

export default FilterViewInfo;

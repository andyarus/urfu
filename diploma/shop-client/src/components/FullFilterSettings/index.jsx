import React from "react";
import InputRange from "react-input-range";

import Filter from "../Filter";
import Button from "../Button";

function FullFilterSettings({ priceInfo, sizeInfo, brandInfo, onSetFilter, clearFilter }) {
    const onSubmit = () => {
        
    };
    const onReset = () => {
        
    };
    return (
        <div className="categories__full-filter-settings full-filter-settings">
            <div className="full-filter-settings__title">Фильтр</div>
            <div className="full-filter-settings__item">
                <div className="full-filter-settings__item-title full-filter-settings__item-title_price">Цена</div>
                <div className="full-filter-settings__item-filter full-filter-settings__item-filter_range">
                    <InputRange
                        maxValue={30000}
                        minValue={0}
                        formatLabel={(value) => `${value}`}
                        value={priceInfo.priceFilter}
                        onChange={(value) => {
                            priceInfo.setPriceFilter(value);
                        }}
                        onChangeComplete={(value) => console.log(value)}
                    />
                </div>
            </div>
            <div className="full-filter-settings__item">
                <div className="full-filter-settings__item-title">Размер</div>
                <div className="full-filter-settings__item-filter full-filter-settings__item-filter_checkbox">
                    {Object.keys(sizeInfo.availibleSizes).map((key, index) => (
                        <label key={index}>
                            <input
                                type="checkbox"
                                onClick={() => {
                                    sizeInfo.setSizeFilter({
                                        ...sizeInfo.sizeFilter,
                                        [key]: !sizeInfo.sizeFilter[key],
                                    });
                                }}
                            />
                            {key} ({sizeInfo.availibleSizes[key]})
                        </label>
                    ))}
                </div>
            </div>
            <div className="full-filter-settings__item">
                <div className="full-filter-settings__item-title">Пол</div>
                <div className="full-filter-settings__item-filter full-filter-settings__item-filter_checkbox">
                    <label>
                        <input type="checkbox" name="" id="" />
                        Мужские
                    </label>
                    <label>
                        <input type="checkbox" name="" id="" />
                        Женские
                    </label>
                </div>
            </div>
            <div className="full-filter-settings__item">
                <div className="full-filter-settings__item-title">Бренд</div>
                <div className="full-filter-settings__item-filter full-filter-settings__item-filter_checkbox">
                    {Object.keys(brandInfo.availibleBrands).map((key, index) => (
                        <label key={index}>
                            <input
                                type="checkbox"
                                onClick={() => {
                                    brandInfo.setBrandFilter({
                                        ...brandInfo.sizeFilter,
                                        [key]: true,
                                    });
                                }}
                            />
                            {key} ({brandInfo.availibleBrands[key]})
                        </label>
                    ))}
                </div>
            </div>
            <div className="full-filter-settings__item">
                <div className="full-filter-settings__item-title">Назначение</div>
                <div className="full-filter-settings__item-filter full-filter-settings__item-filter_checkbox">
                    <label>
                        <input type="checkbox" name="" id="" />
                        Модные (1)
                    </label>
                    <label>
                        <input type="checkbox" name="" id="" />
                        Для тренировки (1)
                    </label>
                    <label>
                        <input type="checkbox" name="" id="" />
                        Беговые (1)
                    </label>
                    <label>
                        <input type="checkbox" name="" id="" />
                        На каждый день (1)
                    </label>
                    <label>
                        <input type="checkbox" name="" id="" />
                        Для прогулок (1)
                    </label>
                </div>
            </div>
            <div className="full-filter-settings__item">
                <div className="full-filter-settings__item-title">Цвет</div>
                <div className="full-filter-settings__item-filter full-filter-settings__item-filter_checkbox">
                    <label>
                        <input type="checkbox" name="" id="" />
                        Белый (1)
                    </label>
                    <label>
                        <input type="checkbox" name="" id="" />
                        Черный (2)
                    </label>
                    <label>
                        <input type="checkbox" name="" id="" />
                        Синий (2)
                    </label>
                    <label>
                        <input type="checkbox" name="" id="" />
                        Розовый (1)
                    </label>
                    <label>
                        <input type="checkbox" name="" id="" />
                        Лайм (2)
                    </label>
                </div>
            </div>
            <div className="full-filter-settings__submit" onClick={onSetFilter}>
                Применить
            </div>
            <div className="full-filter-settings__reset" onClick={clearFilter}>
                Сбросить фильтр
            </div>
        </div>
    );
}

export default FullFilterSettings;

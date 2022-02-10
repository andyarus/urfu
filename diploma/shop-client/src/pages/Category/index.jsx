import React from "react";
import TopMenu from "../../components/TopMenu";
import ProductsListItem from "../../components/ProductsList/ProductsListItem";
import FullFilterSettings from "../../components/FullFilterSettings";
import BreadCrumbs from "../../components/BreadCrumbs";
import FilterViewInfo from "../../components/FilterViewInfo";
import ViewSettings from "../../components/ViewSettings";
import ProductsList from "../../components/ProductsList";
import Footer from "../../components/Footer";

import './Category.scss'

function Category() {
    return (
        <div>
            <TopMenu />
            <BreadCrumbs />
            <div className="categories">
                <div className="categories__full-filter-settings full-filter-settings">
                    <div className="full-filter-settings__title">Фильтр</div>
                    <div className="full-filter-settings__item">
                        <div className="full-filter-settings__item-title">Цена</div>
                        <div className="full-filter-settings__item-filter full-filter-settings__item-filter_range">
                            <input type="range" name="" id="" />
                        </div>
                    </div>
                    <div className="full-filter-settings__item">
                        <div className="full-filter-settings__item-title">Размер</div>
                        <div className="full-filter-settings__item-filter full-filter-settings__item-filter_checkbox">
                            <label>
                                <input type="checkbox" name="" id="" />
                                2.5 (2)
                            </label>
                            <label>
                                <input type="checkbox" name="" id="" />
                                3.5 (4)
                            </label>
                            <label>
                                <input type="checkbox" name="" id="" />5 (15)
                            </label>
                            <label>
                                <input type="checkbox" name="" id="" />
                                5.5 (23)
                            </label>
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
                            <label>
                                <input type="checkbox" name="" id="" />
                                Addidas (4)
                            </label>
                            <label>
                                <input type="checkbox" name="" id="" />
                                Asics (4)
                            </label>
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
                    <div className="full-filter-settings__submit">Применить</div>
                    <div className="full-filter-settings__reset">Сбросить фильтр</div>
                </div>
                <div className="categories__categories-content categories-content">
                    <div className="categories-content__title">БЕГОВЫЕ КРОССОВКИ</div>
                    <div className="categories-content__settings">
                        <div className="categories-content__filter-view-info filter-view-info">
                            <div className="filter-view-info__name">Ваш выбор</div>
                            <div className="filter-view-info__item">
                                <div className="filter-view-info__item_title">Размер:</div>
                                <div className="filter-view-info__item_choices">2.5, 4.5</div>
                                <div className="filter-view-info__item_cansel">
                                    <svg
                                        width="14"
                                        height="15"
                                        viewBox="0 0 14 15"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M7 0.46875C5.77865 0.46875 4.64844 0.778646 3.60938 1.39844C2.57031 2 1.74089 2.82031 1.12109 3.85938C0.519531 4.89844 0.21875 6.02865 0.21875 7.25C0.21875 8.47135 0.519531 9.60156 1.12109 10.6406C1.74089 11.6797 2.57031 12.5 3.60938 13.1016C4.64844 13.7214 5.77865 14.0312 7 14.0312C8.22135 14.0312 9.35156 13.7214 10.3906 13.1016C11.4297 12.5 12.25 11.6797 12.8516 10.6406C13.4714 9.60156 13.7812 8.47135 13.7812 7.25C13.7812 6.02865 13.4714 4.89844 12.8516 3.85938C12.25 2.82031 11.4297 2 10.3906 1.39844C9.35156 0.778646 8.22135 0.46875 7 0.46875ZM10.3359 9.02734C10.3906 9.10026 10.418 9.18229 10.418 9.27344C10.418 9.36458 10.3906 9.4375 10.3359 9.49219L9.24219 10.5859C9.16927 10.6406 9.08724 10.668 8.99609 10.668C8.92318 10.668 8.85026 10.6406 8.77734 10.5859L7 8.78125L5.22266 10.5859C5.14974 10.6406 5.06771 10.668 4.97656 10.668C4.88542 10.668 4.8125 10.6406 4.75781 10.5859L3.66406 9.49219C3.60938 9.41927 3.58203 9.34635 3.58203 9.27344C3.58203 9.18229 3.60938 9.10026 3.66406 9.02734L5.46875 7.25L3.66406 5.47266C3.60938 5.39974 3.58203 5.31771 3.58203 5.22656C3.58203 5.13542 3.60938 5.0625 3.66406 5.00781L4.75781 3.91406C4.83073 3.85938 4.90365 3.83203 4.97656 3.83203C5.06771 3.83203 5.14974 3.85938 5.22266 3.91406L7 5.71875L8.77734 3.91406C8.85026 3.85938 8.93229 3.83203 9.02344 3.83203C9.11458 3.83203 9.1875 3.85938 9.24219 3.91406L10.3359 5.00781C10.3906 5.08073 10.418 5.16276 10.418 5.25391C10.418 5.32682 10.3906 5.39974 10.3359 5.47266L8.53125 7.25L10.3359 9.02734Z"
                                            fill="#F3F1FA"
                                        />
                                    </svg>
                                </div>
                            </div>
                            <div className="filter-view-info__item">
                                <div className="filter-view-info__item_title">Цвет:</div>
                                <div className="filter-view-info__item_choices">Желтый</div>
                                <div className="filter-view-info__item_cansel">
                                    <svg
                                        width="14"
                                        height="15"
                                        viewBox="0 0 14 15"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M7 0.46875C5.77865 0.46875 4.64844 0.778646 3.60938 1.39844C2.57031 2 1.74089 2.82031 1.12109 3.85938C0.519531 4.89844 0.21875 6.02865 0.21875 7.25C0.21875 8.47135 0.519531 9.60156 1.12109 10.6406C1.74089 11.6797 2.57031 12.5 3.60938 13.1016C4.64844 13.7214 5.77865 14.0312 7 14.0312C8.22135 14.0312 9.35156 13.7214 10.3906 13.1016C11.4297 12.5 12.25 11.6797 12.8516 10.6406C13.4714 9.60156 13.7812 8.47135 13.7812 7.25C13.7812 6.02865 13.4714 4.89844 12.8516 3.85938C12.25 2.82031 11.4297 2 10.3906 1.39844C9.35156 0.778646 8.22135 0.46875 7 0.46875ZM10.3359 9.02734C10.3906 9.10026 10.418 9.18229 10.418 9.27344C10.418 9.36458 10.3906 9.4375 10.3359 9.49219L9.24219 10.5859C9.16927 10.6406 9.08724 10.668 8.99609 10.668C8.92318 10.668 8.85026 10.6406 8.77734 10.5859L7 8.78125L5.22266 10.5859C5.14974 10.6406 5.06771 10.668 4.97656 10.668C4.88542 10.668 4.8125 10.6406 4.75781 10.5859L3.66406 9.49219C3.60938 9.41927 3.58203 9.34635 3.58203 9.27344C3.58203 9.18229 3.60938 9.10026 3.66406 9.02734L5.46875 7.25L3.66406 5.47266C3.60938 5.39974 3.58203 5.31771 3.58203 5.22656C3.58203 5.13542 3.60938 5.0625 3.66406 5.00781L4.75781 3.91406C4.83073 3.85938 4.90365 3.83203 4.97656 3.83203C5.06771 3.83203 5.14974 3.85938 5.22266 3.91406L7 5.71875L8.77734 3.91406C8.85026 3.85938 8.93229 3.83203 9.02344 3.83203C9.11458 3.83203 9.1875 3.85938 9.24219 3.91406L10.3359 5.00781C10.3906 5.08073 10.418 5.16276 10.418 5.25391C10.418 5.32682 10.3906 5.39974 10.3359 5.47266L8.53125 7.25L10.3359 9.02734Z"
                                            fill="#F3F1FA"
                                        />
                                    </svg>
                                </div>
                            </div>
                            <div className="filter-view-info__reset">Сбросить фильтр</div>
                        </div>
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
                        <ProductsListItem/>
                        <ProductsListItem/>
                        <ProductsListItem/>
                        <ProductsListItem/>
                        <ProductsListItem/>
                        <ProductsListItem/>
                        <ProductsListItem/>
                        <ProductsListItem/>
                        <ProductsListItem/>
                        <ProductsListItem/>
                        <ProductsListItem/>
                        <ProductsListItem/>
                    </div>
                    <div className="categories-content__pagination">
                        <div className="categories-content__pagination_item">
                            <svg
                                width="11"
                                height="18"
                                viewBox="0 0 11 18"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M0.367188 9.66406L7.94531 17.2422C8.1276 17.4245 8.34896 17.5156 8.60938 17.5156C8.86979 17.5156 9.09115 17.4245 9.27344 17.2422L10.1328 16.3828C10.3151 16.2005 10.4193 15.9792 10.4453 15.7188C10.4453 15.4583 10.3542 15.237 10.1719 15.0547L4.11719 9L10.1719 2.94531C10.3542 2.76302 10.4453 2.54167 10.4453 2.28125C10.4193 2.02083 10.3151 1.79948 10.1328 1.61719L9.27344 0.757812C9.09115 0.575521 8.86979 0.484375 8.60938 0.484375C8.34896 0.484375 8.1276 0.575521 7.94531 0.757812L0.367188 8.33594C0.158854 8.51823 0.0546875 8.73958 0.0546875 9C0.0546875 9.26042 0.158854 9.48177 0.367188 9.66406Z"
                                    fill="#5D43E1"
                                />
                            </svg>
                        </div>
                        <div className="categories-content__pagination_item">1</div>
                        <div className="categories-content__pagination_item categories-content__pagination_active">2</div>
                        <div className="categories-content__pagination_item">3</div>
                        <div className="categories-content__pagination_item">4</div>
                        <div className="categories-content__pagination_item">5</div>
                        <div className="categories-content__pagination_item">
                            <svg
                                width="11"
                                height="18"
                                viewBox="0 0 11 18"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M10.6328 9.66406L3.05469 17.2422C2.8724 17.4245 2.65104 17.5156 2.39062 17.5156C2.13021 17.5156 1.90885 17.4245 1.72656 17.2422L0.867188 16.3828C0.684896 16.2005 0.580729 15.9792 0.554688 15.7188C0.554688 15.4583 0.645833 15.237 0.828125 15.0547L6.88281 9L0.828125 2.94531C0.645833 2.76302 0.554688 2.54167 0.554688 2.28125C0.580729 2.02083 0.684896 1.79948 0.867188 1.61719L1.72656 0.757812C1.90885 0.575521 2.13021 0.484375 2.39062 0.484375C2.65104 0.484375 2.8724 0.575521 3.05469 0.757812L10.6328 8.33594C10.8411 8.51823 10.9453 8.73958 10.9453 9C10.9453 9.26042 10.8411 9.48177 10.6328 9.66406Z"
                                    fill="#5D43E1"
                                />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}

export default Category;

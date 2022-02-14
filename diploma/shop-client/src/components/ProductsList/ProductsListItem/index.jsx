import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import cartActions from "../../../redux/actions/cart";

import Button from "../../Button";
import "./ProductsItem.scss";

function ProductsItem({ item }) {
    const dispatch = useDispatch();
    const addToCart = () => {
        dispatch(cartActions.setChangeItems({ count: 1, id: item.id }));
    };
    return (
        <div className="products-list__product-item product-item">
            <div className="product-item__container">
                <Link to={`/Product/${item.id}`} className="product-item__logo">
                    <img src={item.image_url} alt="" />
                </Link>
                <div className="product-item__discount-info">-{item.discount} %</div>
                <div className="product-item__name">{item.name}</div>
                <div className="product-item__sale-info">
                    <div className="product-item__price">
                        <div className="product-item__price_now">
                            {Math.round(item.price - (item.price * item.discount) / 100)} руб
                        </div>
                        <div className="product-item__price_without-discount">{item.price} ₽</div>
                    </div>
                    <div className="product-item__add-to-cart" onClick={addToCart}>
                        <svg width="24" height="20" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M21.125 11.7578L22.9609 3.63281C23.0391 3.34635 22.987 3.08594 22.8047 2.85156C22.6224 2.61719 22.375 2.5 22.0625 2.5H6.71094L6.35938 0.742188C6.30729 0.533854 6.1901 0.364583 6.00781 0.234375C5.85156 0.078125 5.66927 0 5.46094 0H1.4375C1.17708 0 0.955729 0.0911458 0.773438 0.273438C0.591146 0.455729 0.5 0.677083 0.5 0.9375V1.5625C0.5 1.82292 0.591146 2.04427 0.773438 2.22656C0.955729 2.40885 1.17708 2.5 1.4375 2.5H4.17188L6.90625 15.8984C6.56771 16.1068 6.29427 16.3802 6.08594 16.7188C5.90365 17.0573 5.8125 17.4219 5.8125 17.8125C5.8125 18.4115 6.02083 18.9193 6.4375 19.3359C6.88021 19.7786 7.40104 20 8 20C8.59896 20 9.10677 19.7786 9.52344 19.3359C9.96615 18.9193 10.1875 18.3984 10.1875 17.7734C10.1875 17.1745 9.96615 16.6667 9.52344 16.25H17.7266C17.2839 16.6667 17.0625 17.1745 17.0625 17.7734C17.0625 18.3984 17.2708 18.9193 17.6875 19.3359C18.1302 19.7786 18.651 20 19.25 20C19.849 20 20.3568 19.7786 20.7734 19.3359C21.2161 18.9193 21.4375 18.4115 21.4375 17.8125C21.4375 17.3958 21.3203 17.0182 21.0859 16.6797C20.8776 16.3151 20.5781 16.0417 20.1875 15.8594L20.4219 14.8828C20.474 14.5964 20.4089 14.3359 20.2266 14.1016C20.0443 13.8672 19.8099 13.75 19.5234 13.75H9.01562L8.78125 12.5H20.2266C20.4349 12.5 20.6172 12.4349 20.7734 12.3047C20.9557 12.1745 21.0729 11.9922 21.125 11.7578Z"
                                fill="white"
                            />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductsItem;

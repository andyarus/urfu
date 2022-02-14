import React from "react";
import { numberWithSpaces } from "../../../api/product";
import Button from "../../Button";

import cartActions from "../../../redux/actions/cart";

import { useDispatch } from "react-redux";

function ShopCartItem({ item, count }) {
    const dispatch = useDispatch();
    const onDelete = () => {
        dispatch(cartActions.setChangeItems({ count: -count, id: item.id }));
    };
    const changeCount = (number) => {
        dispatch(cartActions.setChangeItems({ count: number, id: item.id }));
    };

    const priceNow = Math.round(item.price - (item.price * item.discount) / 100);
    return (
        <div className="cart-info__cart-item cart-item">
            <div className="cart-item__logo">
                {/* <img src={preview1} alt="" /> */}
                <img src={item.image_url} alt="" />
            </div>
            <div className="cart-item__info">
                <div className="cart-item__info_title">{item.name}</div>
                <div className="cart-item__info_article">Артикул J1GC2003 17</div>
                <div className="cart-item__info_size">Размер - 10.5</div>
            </div>
            <div className="cart-item__price">
                <div className="cart-item__price_now">{numberWithSpaces(priceNow)}</div>
                <div className="cart-item__price_discount">
                    <div className="cart-item__price_without-discount">{numberWithSpaces(item.price)} ₽</div>
                    <div className="cart-item__price_discount-persent">- {item.discount}%</div>
                </div>
            </div>
            <div className="cart-item__count">
                <div
                    className="cart-item__count_toggler"
                    onClick={() => {
                        changeCount(1);
                    }}
                >
                    <svg width="21" height="22" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M18.75 0.5H2.25C1.625 0.5 1.09375 0.71875 0.65625 1.15625C0.21875 1.59375 0 2.125 0 2.75V19.25C0 19.875 0.21875 20.4062 0.65625 20.8438C1.09375 21.2812 1.625 21.5 2.25 21.5H18.75C19.375 21.5 19.9062 21.2812 20.3438 20.8438C20.7812 20.4062 21 19.875 21 19.25V2.75C21 2.125 20.7812 1.59375 20.3438 1.15625C19.9062 0.71875 19.375 0.5 18.75 0.5ZM17.25 12.3125C17.25 12.4688 17.1875 12.6094 17.0625 12.7344C16.9688 12.8281 16.8438 12.875 16.6875 12.875H12.375V17.1875C12.375 17.3438 12.3125 17.4844 12.1875 17.6094C12.0938 17.7031 11.9688 17.75 11.8125 17.75H9.1875C9.03125 17.75 8.89062 17.7031 8.76562 17.6094C8.67188 17.4844 8.625 17.3438 8.625 17.1875V12.875H4.3125C4.15625 12.875 4.01562 12.8281 3.89062 12.7344C3.79688 12.6094 3.75 12.4688 3.75 12.3125V9.6875C3.75 9.53125 3.79688 9.40625 3.89062 9.3125C4.01562 9.1875 4.15625 9.125 4.3125 9.125H8.625V4.8125C8.625 4.65625 8.67188 4.53125 8.76562 4.4375C8.89062 4.3125 9.03125 4.25 9.1875 4.25H11.8125C11.9688 4.25 12.0938 4.3125 12.1875 4.4375C12.3125 4.53125 12.375 4.65625 12.375 4.8125V9.125H16.6875C16.8438 9.125 16.9688 9.1875 17.0625 9.3125C17.1875 9.40625 17.25 9.53125 17.25 9.6875V12.3125Z"
                            fill="#5D43E1"
                        />
                    </svg>
                </div>
                <div className="cart-item__count_number">{count}</div>
                <div
                    className="cart-item__count_toggler"
                    onClick={() => {
                        changeCount(-1);
                    }}
                >
                    <svg width="21" height="22" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M18.75 0.5H2.25C1.625 0.5 1.09375 0.71875 0.65625 1.15625C0.21875 1.59375 0 2.125 0 2.75V19.25C0 19.875 0.21875 20.4062 0.65625 20.8438C1.09375 21.2812 1.625 21.5 2.25 21.5H18.75C19.375 21.5 19.9062 21.2812 20.3438 20.8438C20.7812 20.4062 21 19.875 21 19.25V2.75C21 2.125 20.7812 1.59375 20.3438 1.15625C19.9062 0.71875 19.375 0.5 18.75 0.5ZM4.3125 12.875C4.15625 12.875 4.01562 12.8281 3.89062 12.7344C3.79688 12.6094 3.75 12.4688 3.75 12.3125V9.6875C3.75 9.53125 3.79688 9.40625 3.89062 9.3125C4.01562 9.1875 4.15625 9.125 4.3125 9.125H16.6875C16.8438 9.125 16.9688 9.1875 17.0625 9.3125C17.1875 9.40625 17.25 9.53125 17.25 9.6875V12.3125C17.25 12.4688 17.1875 12.6094 17.0625 12.7344C16.9688 12.8281 16.8438 12.875 16.6875 12.875H4.3125Z"
                            fill="#5D43E1"
                        />
                    </svg>
                </div>
            </div>
            <div className="cart-item__full-price">
                <div className="cart-item__full-price_money">{priceNow * count} руб</div>
                <div className="cart-item__full-price_count">{count} шт.</div>
            </div>
            <div className="cart-item__delete ">
                <svg
                    width="24"
                    height="25"
                    viewBox="0 0 24 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    onClick={onDelete}
                >
                    <path
                        d="M12 0.875C9.90625 0.875 7.96875 1.40625 6.1875 2.46875C4.40625 3.5 2.98438 4.90625 1.92188 6.6875C0.890625 8.46875 0.375 10.4062 0.375 12.5C0.375 14.5938 0.890625 16.5312 1.92188 18.3125C2.98438 20.0938 4.40625 21.5 6.1875 22.5312C7.96875 23.5938 9.90625 24.125 12 24.125C14.0938 24.125 16.0312 23.5938 17.8125 22.5312C19.5938 21.5 21 20.0938 22.0312 18.3125C23.0938 16.5312 23.625 14.5938 23.625 12.5C23.625 10.4062 23.0938 8.46875 22.0312 6.6875C21 4.90625 19.5938 3.5 17.8125 2.46875C16.0312 1.40625 14.0938 0.875 12 0.875ZM17.7188 15.5469C17.8125 15.6719 17.8594 15.8125 17.8594 15.9688C17.8594 16.125 17.8125 16.25 17.7188 16.3438L15.8438 18.2188C15.7188 18.3125 15.5781 18.3594 15.4219 18.3594C15.2969 18.3594 15.1719 18.3125 15.0469 18.2188L12 15.125L8.95312 18.2188C8.82812 18.3125 8.6875 18.3594 8.53125 18.3594C8.375 18.3594 8.25 18.3125 8.15625 18.2188L6.28125 16.3438C6.1875 16.2188 6.14062 16.0938 6.14062 15.9688C6.14062 15.8125 6.1875 15.6719 6.28125 15.5469L9.375 12.5L6.28125 9.45312C6.1875 9.32812 6.14062 9.1875 6.14062 9.03125C6.14062 8.875 6.1875 8.75 6.28125 8.65625L8.15625 6.78125C8.28125 6.6875 8.40625 6.64062 8.53125 6.64062C8.6875 6.64062 8.82812 6.6875 8.95312 6.78125L12 9.875L15.0469 6.78125C15.1719 6.6875 15.3125 6.64062 15.4688 6.64062C15.625 6.64062 15.75 6.6875 15.8438 6.78125L17.7188 8.65625C17.8125 8.78125 17.8594 8.92188 17.8594 9.07812C17.8594 9.20312 17.8125 9.32812 17.7188 9.45312L14.625 12.5L17.7188 15.5469Z"
                        fill="#F3F1FA"
                    />
                </svg>
            </div>
        </div>
    );
}

export default ShopCartItem;

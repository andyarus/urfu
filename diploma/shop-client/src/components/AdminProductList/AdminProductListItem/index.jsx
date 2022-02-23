import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import productsActions from "../../../redux/actions/products";
import cartActions from "../../../redux/actions/cart";
import { numberWithSpaces } from "../../../api/product";

function AdminProductList({ item }) {
    const dispatch = useDispatch();
    const priceNow = Math.round(item.price - (item.price * item.discount) / 100);
    const onDelete = () => {
        dispatch(productsActions.deleteProduct(item.id));
        dispatch(cartActions.deleteItem(item.id));
    };
    return (
        <div className="admin-list__admin-list-item admin-list-item">
            <Link  to={`/AdminListItem/${item.id}`}  className="admin-list-item__without-delete">
                <div className="admin-list-item__logo">
                    <img src={item.image_url[0]} alt="" />
                </div>
                <div className="admin-list-item__info">
                    <div className="admin-list-item__info_title">{item.name}</div>
                    <div className="admin-list-item__info_article">Артикул {item.article}</div>
                    <div className="admin-list-item__info_size">Размер - 10.5</div>
                </div>
                <div className="admin-list-item__price">
                    <div className="admin-list-item__price_now">{numberWithSpaces(priceNow)} руб</div>
                    <div className="admin-list-item__price_discount">
                        <div className="admin-list-item__price_without-discount">{numberWithSpaces(item.price)} ₽</div>
                        <div className="admin-list-item__price_discount-persent">-{item.discount}%</div>
                    </div>
                </div>
            </Link>
            <div className="admin-list-item__delete" onClick={onDelete}>
                <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M12 0.875C9.90625 0.875 7.96875 1.40625 6.1875 2.46875C4.40625 3.5 2.98438 4.90625 1.92188 6.6875C0.890625 8.46875 0.375 10.4062 0.375 12.5C0.375 14.5938 0.890625 16.5312 1.92188 18.3125C2.98438 20.0938 4.40625 21.5 6.1875 22.5312C7.96875 23.5938 9.90625 24.125 12 24.125C14.0938 24.125 16.0312 23.5938 17.8125 22.5312C19.5938 21.5 21 20.0938 22.0312 18.3125C23.0938 16.5312 23.625 14.5938 23.625 12.5C23.625 10.4062 23.0938 8.46875 22.0312 6.6875C21 4.90625 19.5938 3.5 17.8125 2.46875C16.0312 1.40625 14.0938 0.875 12 0.875ZM17.7188 15.5469C17.8125 15.6719 17.8594 15.8125 17.8594 15.9688C17.8594 16.125 17.8125 16.25 17.7188 16.3438L15.8438 18.2188C15.7188 18.3125 15.5781 18.3594 15.4219 18.3594C15.2969 18.3594 15.1719 18.3125 15.0469 18.2188L12 15.125L8.95312 18.2188C8.82812 18.3125 8.6875 18.3594 8.53125 18.3594C8.375 18.3594 8.25 18.3125 8.15625 18.2188L6.28125 16.3438C6.1875 16.2188 6.14062 16.0938 6.14062 15.9688C6.14062 15.8125 6.1875 15.6719 6.28125 15.5469L9.375 12.5L6.28125 9.45312C6.1875 9.32812 6.14062 9.1875 6.14062 9.03125C6.14062 8.875 6.1875 8.75 6.28125 8.65625L8.15625 6.78125C8.28125 6.6875 8.40625 6.64062 8.53125 6.64062C8.6875 6.64062 8.82812 6.6875 8.95312 6.78125L12 9.875L15.0469 6.78125C15.1719 6.6875 15.3125 6.64062 15.4688 6.64062C15.625 6.64062 15.75 6.6875 15.8438 6.78125L17.7188 8.65625C17.8125 8.78125 17.8594 8.92188 17.8594 9.07812C17.8594 9.20312 17.8125 9.32812 17.7188 9.45312L14.625 12.5L17.7188 15.5469Z"
                        fill="#F3F1FA"
                    />
                </svg>
            </div>
        </div>
    );
}

export default AdminProductList;

import React, { useState } from "react";
import cn from "classnames";
import ImageUploading from "react-images-uploading";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import SizeItem from "../SizeItem";
import Button from "../Button";

import productsActions from "../../redux/actions/products";
import cartActions from "../../redux/actions/cart";

import { allSizes } from "../../api/product";

import preview1 from "../../assets/preview1.png";
import preview2 from "../../assets/preview2.png";
import preview3 from "../../assets/preview3.png";
import preview4 from "../../assets/preview4.png";

import "./ProductsItemAddForm.scss";

function ProductsItemAddForm() {
    const [images, setImages] = useState([]);
    const dispatch = useDispatch();
    const [productName, setproductName] = useState("");
    const [article, setArticle] = useState("");
    const [brand, setBrand] = useState("");
    const [description, setDescription] = useState("");
    const [discount, setDiscount] = useState(0);
    const [price, setPrice] = useState("");
    const [size, setSize] = useState([]);
    const maxNumber = 69;

    const onChange = (imageList, addUpdateIndex) => {
        // data for submit
        console.log(imageList, addUpdateIndex);
        setImages(imageList);
    };

    const setActiveSize = (number) => {
        const tmpSize = size.filter((item) => item !== number);
        if (tmpSize.length === size.length) {
            tmpSize.push(number);
        }
        setSize(tmpSize);
    };

    const onSave = () => {
        dispatch(
            productsActions.addProduct({
                article: article,
                brand: brand,
                size: size,
                name: productName,
                description: description,
                image_url: images.map(item => item.data_url),
                price: price,
                discount: discount,
            })
        );
    };
    return (
        <div className="admin-item">
            <div className="admin-item__menu">
                <div className="admin-item__title">Создание нового товара</div>
            </div>
            <div className="admin-item__admin-item-settings admin-item-settings">
                <div className="admin-item-settings__title">Основные настройки</div>
                <div className="admin-item-settings__input admin-item-settings__input_product-name input">
                    <div className="input__title">Наименование товара</div>
                    <input
                        type="text"
                        value={productName}
                        onChange={(e) => {
                            setproductName(e.target.value);
                        }}
                    />
                </div>
                <div className="admin-item-settings__input admin-item-settings__input_articul input">
                    <div className="input__title">Артикул</div>
                    <input
                        type="text"
                        value={article}
                        onChange={(e) => {
                            setArticle(e.target.value);
                        }}
                    />
                </div>
                <div className="admin-item-settings__input admin-item-settings__input_brand input">
                    <div className="input__title">Бренд</div>
                    <input
                        type="text"
                        value={brand}
                        onChange={(e) => {
                            setBrand(e.target.value);
                        }}
                    />
                </div>
                <div className="admin-item-settings__textarea admin-item-settings__textarea_comment textarea">
                    <div className="textarea__title">Описане</div>
                    <textarea
                        value={description}
                        onChange={(e) => {
                            setDescription(e.target.value);
                        }}
                    ></textarea>
                </div>

                <ImageUploading multiple value={images} onChange={onChange} maxNumber={maxNumber} dataURLKey="data_url">
                    {({
                        imageList,
                        onImageUpload,
                        onImageRemoveAll,
                        onImageUpdate,
                        onImageRemove,
                        isDragging,
                        dragProps,
                    }) => {
                        console.log("isDragging", isDragging);
                        return (
                            <div className="admin-item-settings__admin-item-photos admin-item-photos" {...dragProps}>
                                <div className="admin-item-photos__title">Фотографии</div>
                                <div className="admin-item-photos__list">
                                    {imageList.map((image, index) => {
                                        return (
                                            <div className="admin-item-photos__item" key={index}>
                                                <img src={image.data_url} alt="" />
                                            </div>
                                        );
                                    })}

                                    <div
                                        className="admin-item-photos__item admin-item-photos__item_add"
                                        onClick={onImageUpload}
                                    >
                                        <svg
                                            width="21"
                                            height="22"
                                            viewBox="0 0 21 22"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M18.75 0.5H2.25C1.625 0.5 1.09375 0.71875 0.65625 1.15625C0.21875 1.59375 0 2.125 0 2.75V19.25C0 19.875 0.21875 20.4062 0.65625 20.8438C1.09375 21.2812 1.625 21.5 2.25 21.5H18.75C19.375 21.5 19.9062 21.2812 20.3438 20.8438C20.7812 20.4062 21 19.875 21 19.25V2.75C21 2.125 20.7812 1.59375 20.3438 1.15625C19.9062 0.71875 19.375 0.5 18.75 0.5ZM17.25 12.3125C17.25 12.4688 17.1875 12.6094 17.0625 12.7344C16.9688 12.8281 16.8438 12.875 16.6875 12.875H12.375V17.1875C12.375 17.3438 12.3125 17.4844 12.1875 17.6094C12.0938 17.7031 11.9688 17.75 11.8125 17.75H9.1875C9.03125 17.75 8.89062 17.7031 8.76562 17.6094C8.67188 17.4844 8.625 17.3438 8.625 17.1875V12.875H4.3125C4.15625 12.875 4.01562 12.8281 3.89062 12.7344C3.79688 12.6094 3.75 12.4688 3.75 12.3125V9.6875C3.75 9.53125 3.79688 9.40625 3.89062 9.3125C4.01562 9.1875 4.15625 9.125 4.3125 9.125H8.625V4.8125C8.625 4.65625 8.67188 4.53125 8.76562 4.4375C8.89062 4.3125 9.03125 4.25 9.1875 4.25H11.8125C11.9688 4.25 12.0938 4.3125 12.1875 4.4375C12.3125 4.53125 12.375 4.65625 12.375 4.8125V9.125H16.6875C16.8438 9.125 16.9688 9.1875 17.0625 9.3125C17.1875 9.40625 17.25 9.53125 17.25 9.6875V12.3125Z"
                                                fill="#5D43E1"
                                            />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        );
                    }}
                </ImageUploading>

                {/* <div className="admin-item-settings__price-title">Стоимость</div>
                <div className="admin-item-settings__input admin-item-settings__input_now-price input">
                    <div className="input__title">Текущая цена</div>
                    <input type="text" value={productName}
                        onChange={(e) => {
                            setproductName(e.target.value);
                        }} />
                </div> */}
                <div className="admin-item-settings__input admin-item-settings__input_discount input input_small">
                    <div className="input__title">Скидка</div>
                    <input
                        type="text"
                        value={discount}
                        onChange={(e) => {
                            setDiscount(e.target.value);
                        }}
                    />
                </div>
                <div className="admin-item-settings__input admin-item-settings__input_without-discount input">
                    <div className="input__title">Старая цена</div>
                    <input
                        type="text"
                        value={price}
                        onChange={(e) => {
                            setPrice(e.target.value);
                        }}
                    />
                </div>
                <div className="admin-item-settings__size-title">Размеры</div>
                <div className="admin-item-settings__size-list">
                    {allSizes.map((item) => {
                        const tmpSize = size.filter((num) => item === num);
                        let activeSize = -1;
                        if (tmpSize.length == 1) {
                            activeSize = item;
                        }
                        return (
                            <SizeItem
                                key={item}
                                number={item}
                                activeSize={activeSize}
                                setActiveSize={setActiveSize}
                            ></SizeItem>
                        );
                    })}
                </div>
                <div className="admin-item-settings__save">
                    <div className="admin-item-settings__save_icon">
                        <svg width="24" height="18" viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M8.15625 17.5781L0.328125 9.79688C0.109375 9.57812 0 9.29688 0 8.95312C0 8.60938 0.109375 8.32812 0.328125 8.10938L2.0625 6.42188C2.28125 6.17188 2.54688 6.04688 2.85938 6.04688C3.20312 6.04688 3.5 6.17188 3.75 6.42188L9 11.6719L20.25 0.421875C20.5 0.171875 20.7812 0.046875 21.0938 0.046875C21.4375 0.046875 21.7188 0.171875 21.9375 0.421875L23.6719 2.10938C23.8906 2.32813 24 2.60938 24 2.95312C24 3.29688 23.8906 3.57812 23.6719 3.79688L9.84375 17.5781C9.625 17.8281 9.34375 17.9531 9 17.9531C8.65625 17.9531 8.375 17.8281 8.15625 17.5781Z"
                                fill="white"
                            />
                        </svg>
                    </div>
                    <Link to="/AdminList" className="admin-item-settings__save_title" onClick={onSave}>
                        Создать
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default ProductsItemAddForm;

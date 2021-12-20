import React, { useEffect, useState } from 'react';
import './Products.css';
import { getProducts } from '../../services/products';

export default function Products() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        let mounted = true;
        getProducts()
        .then(items => {
            if(mounted) {
                setProducts(items)
            }
        })
        return () => mounted = false;
    }, [])

    return (
        <div className="products-wrapper">
            <h1>Список товаров</h1>
            <ul>
            {products.map(item => <li key={item.name}>{item.name} по цене {item.price} руб</li>)}
            </ul>
        </div>
    )
}

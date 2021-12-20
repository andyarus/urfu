import React from 'react';
import './Authorized.css';
import useToken from '../Hooks/useToken';
import Categories from '../Categories/Categories'
import Products from '../Products/Products'

export default function Authorized() {
  const { removeToken } = useToken();

  return (
    <div className="authorized-wrapper">
      <button className="logoutButton" onClick={removeToken}>Выход</button>
      <Categories />
      <Products />
    </div>
  )
}
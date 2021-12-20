import React, { useEffect, useState } from 'react';
import { getCategories } from '../../services/categories';

export default function Categories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    let mounted = true;
    getCategories()
    .then(items => {
      if(mounted) {
        setCategories(items)
      }
    })
    return () => mounted = false;
  }, [])

  return (
    <div className="categories-wrapper">
      <h1>Список категорий</h1>
      <ul>
      {categories.map(item => <li key={item.name}>{item.name}</li>)}
      </ul>
    </div>
  )
}
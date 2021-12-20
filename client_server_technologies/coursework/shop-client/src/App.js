import React from 'react';
import './App.css';
import useToken from './components/Hooks/useToken';
import Auth from './components/Auth/Auth'
import Categories from './components/Categories/Categories'
import Products from './components/Products/Products'

function App() {
  const { token, setToken, removeToken } = useToken();

  if(!token) {
    return <Auth setToken={setToken} />
  }

  return (
    <div className="App">
      <button className="logoutButton" onClick={removeToken}>Выход</button>
      <Categories />
      <Products />
    </div>
  )
}

export default App;

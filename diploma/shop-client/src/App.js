import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Main from "./pages/Main";
import Layout from "./pages/Layout";
import Product from "./pages/Product";

import Category from "./pages/Category";
import Search from "./pages/Search";
import Order from "./pages/Order";
import Cart from "./pages/Cart";
import AdminItem from "./pages/AdminItem";
import AdminList from "./pages/AdminList";

function App() {
    const [searchText, setSearchText] = useState("");
    return (
        <BrowserRouter>
            <Layout searchInfo={{ searchText, setSearchText }}>
                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="search" element={<Search />} />
                    <Route path="cart" element={<Cart />} />
                    <Route path="order" element={<Order />} />
                    <Route path="category" element={<Category />} />
                    <Route path="/product/:id" element={<Product />} />
                    <Route path="/AdminList" element={<AdminList />} />
                    <Route path="/AdminListItem/:id" element={<AdminItem type={"edit"}/>} />
                    <Route path="/AdminListItem/newItem" element={<AdminItem type={"new"} />} />
                </Routes>
            </Layout>
        </BrowserRouter>
    );
}

export default App;

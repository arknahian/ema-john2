import React from 'react';
import "./Navbar.css"

const Navbar = () => {
    return (
        <nav>
            <a href="/shop">Shop</a>
            <a href="/review">Order Review</a>
            <a href="/inventory"> Manage Inventory</a>
        </nav>
    );
};

export default Navbar;
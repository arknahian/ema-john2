import React from 'react';
import Logo from  "../../images/logo.png";
import './Header.css'

const Header = () => {
    return (
        <header>
            <img src={Logo} alt="" />
        </header>
    );
};

export default Header;
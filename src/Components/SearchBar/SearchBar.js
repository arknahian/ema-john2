import React from 'react';
import './SearchBar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const SearchBar = () => {
    return (
        <div className="search-area">
            <input className="search-box" type="text" placeholder="type here to search"/>
            <h3><FontAwesomeIcon icon={faShoppingCart} /><span style={{color: 'orange'}}><b>13</b></span></h3>
        </div>
    );
};

export default SearchBar;
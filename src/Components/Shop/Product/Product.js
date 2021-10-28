import React from 'react';
import "./Product.css";
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

const Product = (props) => {
    const {name, img, seller, price, stock, key} = props.productInfo;
    
    return (
        <div className="product">
            <div className="product-img">
                <img src={img} alt="" />
            </div>
            <div className="product-description">
            <Link to={"/product/" + key}><h3
            className="product-title">{name}</h3>
            </Link>
            <p>by: {seller} </p>
            <h4>${price}</h4>
            <p>only {stock} left in stock - order soon</p>
            {
                props.showAddToCart && <Button onClick={() => props.addedProduct(props.productInfo)} 
                variant="contained">add to cart</Button>
            }
            </div>
        </div>
    );
};

export default Product;
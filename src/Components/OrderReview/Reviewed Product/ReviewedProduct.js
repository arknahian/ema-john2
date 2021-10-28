import React from 'react';
import Button from '@mui/material/Button';
import './ReviewedProduct.css'

const ReviewedProduct = (props) => {
    const {name, price, quantity, key} = props.productInfo;
    return (
        <div className="reviewedProduct">
            <h3>{name}</h3>
            <h4>Price: {price}</h4>
            <h4>Quantity : {quantity}</h4>
            <Button onClick={() => props.removeHandler(key)} variant="contained">Remove</Button>
        </div>
    );
};

export default ReviewedProduct;
import React from 'react';
import './Cart.css';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

const Cart = (props) => {
    const addedProduct = props.addedProduct
    const total = addedProduct.reduce((total, pd) => total + pd.price, 0);
    let shipping = 0;
    if (total > 0 && total < 40) {
        shipping = 3;
    }
    else if (total > 40 && total < 100) {
        shipping = 4;
    }
    else if(total > 100){
        shipping = 2;
    }
    else{
        shipping = 0;
    }
    const tax = total * 0.1;
    const grandTotal = total + shipping + tax;
    const totalBeforeTax = total + shipping;
    return (
        <div className="cart">
            <h3>Order Review</h3>
            <h3>Items ordered: {addedProduct.length}</h3>
            <p>  <small>Items:	${total.toFixed(2)} </small></p>
            <p><small>Shipping & Handling:	${shipping}</small></p>
            <p><small>Total before tax:	$ {totalBeforeTax.toFixed(2)}</small></p>
            <p><small>Estimated Tax: {tax.toFixed(2)}</small></p>
            <h4 style={{color: "#b12704"}}>Order Total:	{grandTotal.toFixed(2)} </h4>
            <Link to="/review"><Button variant="contained">Review Order</Button></Link>
        </div>
    );
};

export default Cart;
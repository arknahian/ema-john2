import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData';
import { getDatabaseCart, removeFromDatabaseCart } from '../../utilities/databaseManager';
import ReviewedProduct from "./Reviewed Product/ReviewedProduct";


const OrderReview = () => {
    const [cart, setCart] = useState([]);
    const removeHandler = (productKey) => {
        const updatedProduct = cart.filter(pd => pd.key !== productKey);
        setCart(updatedProduct)
        removeFromDatabaseCart(updatedProduct)
    }
    useEffect(() => {
        const savedCart = getDatabaseCart();
        const productKeys = Object.keys(savedCart);
        const cartProduct = productKeys.map(key  => {
            const product = fakeData.find(pd => pd.key === key);
            product.quantity = savedCart[key];
            return product;
        })
        setCart(cartProduct);
    }, [])
    return (
        <div>
            {
                cart.map(c => {
                    return <ReviewedProduct removeHandler={removeHandler} productInfo={c} key={c.key}></ReviewedProduct>
                })
            }
        </div>
    );
};

export default OrderReview;
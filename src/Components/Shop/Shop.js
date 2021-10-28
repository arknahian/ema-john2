import React, { useEffect, useState } from 'react';
import fakeData from "../../fakeData/index.js";
import Cart from '../Cart/Cart.js';
import Product from './Product/Product.js';
import './Shop.css';
import {addToDatabaseCart} from '../../utilities/databaseManager';

const Shop = () => {
    const [product, setProduct] = useState([])
    const [addedProduct, setAddedProduct] = useState([]);
    useEffect(() => {
        const first10 = fakeData.slice(0, 10)
        setProduct(first10);
    }, []);
    const handleAddedProduct = (clickedProduct) => {
        const newAddedProduct = [...addedProduct, clickedProduct]
        setAddedProduct(newAddedProduct);
        const sameProduct = newAddedProduct.filter(pd => pd.key === clickedProduct.key);
        const count = sameProduct.length;
        addToDatabaseCart(clickedProduct.key, count)
    }

    return (
        <main>
            <div className="product-container">
                {
                    product.map(pd => 
                    <Product showAddToCart={true}
                    productInfo={pd} key={pd.key} addedProduct={handleAddedProduct}>
                    </Product>)
                }
            </div>
            <div className="cart-container">
                <Cart addedProduct={addedProduct}></Cart>
            </div>
        </main>
    );
};

export default Shop;
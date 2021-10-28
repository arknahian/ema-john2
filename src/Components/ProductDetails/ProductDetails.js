import React from 'react';
import fakeData from "../../fakeData/index.js";
import { useParams } from 'react-router';
import Product from '../Shop/Product/Product.js';

const ProductDetails = () => {
    const {productKey} = useParams();
    const allProduct = fakeData;
    const singleProduct = allProduct.filter(pd => productKey === pd.key);
    console.log(singleProduct);
    return (
        <div>
            <h1>{productKey} details</h1>
            <Product showAddToCart={false} productInfo={singleProduct[0]}></Product>
        </div>
    );
};

export default ProductDetails;
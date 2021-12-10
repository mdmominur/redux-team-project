import React from 'react';
import './Product.css';
const Product = ({product}) => {
    const {name, price, thumbnail, key_features} = product;
    
    return (
        <div className="col-md-4 my-4">
            <div className='p-4 shadow'>
                <div>
                    <img className='img-fluid' src={thumbnail} alt="" />
                </div>

                <div>
                    <h4>{name}</h4>
                    <strong>{price}</strong>
                    <p>{key_features.slice(0, 200)}...</p>

                    <button className='btn btn-regular position-relative mx-2 px-5  fw-bold'>Add To Cart</button>
                </div>
            </div>
        </div>
    );
};

export default Product;
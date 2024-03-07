import React, {useContext, useEffect} from 'react';
import {useParams} from "react-router-dom";
import {CustomContext} from "../../utils/Context";

const Product = () => {
    const params = useParams()
    const {getOneProduct,product} = useContext(CustomContext)
    useEffect(() => {
        getOneProduct(params.id)
    },[params])
    return (
        <div>
            {product.title}
        </div>
    );
};

export default Product;
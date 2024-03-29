import React, {useContext, useEffect, useState} from 'react';
import { useParams } from "react-router-dom";
import { CustomContext } from "../../utils/Context";

const Product = () => {
    const params = useParams();
    const { getOneProduct, product,addCart} = useContext(CustomContext);
    const [size,setSize] = useState(1)
    const [color,setColor] = useState(3)
    useEffect(() => {
        getOneProduct(params.id);
    }, [params.id]);
    console.log(color,size)
    return (
        <section className="product">
            <div className="container">
                <div className="product__row">
                    <div className="product__left">
                        <img src={product?.images[0].img} alt="" className="product__left-img" />
                    </div>
                    <div className="product__right">
                        {product ? ( // Check if product is defined
                            <>
                                <div className="product__right-title">
                                    {product.title}
                                </div>
                                <div className="product__right-price">
                                    {product.price}
                                </div>
                                <div className="product__right-colors">
                                    {product.colors?.map((item) => ( // Added optional chaining
                                        <div  onClick={() => setColor(item.id)} key={item.id} style={{ background: `${item.color}`,width: color == item.id ? "30px" : "20px", height: color == item.id ? "30px" : "20px"}} className="product__right-color" />
                                    ))}
                                </div>
                                <div className="product__right-sizes">
                                    {
                                        product.sizes.map(item => (
                                            <p style={{fontSize: size == item.id ? "30px" : "20px"}} onClick={() => setSize(item.id)} key={item.id} className="product__right-size">
                                                {item.size}
                                            </p>
                                        ))
                                    }
                                </div>
                            </>
                        ) : (
                            <p>Loading...</p> // Display a loading message while product data is being fetched
                        )}
                        <div className="product__btns">
                            <button onClick={() => addCart({...product,colors:product.colors[color - 1],sizes:product.sizes[size -1],count:1})} className="product__btns-cup">
                                В КАРЗИНУ
                            </button>

                            <button className="product__btns-izb">
                                <span>
                                    <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.50061 1.14671C9.26233 -0.435007 11.9848 -0.382508 13.682 1.31771C15.3785 3.01868 15.437 5.72763 13.859 7.49459L7.49911 13.8635L1.14073 7.49459C-0.437237 5.72763 -0.377988 3.01418 1.31773 1.31771C3.01645 -0.380258 5.73365 -0.437257 7.50061 1.14671ZM12.62 2.37744C11.495 1.25096 9.68007 1.20521 8.50259 2.26269L7.50136 3.16118L6.49938 2.26344C5.31816 1.20446 3.50694 1.25096 2.37896 2.37894C1.26148 3.49642 1.20523 5.28514 2.23496 6.46711L7.49986 11.7403L12.7648 6.46786C13.7952 5.28514 13.739 3.49867 12.62 2.37744Z" fill="#E0BEA2"/>
</svg>

                                </span>ИЗБРОННЫЕ
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default Product;

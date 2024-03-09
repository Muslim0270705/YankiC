import React, {useContext, useEffect, useState} from 'react';
import img from "../../../images/Rectangle 7.png"
import {CustomContext} from "../../../utils/Context";
import {Link} from "react-router-dom";
const Products = () => {
    const {data,getProducts} = useContext(CustomContext)
    const [size,setSize] = useState("")
    useEffect(() => {
        getProducts()
    },[])
    const productFilter = (e) => {
        console.log(e.target.value)
    }
    return (
        <section className={"products"}>
            <div className={"products__selects"}>
                <select onChange={(e) => productFilter(e)} className={"products__select"} name="Size" id="">
                    <option value="38">
                        38
                    </option>
                    <option value="39">
                        39
                    </option>
                    <option value="40">
                        40
                    </option>
                    <option value="41">
                        41
                    </option>
                    <option value="42">
                        42
                    </option>
                </select>
                <select className={"products__select"} name="Цвет" id="">
                    <option value="red">
                        red
                    </option>
                    <option value="black">
                        black
                    </option>
                    <option value="white">
                        white
                    </option>
                </select>
                <select className={"products__select"} name="Цена" id="">
                    <option value="plus">
                        По возростанию
                    </option>
                    <option value="minus">
                        По убыванию
                    </option>
                </select>

            </div>
            <div className="products__row">
                {
                    data.map(item => (
                        <Link className="products__card" to={`/product/${item.id}`}>
                            <div>
                                <img className={"products__card-img"} src={item.images[0].img} alt=""/>
                                <h2 className={"products__card-title"}>
                                    {item.title}
                                </h2>
                                <p className={"products__card-price"}>
                                    {item.price}
                                </p>
                                <div className={"products__card-sizes"}>
                                    {
                                        item.sizes.map(item => (
                                            <p className={"products__card-size"}>
                                                {item.size}
                                            </p>
                                        ))
                                    }
                                </div>
                                <div className={"products__card-colors"}>
                                    {item.colors.map(item => (
                                        <div style={{background: `${item.color}`}} className={"products__card-color"}/>
                                    ))}
                                </div>
                            </div>
                        </Link>
                    ))
                }
            </div>
        </section>
    );
};

export default Products;
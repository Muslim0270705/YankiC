import React, {useContext, useEffect} from 'react';
import img from "../../../images/Rectangle 7.png"
import {CustomContext} from "../../../utils/Context";
const Products = () => {
    const {data,getProducts} = useContext(CustomContext)
    useEffect(() => {
        getProducts()
    },[])
    console.log(data)
    return (
        <section className={"products"}>
            <div className={"products__selects"}>
                <select className={"products__select"} name="Name" id="">
                    <option value="">
                        L
                    </option>
                    <option value="">
                        XL
                    </option>
                </select>
                <select className={"products__select"} name="Name" id="">
                    <option value="">
                        L
                    </option>
                    <option value="">
                        XL
                    </option>
                </select>
                <select className={"products__select"} name="Name" id="">
                    <option value="">
                        L
                    </option>
                    <option value="">
                        XL
                    </option>
                </select>
                <select className={"products__select"} name="Name" id="">
                    <option value="">
                        L
                    </option>
                    <option value="">
                        XL
                    </option>
                </select>
            </div>
            <div className="prodcuts__row">
                <div className="products__card">
                    <img className={"products__card-img"} src={img} alt=""/>
                    <h2 className={"products__card-title"}>
                        title
                    </h2>
                    <p className={"products__card-price"}>
                        125125
                    </p>
                    <div className={"products__card-sizes"}>
                        <p className={"products__card-size"}>
                            Xl
                        </p>
                        <p className={"products__card-size"}>
                            Xl
                        </p>
                        <p className={"products__card-size"}>
                            Xl
                        </p>
                        <p className={"products__card-size"}>
                            Xl
                        </p>
                    </div>
                    <div className={"products__card-colors"}>
                        <div style={{background:"black"}} className={"products__card-color"}/>
                        <div style={{background:"red"}} className={"products__card-color"}/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Products;
import React, {useContext, useEffect} from 'react';
import img from "../../../images/Rectangle 7.png"
import {CustomContext} from "../../../utils/Context";
const Products = () => {
    const {data,getProducts} = useContext(CustomContext)
    useEffect(() => {
        getProducts()
    },[])

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
            <div className="products__row">
                {
                    data.map(item => (
                        <div className="products__card">
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

                    ))
                }
            </div>
        </section>
    );
};

export default Products;
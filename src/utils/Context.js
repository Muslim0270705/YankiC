import React, {createContext, useEffect, useState} from "react"
import axios from "axios";
export const CustomContext = createContext()

export const Context = (props) => {
    const [data,setData] = useState([])
    const [product,setProduct] = useState({})
    const getProducts = () => {
        axios("http://localhost:4444/products")
            .then(({data}) => setData(data))
            .catch((err) => alert(err))
    }
    const getOneProduct = (id) => {
        axios(`http://localhost:4444/products/${id}`)
            .then(({data}) => setProduct(data))
            .catch((err) => alert(err))
    }
    const value = {
        data,
        getProducts,
        getOneProduct,
        product
    }

    return <CustomContext.Provider value={value}>
        {props.children}
    </CustomContext.Provider>
}
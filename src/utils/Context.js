import React, {createContext, useEffect, useState} from "react"
import axios from "axios";
export const CustomContext = createContext()

export const Context = (props) => {
    const [data,setData] = useState([])
    const getProducts = () => {
        axios("http://localhost:4444/products")
            .then(({data}) => setData(data))
            .catch((err) => alert(err))
    }
    const value = {
        data,
        getProducts,

    }

    return <CustomContext.Provider value={value}>
        {props.children}
    </CustomContext.Provider>
}
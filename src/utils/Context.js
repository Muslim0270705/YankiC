import React, {createContext, useEffect, useState} from "react"
import axios from "axios";
import login from "../pages/Auth/Login/Login";
export const CustomContext = createContext()

export const Context = (props) => {
    const [data,setData] = useState([])
    const [product,setProduct] = useState({})
    const [user,setUser] = useState({})
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
    const registerUser = (e,obj) => {
        e.preventDefault()

        if(obj.name.length > 2 && obj.password.length > 7){
            axios.post("https://storedb.onrender.com/register")
                .then((res) => console.log(res))
                .catch((err) => console.log(err))
        }
        else {
            alert("error")
        }

    }
    const value = {
        data,
        getProducts,
        getOneProduct,
        registerUser,
        product
    }

    return <CustomContext.Provider value={value}>
        {props.children}
    </CustomContext.Provider>
}
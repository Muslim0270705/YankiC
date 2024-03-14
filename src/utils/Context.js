import React, {createContext, useEffect, useState} from "react"
import axios from "axios";
import login from "../pages/Auth/Login/Login";
import {useNavigate} from "react-router-dom";
export const CustomContext = createContext()

export const Context = (props) => {
    const [data,setData] = useState([])
    const navigate = useNavigate()
    const [product,setProduct] = useState(null)
    const [user,setUser] = useState(JSON.parse(localStorage.getItem("user")))
    const [categories,setCategories] = useState([])
    const [categoryId,setCategoryId] = useState(null)
    const [cart,setCart] = useState([])
    const [cartPrice, setCartPrice] = useState(0)
    console.log(cartPrice)
    console.log(cart)
    const getProducts = (id) => {
        axios(`http://localhost:4444/products`)
            .then(({data}) => setData(data.filter(item => id ? item.category.id == id : item )))
            .catch((err) => alert(err))
    }
    useEffect(() => {
        setCartPrice(cart.length ? cart.reduce((acc, res) => acc + (res.price * res.count), 0) : 0);
    }, [cart]);
    useEffect(() => {
        getProducts(categoryId)
    }, [categoryId]);
    const getOneProduct = (id) => {
        axios(`http://localhost:4444/products/${id}`)
            .then(({data}) => setProduct(data))
            .catch((err) => alert(err))
    }

    const registerUser = (e,obj) => {
        e.preventDefault()
        if(obj.name.length > 2 && obj.password.length > 7){
            axios.post("https://storedb.onrender.com/register",obj)
                .then(({data}) => {
                    setUser(data.user)
                    localStorage.setItem("user",JSON.stringify(data.user))
                    navigate("/")
                })
                .catch((err) => console.log(err))
        }
        else {
            alert("error")
        }
    }
    const loginUser = (e,obj) => {
        e.preventDefault()
        if(obj.password.length > 7){
            axios.post("https://storedb.onrender.com/login",obj)
                .then(({data}) => {
                    setUser(data.user)
                    localStorage.setItem("user",JSON.stringify(data.user))
                    navigate("/")
                })
                .catch((err) => console.log(err))
        }
        else {
            alert("error")
        }
    }
    const logoutUser = () => {
        localStorage.removeItem("user")
    }
    useEffect(() => {
        setUser(JSON.parse(localStorage.getItem("user")))
    },[user])
    const getCategories = () => {
        axios("http://localhost:4444/category")
            .then(({data}) => setCategories(data))
            .catch((err) => alert(err))
    }
    const addCart = (item) => {
        setCart([...cart,item])
    }
     const value = {
        data,
        getProducts,
        getOneProduct,
        registerUser,
        product,
        user,
        logoutUser,
        loginUser,
        getCategories,
        setCategories,
        categories,
         setCategoryId,
         categoryId,
         cart,
         setCart,
         addCart,
         cartPrice
    }

    return <CustomContext.Provider value={value}>
        {props.children}
    </CustomContext.Provider>
}
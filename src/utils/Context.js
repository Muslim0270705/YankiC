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
    const [favorites , setFavorites] = useState([])
    const [quantity,setQuantity] = useState(6)
    const [search,setSearch] = useState("")
    const getProducts = (id) => {
        axios(`http://localhost:4444/products?_limit=${quantity}&${search ? `title=${search}` : ""}`)
            .then(({data}) => setData(data.filter(item => id ? item.category.id == id : item )))
            .catch((err) => alert(err))
    }
    const Search = (e) => {
        setSearch(e.target.value)
    }
    useEffect(() => {
        setCartPrice(cart.length ? cart.reduce((acc, res) => acc + (res.price * res.count), 0) : 0);
    }, [cart]);
    const addQuantity = () => {
        setQuantity(quantity + 3)
    }
    useEffect(() => {
        getProducts()
    }, [quantity,search]);
    const getOneProduct = (id) => {
        axios(`http://localhost:4444/products/${id}`)
            .then(({data}) => setProduct(data))
            .catch((err) => alert(err))
    }
    const addFavorites = (item) => {
        if(!favorites.find(el => item.id == el.id)){
            setFavorites([...favorites,item])
        }
    }
    const deleteFavorites = (id) => {
        setFavorites(favorites.filter(el => id !== el.id))
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
        if(cart.find((el) => el.id == item.id && item.colors.color == el.colors.color && item.sizes.size == el.sizes.size)){
            setCart(cart.map(el => item.id == el.id ? {...el,count:el.count + 1} : item))
        }
        else{
            setCart([...cart,item])
        }
    }
    const minusCount = (item) => {
        if(cart.find(el => el.id === item.id && el.colors.color === item.colors.color && item.sizes.size === el.sizes.size).count > 1 ){
            setCart(cart.map((el) => el.id === item.id && el.colors.color === item.colors.color && item.sizes.size === el.sizes.size ? {...el,count:el.count - 1} : el))
        }
        else{
            deleteItem(item)
        }
    }
    const deleteItem = (item) => {
        setCart(cart.filter(el => el.id != item.id || item.colors.color != el.colors.color || item.sizes.size != el.sizes.size))
    }
    const plusCount = (item) => {
        setCart(cart.map((el) => el.id === item.id && el.colors.color === item.colors.color && item.sizes.size === el.sizes.size ? {...el,count:el.count + 1} : el))
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
         cartPrice,
         deleteItem,
         plusCount,
         minusCount,
         addFavorites,
         favorites,
         deleteFavorites,
         addQuantity,
         Search
    }

    return <CustomContext.Provider value={value}>
        {props.children}
    </CustomContext.Provider>
}
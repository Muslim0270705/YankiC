import React, {useContext, useState} from 'react';
import {Link} from "react-router-dom";
import {CustomContext} from "../../../utils/Context";
import { v4 as uuidv4 } from 'uuid';
const Register = () => {
    const [obj,setObj] = useState( {
        id: uuidv4(),
        name:"",
        email:"",
        password:""
    })
    const {registerUser} = useContext(CustomContext)
    const changeUser = (e) => {
        setObj({...obj,[e.target.name]: e.target.value})
    }
    return (
        <div className="register">
        <form onSubmit={(e) => registerUser(e,obj)}  className="register__form">
                <h2 className="register__title">
                    Регистратция
                </h2>
            <div className="register__row">
                <input name={"name"} onChange={(e) => changeUser(e)} placeholder={"Ваше имя*"} className={"register__inout"} type="text"/>
                <input name={"email"} onChange={(e) => changeUser(e)} placeholder={"Ваш e-mail*"} className={"register__inout"} type="email"/>
                <input name={"password"} onChange={(e) => changeUser(e)} placeholder={"Ваш пароль*"} className={"register__inout"} type="password"/>
                <div className="login__texts">
                    <p className="login__text"></p>
                    <Link to={"/login"} className="login__text">Уже есть аккаунт!</Link>
                </div>
                <button className="register__btn" type={"submit"}>
                    Reg
                </button>
            </div>
        </form>
        </div>
    )
}


export default Register;
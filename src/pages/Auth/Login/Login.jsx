import React, {useContext, useState} from 'react';
import {Link} from "react-router-dom";
import {v4 as uuidv4} from "uuid";
import {CustomContext} from "../../../utils/Context";

const Login = () => {
    const [obj,setObj] = useState( {
        id: uuidv4(),
        name:"",
        email:"",
        password:""
    })
    const {loginUser} = useContext(CustomContext)
    const changeUser = (e) => {
        setObj({...obj,[e.target.name]: e.target.value})
    }
    return (
        <div className={"login"}>
            <form onSubmit={(e) => loginUser(e,obj)} action="" className="login__form">
                <h2 className="login__title">
                    Авторизация
                </h2>
                    <input  onChange={(e) => changeUser(e)} name={"email"} placeholder={"Ваш e-mail*"} type="email" className="login__input"/>
                    <input onChange={(e) => changeUser(e)} name={"password"} placeholder={"Ваш пароль*"} type="password" className="login__input"/>
                    <div className="login__texts">
                        <p className="login__text">Забыли пароль?</p>
                        <Link to={"/register"} className="login__text">Нет аккаунта?</Link>
                    </div>
                <button type={"submit"} className="login__btns">
                    Войти
                </button>

            </form>
        </div>
    );
};

export default Login;
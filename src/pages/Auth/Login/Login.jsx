import React from 'react';
import {Link} from "react-router-dom";

const Login = () => {
    return (
        <div className={"login"}>
            <form action="" className="login__form">
                <h2 className="login__title">
                    Авторизация
                </h2>
                    <input placeholder={"Ваш e-mail*"} type="text" className="login__input"/>
                    <input placeholder={"Ваш пароль*"} type="password" className="login__input"/>
                    <div className="login__texts">
                        <p className="login__text">Забыли пароль?</p>
                        <Link to={"/register"} className="login__text">Нет аккаунта?</Link>
                    </div>
                <button className="login__btns">
                    Войти
                </button>

            </form>
        </div>
    );
};

export default Login;
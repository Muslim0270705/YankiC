import React from 'react';
const Register = () => {
    return (
        <div className="register">
        <form  className= "register__form">
                <h2 className="register__title">
                    Регистратция
                </h2>
            <div className="register__row">
                <input  placeholder={"Ваше имя*"} className={"register__inout"} type="text"/>
                <input  name={"email"} placeholder={"Ваш e-mail*"} className={"register__inout"} type="email"/>
                <input  placeholder={"Ваш пароль*"} className={"register__inout"} type="password"/>
                <button className="register__btn" type={"submit"}>
                    ПРОДОЛЖИТЬ
                </button>
            </div>
        </form>
</div>

    )}



export default Register;
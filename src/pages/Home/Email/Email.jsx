import React from 'react';

const Email = () => {
    return (
        <section className={"email"}>
            <div className="container">
                <h2 className="email__text">
                    Узнайте  первым о новинках
                </h2>
                <input className={"email__email"} placeholder={"Ваш e-mail"} type="email"/>
                <button className={"email__btn"}>
                    ПОДПИСАТЬСЯ
                </button>
                <p className="email__desc">
                    Нажимая на кнопку «Подписаться», я соглашаюсь на обработку моих <br/> персональных данных и ознакомлен(а) с условиями конфиденциальности.
                </p>
            </div>
        </section>
    );
};

export default Email;
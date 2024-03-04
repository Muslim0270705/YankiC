import React from 'react';
import cart1 from "../../../images/Rectangle 11.png"
import cart2 from "../../../images/Rectangle 10.png"
import cart3 from "../../../images/Rectangle 9.png"
import cart4 from "../../../images/Rectangle 7.png"

const Catigores = () => {
    return (
        <section className={"catigores"}>
            <div className="container">
                <h2 className="catigores__title">
                    Категории
                </h2>
                <div className="catigores__row">
                    <div className="catigores__cart">
                        <img src={cart1} alt=""/>
                        <p className="catigores__cart-desc">
                            Куртки
                        </p>
                    </div>

                    <div className="catigores__cart">
                        <img src={cart2} alt=""/>
                        <p className="catigores__cart-desc">
                            Пальто
                        </p>
                    </div>

                    <div className="catigores__cart">
                        <img src={cart3} alt=""/>
                        <p className="catigores__cart-desc">
                            Шубы
                        </p>
                    </div>

                    <div className="catigores__cart">
                        <img src={cart4} alt=""/>
                        <p className="catigores__cart-desc">
                            Парки
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Catigores;
import React from 'react';
import card1 from "../../images/Rectangle 11.png"
import card2 from "../../images/Rectangle 10.png"
const Favorites = () => {
    return (
        <div className={"favorites"}>
            <div className="container">
                <p className={"favorites__card-title"}>
                    Избранное
                </p>
                <div className="favorites__row">
                    <div className="favorites__row-card">
                        <img  src={card1} alt=""/>
                        <p className={"favorites__card-text"}>
                            Белая куртка
                        </p>
                        <p className={"favorites__card-price"}>
                            2900 грн
                        </p>
                        <p className={"favorites__card-size"}>
                            XXS
                            XS
                            S
                            M
                            L
                        </p>
                        <div className={"favorites__card-colors"}>
                            <div className={"favorites__card-color"}>

                            </div>
                            <div className={"favorites__card-color"}>

                            </div>
                            <div className={"favorites__card-color"}>

                            </div>
                        </div>
                    </div>
                    <div className="favorites__row-card">
                        <img  src={card2} alt=""/>
                        <p className={"favorites__card-text"}>
                            Синее пальто
                        </p>
                        <p className={"favorites__card-price"}>
                            3150 грн
                        </p>
                        <p className={"favorites__card-size"}>
                            XS
                            M
                            L
                        </p>
                        <div className={"favorites__card-colors"}>
                            <div className={"favorites__card-color"}>

                            </div>
                            <div className={"favorites__card-color"}>

                            </div>
                            <div className={"favorites__card-color"}>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Favorites;
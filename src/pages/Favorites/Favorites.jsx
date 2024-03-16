import React, {useContext} from 'react';
import card1 from "../../images/Rectangle 11.png"
import card2 from "../../images/Rectangle 10.png"
import {CustomContext} from "../../utils/Context";
import {FaHeart} from "react-icons/fa6";
import {CiHeart} from "react-icons/ci";
const Favorites = () => {
    const {favorites,deleteFavorites} = useContext(CustomContext)
    return (
        <div className={"favorites"}>
            <div className="container">
                <p className={"favorites__card-title"}>
                    Избранное
                </p>
                <div className="favorites__row">
                    {
                        favorites.map(item => (
                            <div className="favorites__row-card">
                                <svg className={"products__card-svg"} width="40" height="40" viewBox="0 0 40 40"
                                     fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0 0H40V40H20C8.95431 40 0 31.0457 0 20V0Z" fill="#E0BEA2"/>

                                </svg>
                                <FaHeart onClick={(e) => {
                                    e.preventDefault()
                                    deleteFavorites(item.id)
                                }} className={"products__card-svg-nth"}/>

                                <img src={item.images[0].img} alt=""/>
                                <p className={"favorites__card-text"}>
                                    {item.title}
                                </p>
                                <p className={"favorites__card-price"}>
                                    ${item.price}
                                </p>
                                <p className={"favorites__card-size"}>
                                    38
                                    39
                                    40
                                    41
                                    42
                                    43
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

                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default Favorites;
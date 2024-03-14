import React, {useContext} from 'react';
import img from "../../images/Rectangle 7.png"
import {CustomContext} from "../../utils/Context";
const Basket = () => {
    const {cart,cartPrice,deleteItem,plusCount,minusCount} = useContext(CustomContext)
    return (
        <section className="basket">
                <h2 className="basket__title">Ваш заказ</h2>
                {
                    cart.map(item => (
                        <>
                            <div className="basket__row">

                                <div className="basket__card">
                                    <img src={item.images[0].img} alt="" className="basket__card-img"/>
                                    <p className="basket__card-id">арт. 1589956</p>
                                    <h3 className="basket__cart">{item.title}</h3>
                                </div>
                                <div style={{background: `${item.colors.color}`}} className="basket__color"/>
                                <p>
                                    Размер: {item.sizes.size}
                                </p>
                                <div className="basket__number">
                                    <button onClick={() => minusCount(item)} className="basket__number-minus">-</button>
                                    <p className="basket__number-count">{item.count}</p>
                                    <button onClick={() => plusCount(item)} className="basket__number-plus">+</button>
                                </div>
                                <div className="basket__price">
                                    <p className="basket__price">${item.price}</p>
                                    <svg onClick={() => deleteItem(item)} width="25" height="25" viewBox="0 0 25 25" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <g clipPath="url(#clip0_267_438)">
                                            <path
                                                d="M18.75 5H25V7.5H22.5V23.75C22.5 24.0815 22.3683 24.3995 22.1339 24.6339C21.8995 24.8683 21.5815 25 21.25 25H3.75C3.41848 25 3.10054 24.8683 2.86612 24.6339C2.6317 24.3995 2.5 24.0815 2.5 23.75V7.5H0V5H6.25V1.25C6.25 0.918479 6.3817 0.600537 6.61612 0.366116C6.85054 0.131696 7.16848 0 7.5 0H17.5C17.8315 0 18.1495 0.131696 18.3839 0.366116C18.6183 0.600537 18.75 0.918479 18.75 1.25V5ZM20 7.5H5V22.5H20V7.5ZM8.75 11.25H11.25V18.75H8.75V11.25ZM13.75 11.25H16.25V18.75H13.75V11.25ZM8.75 2.5V5H16.25V2.5H8.75Z"
                                                fill="#E0BEA2"/>
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_267_438">
                                                <rect width="25" height="25" fill="white"/>
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </div>
                            </div>
                            <div className="basket__line"/>
                        </>
                    ))
                }

            <div className="basket__cens">
                К оплате: <span>{cartPrice}</span>
            </div>
            <div className="basket__decor">

                <div className="basket__left">
                    <h2 className="basket__decors">Оформление заказа</h2>
                    <p className="basket__data">Персональные данные:</p>
                    <div className="basket__inputs">
                        <input type="text" placeholder={"Ваше имя"} className="basket__inputs-input"/>
                        <input type="text" placeholder={"Ваша фамилия*"} className="basket__inputs-input"/>
                        <input type="email" placeholder={"Ваш e-mail*"} className="basket__inputs-input"/>
                        <input type="tel" placeholder={"Ваш телефон*"} className="basket__inputs-input"/>
                    </div>
                    <div className="basket__delivery">
                        <p className="basket__delivery-title">Способ доставки:</p>
                        <p className="basket__delivery-desc">По Украине:</p>
                        <div className="basket__delivery-inputs">
                            <div>
                                <input type="radio" id="pickup" name="deliveryOption"/>
                                <label htmlFor="pickup">"Самовывоз - вул. Большая Васильковская 14(м. Льва Толстого)"</label>
                            </div>
                            <div>
                                <input type="radio" id="ukrPost" name="deliveryOption"/>
                                <label htmlFor="ukrPost">Украпочта / 1-3 недели / 30$</label>
                            </div>
                            <div>
                                <input type="radio" id="newPost" name="deliveryOption"/>
                                <label htmlFor="newPost">Новая Почта</label>
                            </div>
                            <div>
                                <input type="radio" id="dhl" name="deliveryOption"/>
                                <label htmlFor="dhl">DHL / 3-7 дней / 60$</label>
                            </div>
                        </div>
                        <p className="basket__delivery-adress">
                            Адрес доставки:
                        </p>
                        <input type="text" placeholder={"Город*"} className="basket__delivery-in"/>
                        <input type="text" placeholder={"Отделение почты*"} className="basket__delivery-in"/>
                    </div>
                    <p className="basket__delivery-desc">Вы можете оплатить покупку одним из ниже перечисленных способов:</p>
                    <div className="basket__delivery-inputs">
                        <div>
                            <input type="radio" id="pikcup" name="cardOption"/>
                            <label htmlFor="pikcup">Полная предоплата через Приват 24</label>
                        </div>
                        <div>
                            <input type="radio" id="ucrPost" name="cardOption"/>
                            <label htmlFor="ucrPost">Наложенным платежом в отделении Новой Почты</label>
                        </div>
                        <div>
                            <input type="radio" id="nevPost" name="cardOption"/>
                            <label htmlFor="nevPost">Денежным переводом  Visa/MasterCard</label>
                        </div>
                    </div>
                    <div className="basket__bonus">
                        <p className="basket__bonus-bonus">Использование бонусного счёта:</p>
                        <input type="text" placeholder={"Сумма списания бонусов*"}/>
                    </div>
                </div>
                <div className="basket__right">
                    <p className="basket__kabinet">
                        Войти в личный кабинет
                    </p>
                    <p className="basket__link">УСЛОВИЯ ДОСТАВКИ</p>
                    <p className="basket__link">УСЛОВИЯ ОБМЕНА И ВОЗВРАТА</p>
                    <p className="basket__link">ИНФОРМАЦИЯ ОБ ОПЛАТЕ</p>
                    <div className="basket__order">
                        <p className="basket__order-shiping">ДОСТАВКА:
                        <span>По тарифам перевозчика</span>
                        </p>
                        <p className="basket__order-shiping">БОНУСЫ:
                            <span>-69 грн</span>
                        </p>
                        <p className="basket__order-shiping">ИТОГО:
                        <span>{cartPrice}</span>
                        </p>
                        <button className="basket__btn">
                            ОФОРМИТЬ ЗАКАЗ
                        </button>
                        <p className="basket__info">Нажимая на кнопку «оплатить заказ», я принимаю условия <span>публичной оферты</span> и политики конфиденциальности</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Basket;
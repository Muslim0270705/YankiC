import React from 'react';
import { AiOutlineInstagram } from "react-icons/ai";
import { RiTelegramLine } from "react-icons/ri";


const Footer = () => {
    return (
        <section className={"footer"}>
            <div className="container">
                <div className="footer__row">
                    <div className="footer__left">
                        <ul className="footer__left-menu">
                                <h3 className="footer__title">
                                    КОМПАНИЯ
                                </h3>
                            <li className="footer__item">
                                <a href="">
                                    О нас
                                </a>
                            </li>
                            <li className="footer__item">
                                <a href="">
                                    Контакты
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="footer__middle">
                        <ul className="footer__middle-menu">
                                <h3 className="footer__title">
                                    ПОЛЕЗНОЕ
                                </h3>
                            <li className="footer__item">
                                <a href="">
                                    Оплата и доставка
                                </a>
                            </li>
                            <li className="footer__item">
                                <a href="">
                                    Условия возврата
                                </a>
                            </li>
                            <li className="footer__item">
                                <a href="">
                                    Бонусная система
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="footer__center">
                        <ul className="footer__center-menu">
                                <h3 className="footer__title">
                                    ПОКУПАТЕЛЮ
                                </h3>
                            <li className="footer__item">
                                <a href="">
                                    Избранное
                                </a>
                            </li>
                            <li className="footer__item">
                                <a href="">
                                    Публичная оферта
                                </a>
                            </li>
                            <li className="footer__item">
                                <a href="">
                                    Публичная оферта
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="footer__right">
                        <ul className="footer__right-menu">
                                <h3 className="footer__title">
                                    КОНТАКТЫ
                                </h3>
                            <div className="footer__icon">
                                <a className={"footer__icons"} href="https://www.instagram.com/yanki.ua/">
                                    <AiOutlineInstagram />
                                </a>
                                <a className={"footer__icons"} href="https://web.telegram.org/a/#-1001540246881">
                                    <RiTelegramLine />
                                </a>
                            </div>
                            <p className="footer__contacts">
                                +38(073) 096 36 44
                            </p>
                            <p className="footer__contacts">
                                info@yanki.com
                            </p>
                        </ul>
                    </div>
                </div>

            </div>
        </section>
    );
};
export default Footer;
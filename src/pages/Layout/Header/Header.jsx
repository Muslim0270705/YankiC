import React from 'react';
import {Link, useLocation} from "react-router-dom";

const Header = () => {
const location = useLocation()
    return (
        <header className={`header ${location.pathname !== "/" ? "newH" : ""}`}>
            <div className="container">
                <div className="header__nav">
                    <div className={"header__burger"}>
                        {
                            location.pathname !== "/" ?
                                <svg width="34" height="24" viewBox="0 0 34 24" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <rect width="34" height="4" fill="#E0BEA2"/>
                                    <rect y="10" width="26" height="4" fill="#E0BEA2"/>
                                    <rect y="20" width="18" height="4" fill="#E0BEA2"/>
                                </svg>
                                :
                                <svg width="34" height="24" viewBox="0 0 34 24" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <rect width="34" height="4" fill="white"/>
                                    <rect y="10" width="26" height="4" fill="white"/>
                                    <rect y="20" width="18" height="4" fill="white"/>
                                </svg>
                        }
                    </div>
                    <ul className={"header__menu"}>
                        <li className={"header__menu-item"}>
                            <Link to={"/"}>
                                NEW
                            </Link>

                        </li>
                        <li className={"header__menu-item"}>
                        <Link to={"/catalog"}>
                                КАТАЛОГ
                            </Link>

                        </li>
                        <li className={"header__menu-item"}>
                            <Link to={"/"}>
                                О НАС
                            </Link>

                        </li>
                    </ul>
                    <h1 className={"header__logo"}>
                        {
                            location.pathname !== "/" ?
                                <svg width="195" height="40" viewBox="0 0 195 40" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M38.26 0.42989C38.3419 0.42989 38.3828 0.552714 38.3828 0.798363C38.3828 1.04401 38.3419 1.16684 38.26 1.16684C36.9908 1.16684 35.435 1.9652 33.5926 3.56193C31.7503 5.11771 30.1126 7.08291 28.6796 9.45752L22.2927 20.1433V33.8383C22.2927 35.1075 22.3951 36.0287 22.5998 36.6018C22.8045 37.175 23.1935 37.564 23.7666 37.7687C24.3808 37.9734 25.3429 38.0757 26.653 38.0757C26.7758 38.0757 26.8373 38.1986 26.8373 38.4442C26.8373 38.6899 26.7758 38.8127 26.653 38.8127C25.3019 38.8127 24.2375 38.7922 23.4596 38.7513L18.8536 38.6899L14.3091 38.7513C13.4903 38.7922 12.3849 38.8127 10.9928 38.8127C10.911 38.8127 10.87 38.6899 10.87 38.4442C10.87 38.1986 10.911 38.0757 10.9928 38.0757C12.303 38.0757 13.2651 37.9734 13.8792 37.7687C14.4933 37.564 14.9028 37.175 15.1075 36.6018C15.3531 35.9877 15.4759 35.0665 15.4759 33.8383V21.433L6.50972 7.49232C4.99488 5.11771 3.72569 3.48004 2.70215 2.57933C1.71955 1.63767 0.880246 1.16684 0.184238 1.16684C0.0614125 1.16684 0 1.04401 0 0.798363C0 0.552714 0.0614125 0.42989 0.184238 0.42989L2.08802 0.491302C2.98874 0.573184 3.62334 0.614124 3.99181 0.614124C5.42477 0.614124 7.49232 0.573184 10.1945 0.491302L14.2477 0.42989C14.3296 0.42989 14.3705 0.552714 14.3705 0.798363C14.3705 1.04401 14.3296 1.16684 14.2477 1.16684C13.5517 1.16684 12.999 1.3306 12.5896 1.65814C12.2211 1.98567 12.0368 2.41556 12.0368 2.9478C12.0368 3.60287 12.3234 4.38076 12.8966 5.28148L21.3101 18.5466L26.9601 8.90481C28.0655 7.06244 28.6182 5.48619 28.6182 4.17605C28.6182 3.19345 28.3112 2.4565 27.697 1.9652C27.1238 1.43296 26.2845 1.16684 25.1791 1.16684C25.0563 1.16684 24.9949 1.04401 24.9949 0.798363C24.9949 0.552714 25.0563 0.42989 25.1791 0.42989L28.434 0.491302C30.3173 0.573184 31.9959 0.614124 33.4698 0.614124C34.1658 0.614124 35.0051 0.573184 35.9877 0.491302L38.26 0.42989Z"
                                        fill="#E0BEA2"/>
                                    <path
                                        d="M81.765 38.0757C81.9697 38.0757 82.072 38.1986 82.072 38.4442C82.072 38.6899 81.9697 38.8127 81.765 38.8127C80.9461 38.8127 79.6769 38.7718 77.9574 38.6899C76.156 38.608 74.8663 38.567 74.0884 38.567C73.0649 38.567 71.8161 38.608 70.3422 38.6899C68.9502 38.7718 67.8448 38.8127 67.026 38.8127C66.8622 38.8127 66.7803 38.6899 66.7803 38.4442C66.7803 38.1986 66.8622 38.0757 67.026 38.0757C68.0905 38.0757 68.8479 37.9734 69.2982 37.7687C69.7895 37.523 70.0352 37.1136 70.0352 36.5404C70.0352 35.8444 69.6258 34.6776 68.8069 33.0399L64.6309 24.7492H49.5234L47.1283 30.0921C46.5961 31.2794 46.33 32.3849 46.33 33.4084C46.33 34.8823 46.8417 36.0287 47.8653 36.8475C48.9298 37.6663 50.3422 38.0757 52.1027 38.0757C52.3074 38.0757 52.4098 38.1986 52.4098 38.4442C52.4098 38.6899 52.3074 38.8127 52.1027 38.8127C51.3658 38.8127 50.3013 38.7718 48.9093 38.6899C47.3535 38.608 46.0024 38.567 44.8561 38.567C43.7506 38.567 42.42 38.608 40.8643 38.6899C39.4722 38.7718 38.3463 38.8127 37.4866 38.8127C37.3228 38.8127 37.2409 38.6899 37.2409 38.4442C37.2409 38.1986 37.3228 38.0757 37.4866 38.0757C38.6329 38.0757 39.5951 37.8506 40.373 37.4002C41.1508 36.9089 41.9287 36.0696 42.7066 34.8823C43.4845 33.654 44.4057 31.8526 45.4702 29.478L58.7967 0.184239C58.8786 0.0614129 59.0628 0 59.3494 0C59.6769 0 59.8612 0.0614129 59.9021 0.184239L75.2552 30.3992C76.6882 33.306 77.8755 35.3122 78.8172 36.4176C79.7588 37.523 80.7414 38.0757 81.765 38.0757ZM50.3218 23.0297H63.7097L56.6473 9.02764L50.3218 23.0297Z"
                                        fill="#E0BEA2"/>
                                    <path
                                        d="M129.164 0.42989C129.246 0.42989 129.287 0.552714 129.287 0.798363C129.287 1.04401 129.246 1.16684 129.164 1.16684C127.527 1.16684 126.237 1.8219 125.295 3.13204C124.354 4.40123 123.883 6.12078 123.883 8.29069V39.7339C123.883 39.8567 123.781 39.9386 123.576 39.9795C123.412 40.0205 123.289 40 123.207 39.9181L94.4049 7.12385V31.0133C94.4049 33.1832 94.8553 34.9028 95.756 36.172C96.6567 37.4411 97.9054 38.0757 99.5021 38.0757C99.584 38.0757 99.625 38.1986 99.625 38.4442C99.625 38.6899 99.584 38.8127 99.5021 38.8127C98.3558 38.8127 97.4755 38.7922 96.8614 38.7513L93.5451 38.6899L89.7376 38.7513C89.0415 38.7922 88.0385 38.8127 86.7283 38.8127C86.6055 38.8127 86.5441 38.6899 86.5441 38.4442C86.5441 38.1986 86.6055 38.0757 86.7283 38.0757C88.5298 38.0757 89.9423 37.4411 90.9658 36.172C92.0303 34.9028 92.5625 33.1832 92.5625 31.0133V5.03582C91.2115 3.56192 90.0446 2.55885 89.062 2.02661C88.1204 1.45343 87.1378 1.16684 86.1142 1.16684C86.0323 1.16684 85.9914 1.04401 85.9914 0.798363C85.9914 0.552714 86.0323 0.42989 86.1142 0.42989L88.6935 0.491302C89.2258 0.532243 90.0037 0.552714 91.0272 0.552714L95.6946 0.491302C96.2678 0.450361 96.9638 0.42989 97.7826 0.42989C98.1101 0.42989 98.3558 0.511772 98.5195 0.675537C98.6833 0.839303 98.9699 1.18731 99.3793 1.71955C100.075 2.66121 100.567 3.2958 100.853 3.62334L122.102 28.1269V8.29069C122.102 6.07984 121.652 4.33982 120.751 3.07063C119.85 1.80143 118.601 1.16684 117.005 1.16684C116.923 1.16684 116.882 1.04401 116.882 0.798363C116.882 0.552714 116.923 0.42989 117.005 0.42989L119.645 0.491302C120.956 0.573184 122.061 0.614124 122.962 0.614124C123.781 0.614124 124.927 0.573184 126.401 0.491302L129.164 0.42989Z"
                                        fill="#E0BEA2"/>
                                    <path
                                        d="M173.771 38.0757C173.894 38.0757 173.956 38.1986 173.956 38.4442C173.956 38.6899 173.894 38.8127 173.771 38.8127H166.893C166.238 38.8127 165.685 38.8332 165.235 38.8741C164.785 38.915 164.416 38.9355 164.13 38.9355C163.475 38.9355 162.901 38.7922 162.41 38.5056C161.96 38.1781 161.387 37.6049 160.691 36.7861C160.035 35.9673 158.848 34.391 157.129 32.0573C156.924 31.7707 156.678 31.4637 156.392 31.1361C156.146 30.7677 155.859 30.3582 155.532 29.9079L147.487 19.0993L146.136 20.4504V33.8383C146.136 35.1075 146.238 36.0287 146.443 36.6018C146.648 37.175 147.037 37.564 147.61 37.7687C148.224 37.9734 149.186 38.0757 150.496 38.0757C150.66 38.0757 150.742 38.1986 150.742 38.4442C150.742 38.6899 150.66 38.8127 150.496 38.8127C149.145 38.8127 148.081 38.7922 147.303 38.7513L142.697 38.6899L138.152 38.7513C137.333 38.7922 136.228 38.8127 134.836 38.8127C134.754 38.8127 134.713 38.6899 134.713 38.4442C134.713 38.1986 134.754 38.0757 134.836 38.0757C136.146 38.0757 137.108 37.9734 137.722 37.7687C138.336 37.564 138.746 37.175 138.951 36.6018C139.196 35.9877 139.319 35.0665 139.319 33.8383V5.4043C139.319 4.17605 139.196 3.27534 138.951 2.70215C138.746 2.12897 138.336 1.74002 137.722 1.53531C137.149 1.28966 136.228 1.16684 134.959 1.16684C134.836 1.16684 134.775 1.04401 134.775 0.798363C134.775 0.552714 134.836 0.42989 134.959 0.42989L138.214 0.491302C140.097 0.573184 141.591 0.614124 142.697 0.614124C143.925 0.614124 145.481 0.573184 147.364 0.491302L150.496 0.42989C150.619 0.42989 150.68 0.552714 150.68 0.798363C150.68 1.04401 150.619 1.16684 150.496 1.16684C149.227 1.16684 148.285 1.28966 147.671 1.53531C147.098 1.78096 146.689 2.21085 146.443 2.82497C146.238 3.39816 146.136 4.29887 146.136 5.52712V18.5466L157.681 6.75538C158.869 5.56807 159.462 4.48311 159.462 3.50051C159.462 2.76356 159.135 2.19038 158.48 1.78096C157.825 1.37155 156.903 1.16684 155.716 1.16684C155.593 1.16684 155.532 1.04401 155.532 0.798363C155.532 0.552714 155.593 0.42989 155.716 0.42989L158.603 0.491302C160.404 0.573184 162.083 0.614124 163.638 0.614124C165.317 0.614124 167.057 0.573184 168.858 0.491302L171.622 0.42989C171.745 0.42989 171.806 0.552714 171.806 0.798363C171.806 1.04401 171.745 1.16684 171.622 1.16684C169.739 1.16684 167.671 1.71955 165.419 2.82497C163.168 3.88946 161.12 5.32242 159.278 7.12385L152.338 14.1863L161.428 26.4688C164.089 30.2764 166.074 32.9785 167.385 34.5752C168.736 36.131 169.821 37.1136 170.639 37.523C171.458 37.8915 172.502 38.0757 173.771 38.0757Z"
                                        fill="#E0BEA2"/>
                                    <path
                                        d="M190.247 33.8383C190.247 35.1075 190.349 36.0287 190.554 36.6018C190.759 37.175 191.147 37.564 191.721 37.7687C192.335 37.9734 193.297 38.0757 194.607 38.0757C194.73 38.0757 194.791 38.1986 194.791 38.4442C194.791 38.6899 194.73 38.8127 194.607 38.8127C193.256 38.8127 192.191 38.7922 191.414 38.7513L186.746 38.6899L182.202 38.7513C181.383 38.7922 180.277 38.8127 178.885 38.8127C178.804 38.8127 178.763 38.6899 178.763 38.4442C178.763 38.1986 178.804 38.0757 178.885 38.0757C180.196 38.0757 181.158 37.9734 181.772 37.7687C182.386 37.564 182.795 37.175 183 36.6018C183.246 35.9877 183.369 35.0665 183.369 33.8383V5.4043C183.369 4.17605 183.246 3.27534 183 2.70215C182.795 2.12897 182.386 1.74002 181.772 1.53531C181.158 1.28966 180.196 1.16684 178.885 1.16684C178.804 1.16684 178.763 1.04401 178.763 0.798363C178.763 0.552714 178.804 0.42989 178.885 0.42989L182.202 0.491302C184.085 0.573184 185.6 0.614124 186.746 0.614124C188.015 0.614124 189.592 0.573184 191.475 0.491302L194.607 0.42989C194.73 0.42989 194.791 0.552714 194.791 0.798363C194.791 1.04401 194.73 1.16684 194.607 1.16684C193.338 1.16684 192.396 1.28966 191.782 1.53531C191.168 1.78096 190.759 2.21085 190.554 2.82497C190.349 3.39816 190.247 4.29887 190.247 5.52712V33.8383Z"
                                        fill="#E0BEA2"/>
                                </svg>

                                :
                                <svg width="159" height="40" viewBox="0 0 159 40" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M4.33803 0L17.4085 21.5211L30.5915 0H34.8732L19.3803 25.1268V40H15.4366V25.0141L0 0H4.33803Z"
                                        fill="white"/>
                                    <path
                                        d="M48.7474 0H52.0713L68.691 40H64.522L59.3389 27.493H41.3671L36.2403 40H32.015L48.7474 0ZM58.4375 24.3944L50.3812 4.61972L42.2121 24.3944H58.4375Z"
                                        fill="white"/>
                                    <path
                                        d="M78.3688 7.26761V40H74.4252V0H77.6928L103.946 33.3521V0.0563369H107.89V40H104.228L78.3688 7.26761Z"
                                        fill="white"/>
                                    <path
                                        d="M117.944 40V0.0563369H121.888V23.2676L143.916 0H148.254L131.916 17.5775L149.099 40H144.648L129.381 19.9437L121.888 27.7183V40H117.944Z"
                                        fill="white"/>
                                    <path d="M154.146 40V0H158.089V40H154.146Z" fill="white"/>
                                </svg>
                        }

                    </h1>
                    <p className={"header__lang"}>
                        RU
                        <svg width="10" height="7" viewBox="0 0 10 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M5 3.88903L8.88906 -3.05661e-05L10 1.11091L5 6.1109L-4.85606e-08 1.1109L1.11094 -3.09061e-05L5 3.88903Z"
                                fill="white"/>
                        </svg>
                    </p>
                    <ul className={"header__icons"}>
                        <li className={"header__icons-item"}>
                            <svg width="25" height="25" viewBox="0 0 25 25" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_499_24)">
                                    <path
                                        d="M19.729 17.9888L25 23.2586L23.2586 25L17.9888 19.729C16.028 21.3009 13.5892 22.1558 11.0761 22.1522C4.9621 22.1522 0 17.1901 0 11.0761C0 4.9621 4.9621 0 11.0761 0C17.1901 0 22.1522 4.9621 22.1522 11.0761C22.1558 13.5892 21.3009 16.028 19.729 17.9888ZM17.2603 17.0757C18.8221 15.4695 19.6944 13.3165 19.6909 11.0761C19.6909 6.31584 15.8351 2.46136 11.0761 2.46136C6.31584 2.46136 2.46136 6.31584 2.46136 11.0761C2.46136 15.8351 6.31584 19.6909 11.0761 19.6909C13.3165 19.6944 15.4695 18.8221 17.0757 17.2603L17.2603 17.0757Z"
                                        fill="white"/>
                                </g>
                                <defs>
                                    <clipPath id="clip0_499_24">
                                        <rect width="25" height="25" fill="white"/>
                                    </clipPath>
                                </defs>
                            </svg>
                        </li>
                        <li className={"header__icons-item"}>
                            {
                                 <Link to={"/register"} className={"header__auth"}>
                                    <svg width="25" height="25" viewBox="0 0 25 25" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0_499_28)">
                                            <path
                                                d="M2.5 25C2.5 22.4741 3.5034 20.0517 5.28946 18.2656C7.07552 16.4796 9.49794 15.4762 12.0238 15.4762C14.5497 15.4762 16.9721 16.4796 18.7582 18.2656C20.5442 20.0517 21.5476 22.4741 21.5476 25H19.1667C19.1667 23.1056 18.4141 21.2888 17.0746 19.9492C15.735 18.6097 13.9182 17.8571 12.0238 17.8571C10.1294 17.8571 8.31259 18.6097 6.97305 19.9492C5.6335 21.2888 4.88095 23.1056 4.88095 25H2.5ZM12.0238 14.2857C8.07738 14.2857 4.88095 11.0893 4.88095 7.14286C4.88095 3.19643 8.07738 0 12.0238 0C15.9702 0 19.1667 3.19643 19.1667 7.14286C19.1667 11.0893 15.9702 14.2857 12.0238 14.2857ZM12.0238 11.9048C14.6548 11.9048 16.7857 9.77381 16.7857 7.14286C16.7857 4.5119 14.6548 2.38095 12.0238 2.38095C9.39286 2.38095 7.2619 4.5119 7.2619 7.14286C7.2619 9.77381 9.39286 11.9048 12.0238 11.9048Z"
                                                fill="white"/>
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_499_28">
                                                <rect width="25" height="25" fill="white"/>
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </Link>
                            }

                        </li>
                        <li className={"header__icons-item"}>
                            <Link to={"/favorites"}>
                                <svg width="25" height="25" viewBox="0 0 25 25" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_499_31)">
                                        <path
                                            d="M12.501 3.16119C15.4372 0.524988 19.9746 0.612487 22.8033 3.44618C25.6308 6.28113 25.7283 10.796 23.0983 13.741L12.4985 24.3558L1.90122 13.741C-0.728729 10.796 -0.62998 6.27363 2.19622 3.44618C5.02741 0.616237 9.55608 0.521238 12.501 3.16119ZM21.0334 5.2124C19.1584 3.33494 16.1335 3.25869 14.171 5.02115L12.5023 6.51863L10.8323 5.0224C8.86359 3.25744 5.8449 3.33494 3.96493 5.2149C2.10247 7.07737 2.00872 10.0586 3.72494 12.0285L12.4998 20.8171L21.2746 12.0298C22.9921 10.0586 22.8983 7.08112 21.0334 5.2124Z"
                                            fill="white"/>
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_499_31">
                                            <rect width="25" height="25" fill="white"/>
                                        </clipPath>
                                    </defs>
                                </svg>
                            </Link>

                        </li>
                        <li className={"header__icons-item"}>
                            <svg width="25" height="25" viewBox="0 0 25 25" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_499_34)">
                                    <path
                                        d="M3.81655 5.48063L0 1.66525L1.66525 0L5.48063 3.81655H23.4183C23.6017 3.81654 23.7826 3.85941 23.9466 3.94173C24.1105 4.02406 24.2529 4.14356 24.3624 4.2907C24.4719 4.43785 24.5456 4.60856 24.5774 4.78921C24.6092 4.96986 24.5984 5.15545 24.5457 5.33117L21.7213 14.746C21.6486 14.9886 21.4997 15.2012 21.2966 15.3524C21.0935 15.5035 20.847 15.5852 20.5938 15.5851H6.17027V17.9389H19.1157V20.2926H4.99341C4.68129 20.2926 4.38195 20.1686 4.16125 19.9479C3.94054 19.7272 3.81655 19.4278 3.81655 19.1157V5.48063ZM6.17027 6.17027V13.2314H19.7183L21.8366 6.17027H6.17027ZM5.58184 25C5.11366 25 4.66465 24.814 4.33359 24.483C4.00254 24.1519 3.81655 23.7029 3.81655 23.2347C3.81655 22.7665 4.00254 22.3175 4.33359 21.9865C4.66465 21.6554 5.11366 21.4694 5.58184 21.4694C6.05002 21.4694 6.49903 21.6554 6.83009 21.9865C7.16114 22.3175 7.34713 22.7665 7.34713 23.2347C7.34713 23.7029 7.16114 24.1519 6.83009 24.483C6.49903 24.814 6.05002 25 5.58184 25ZM19.7041 25C19.236 25 18.7869 24.814 18.4559 24.483C18.1248 24.1519 17.9388 23.7029 17.9388 23.2347C17.9388 22.7665 18.1248 22.3175 18.4559 21.9865C18.7869 21.6554 19.236 21.4694 19.7041 21.4694C20.1723 21.4694 20.6213 21.6554 20.9524 21.9865C21.2834 22.3175 21.4694 22.7665 21.4694 23.2347C21.4694 23.7029 21.2834 24.1519 20.9524 24.483C20.6213 24.814 20.1723 25 19.7041 25Z"
                                        fill="white"/>
                                </g>
                                <defs>
                                    <clipPath id="clip0_499_34">
                                        <rect width="25" height="25" fill="white"/>
                                    </clipPath>
                                </defs>
                            </svg>
                        </li>
                        <li className={"header__icons-item"}>
                            <Link to={"/basket"}>
                                <svg width="25" height="25" viewBox="0 0 25 25" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_499_34)">
                                        <path
                                            d="M3.81655 5.48063L0 1.66525L1.66525 0L5.48063 3.81655H23.4183C23.6017 3.81654 23.7826 3.85941 23.9466 3.94173C24.1105 4.02406 24.2529 4.14356 24.3624 4.2907C24.4719 4.43785 24.5456 4.60856 24.5774 4.78921C24.6092 4.96986 24.5984 5.15545 24.5457 5.33117L21.7213 14.746C21.6486 14.9886 21.4997 15.2012 21.2966 15.3524C21.0935 15.5035 20.847 15.5852 20.5938 15.5851H6.17027V17.9389H19.1157V20.2926H4.99341C4.68129 20.2926 4.38195 20.1686 4.16125 19.9479C3.94054 19.7272 3.81655 19.4278 3.81655 19.1157V5.48063ZM6.17027 6.17027V13.2314H19.7183L21.8366 6.17027H6.17027ZM5.58184 25C5.11366 25 4.66465 24.814 4.33359 24.483C4.00254 24.1519 3.81655 23.7029 3.81655 23.2347C3.81655 22.7665 4.00254 22.3175 4.33359 21.9865C4.66465 21.6554 5.11366 21.4694 5.58184 21.4694C6.05002 21.4694 6.49903 21.6554 6.83009 21.9865C7.16114 22.3175 7.34713 22.7665 7.34713 23.2347C7.34713 23.7029 7.16114 24.1519 6.83009 24.483C6.49903 24.814 6.05002 25 5.58184 25ZM19.7041 25C19.236 25 18.7869 24.814 18.4559 24.483C18.1248 24.1519 17.9388 23.7029 17.9388 23.2347C17.9388 22.7665 18.1248 22.3175 18.4559 21.9865C18.7869 21.6554 19.236 21.4694 19.7041 21.4694C20.1723 21.4694 20.6213 21.6554 20.9524 21.9865C21.2834 22.3175 21.4694 22.7665 21.4694 23.2347C21.4694 23.7029 21.2834 24.1519 20.9524 24.483C20.6213 24.814 20.1723 25 19.7041 25Z"
                                            fill="white"/>
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_499_34">
                                            <rect width="25" height="25" fill="white"/>
                                        </clipPath>
                                    </defs>
                                </svg>
                            </Link>
=======
>>>>>>> 04c96ffc41c36d47e90ffb391c3623c44964a8c4
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    );
};

export default Header;
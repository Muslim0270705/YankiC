import React from 'react';

const News = () => {
    return (
        <section className={"news"}>
            <h2 className="news__title">
                Новая коллекция
            </h2>
            <p className={"news__desc"}>
                Смотреть Новинки
                <svg width="7" height="10" viewBox="0 0 7 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M3.88903 5L-2.90871e-05 1.11094L1.11091 1.90735e-06L6.11091 5L1.11091 10L-2.90871e-05 8.88907L3.88903 5Z"
                        fill="white"/>
                </svg>
            </p>
        </section>
    );
};

export default News;
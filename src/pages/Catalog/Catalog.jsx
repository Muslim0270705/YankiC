import React from 'react';
import Aside from "./Aside/Aside";
import Products from "./Products/Products";

const Catalog = () => {
    return (
        <>
            <div className="container catalog">
                <Aside/>
                <Products/>
            </div>
        </>
    );
};

export default Catalog;
import React, {useContext, useEffect} from 'react';
import {CustomContext} from "../../../utils/Context";

const Aside = () => {
    const {getCategories,categories,setCategoryId} = useContext(CustomContext)
    useEffect(() => {
        getCategories()
    },[])

    return (
        <aside className={"aside"}>
            <ul className={"aside__menu"}>
                <li className={"aside__menu-item"}>
                    Kаталог
                </li>
                {

                    categories.map(item => (
                        <li onClick={() => setCategoryId(item.id)} className={"aside__menu-item"}>
                            {item.name}
                        </li>
                    ))
                }

            </ul>
        </aside>
    );
};

export default Aside;
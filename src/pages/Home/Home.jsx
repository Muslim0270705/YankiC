import React from 'react';
import News from "./News/News";
import Email from "./Email/Email";
import Catigores from "./Catigores/Catigores";


const Home = () => {
    return (
        <>
           <News/>


           <Catigores/>
            <Email/>
        </>
    );
};

export default Home
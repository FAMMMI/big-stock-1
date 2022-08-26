import React from 'react';
import Banner from './Banner';
import BrandLogo from './BrandLogo';
import Cars from './Cars';
import Contact from './Contact';
import Intro from './Intro';
import Title from './Title';

const Home = () => {
    return (
        <div>
            {/* <Title></Title> */}
            <Banner></Banner>
            <Intro></Intro>
            <BrandLogo></BrandLogo>
            <Cars></Cars>
            <Contact></Contact>

        </div>
    );
};

export default Home;
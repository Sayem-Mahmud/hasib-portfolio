import React from 'react';
import AboutMe from '../AboutMe/AboutMe';
import Banner from '../Banner/Banner';
import Blog from '../Blog/Blog';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import Portfolio from '../Portfolio/Portfolio';


const Home = () => {
    return (
        <div id="home">
            <Banner></Banner>
            <Blog></Blog>
            <Portfolio></Portfolio>
            <AboutMe></AboutMe>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;
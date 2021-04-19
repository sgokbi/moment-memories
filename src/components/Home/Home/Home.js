import React from 'react';
import AboutUs from '../AboutUs/AboutUs';
import Header from '../Header/Header';
import HeaderMain from '../HeaderMain/HeaderMain';
import Photographers from '../Photographers/Photographers';
import Reviews from '../Reviews/Reviews';
import Services from '../Services/Services';
import Footer from "../../Shared/Footer/Footer";
import Contact from "../Contact/Contact";


const Home = () => {
    return (
        <div className="home-div">
            <Header />
            <HeaderMain />
            <Services />
            <AboutUs />
            <Reviews />
            <Photographers />
            <Contact />
            <Footer />
        </div>
    );
};

export default Home;
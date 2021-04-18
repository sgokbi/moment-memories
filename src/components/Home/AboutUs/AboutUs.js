import React from 'react';
import aboutUs from "../../../images/aboutImg2.jpg"
import "./AboutUs.css";

const AboutUs = () => {
    return (
        <div className="row mb-5 pb-5">
            <h3 className="text-center about ">ABOUT US</h3>
            <div className="col-md-6 ">
                <img className=" ms-5 about-img" src={aboutUs} alt="" />
            </div>
            <div className="col-md-6">
                <h4 className="m-5 pt-5 text-center heading">What we are</h4>
                <p className="m-5 text-left">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum modi, est delectus cupiditate magni distinctio, dolorum explicabo unde, voluptate aliquid laboriosam? Molestiae amet laudantium aspernatur saepe assumenda dignissimos, consequatur veritatis iusto? Quae excepturi odit ipsa doloribus unde optio quaerat assumenda, aspernatur delectus iste dolore facere enim inventore iure atque mollitia?</p>
            </div>
        </div>
    );
};

export default AboutUs;
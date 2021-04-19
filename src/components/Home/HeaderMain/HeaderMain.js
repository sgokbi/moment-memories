import React from 'react';
import headingImg from "../../../images/Home-BG.jpg";
import "./HeaderMain.css";

const HeaderMain = () => {
    return (
        <main>
            <div className="row mb-5 pb-5">
                <div className="col-md-6">
                    <h2 className="m-5 pt-5 text-center heading">REMEMBER HOW YOU FELT <br /> NOT HOW YOU WERE POSTED</h2>
                    <p className="m-5 text-left">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum modi, est delectus cupiditate magni distinctio, dolorum explicabo unde, voluptate aliquid laboriosam? Molestiae amet laudantium aspernatur saepe assumenda dignissimos, consequatur veritatis iusto? Quae excepturi odit ipsa doloribus unde optio quaerat assumenda, aspernatur delectus iste dolore facere enim inventore iure atque mollitia?</p>
                </div>
                <div className="col-md-6 ">
                    <img className="heading-img" src={headingImg} alt="" />
                </div>
            </div>
        </main>
    );
};

export default HeaderMain;
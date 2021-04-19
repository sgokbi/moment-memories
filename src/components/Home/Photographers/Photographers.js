import React from 'react';
import photographer1 from "../../../images/photographer5.jpg";
import photographer2 from "../../../images/photographer2.jpg";
import photographer3 from "../../../images/photographer3.jpg";
import photographer4 from "../../../images/photographer6.jfif";
import Photographer from '../Photographer/Photographer';
import "./Photographers.css"

const photographers = [
    {
        image: photographer1,
        name: "Peter Roxburgh"
    },
    {
        image: photographer2,
        name: "Julia Noem"
    },
    {
        image: photographer3,
        name: "Michel Riven"
    },
    {
        image: photographer4,
        name: "Robert Burce"
    }
]

const Photographers = () => {

    return (
        <div className="mt-5 pt-5 pb-3 photographers-div">
            <h3 className="text-center photographers-heading">OUR PHOTOGRAPHERS</h3>
            <div className="row m-2 mb-5 ">
                {
                    photographers.map(photographer => <Photographer photographer={photographer}></Photographer>)
                }
            </div>
        </div>
    );
};

export default Photographers;
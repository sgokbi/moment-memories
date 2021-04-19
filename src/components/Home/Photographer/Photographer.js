import React from 'react';
import "./Photographer.css";

const Photographer = (props) => {
    const { name, image } = props.photographer;

    return (
        <div className="col-md-3 ">
            <div className="text-center " >
                <img className="photographer-img mt-5 " src={image} alt="" />
                <p className="mt-3 photographer">{name}</p>
            </div>
        </div >
    );
};

export default Photographer;
import React from 'react';
import "./Review.css";


const Review = (props) => {
    const { name, description, imageURL } = props.review;
    return (
        <div className="col-md-4  ">
            <div className=" review-div d-flex align-items-center">
                <div>
                    <img className="reviews-img" src={imageURL} alt="" />
                    <h6 className="text-center text-primary">{name}</h6>
                </div>
                <div className="ms-3" >

                    <p>{description}</p>
                </div>
            </div>

        </div>
    );
};

export default Review;
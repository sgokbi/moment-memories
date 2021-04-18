import React from 'react';
import Review from '../Review/Review';
import img from "../../../images/wedding.png";
import "./Reviews.css";
import { useState } from 'react';
import { useEffect } from 'react';


// const reviews = [
//     {
//         image: img,
//         name: "Riya",
//         quote: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptates, porro maiores laudantium explicabo incidunt."
//     },
//     {
//         image: img,
//         name: "Catherin",
//         quote: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptates, porro maiores laudantium explicabo incidunt."
//     },
//     {
//         image: img,
//         name: "Max",
//         quote: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptates, porro maiores laudantium explicabo incidunt."
//     },
// ]

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5500/reviews")
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    return (
        <div>
            <h3 className="text-center mb-5 review-heading ">WHAT OUR CLIENTS SAYS ABOUT US</h3>
            <div className="row m-2 mb-5">
                {
                    reviews.map(review => <Review review={review}></Review>)
                }
            </div>
        </div>
    );
};

export default Reviews;
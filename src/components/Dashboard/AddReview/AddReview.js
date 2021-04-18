import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import Sidebar from '../Sidebar/Sidebar';
import axios from 'axios';
import { useState } from 'react';

const AddReview = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [imageURL, setImageURl] = useState(null);

    const onSubmit = data => {

        const reviewData = {
            name: data.name,
            description: data.description,
            imageURL: imageURL
        };
        console.log(reviewData)

        const url = `http://localhost:5500/addReview`;
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(reviewData)
        })
    };

    const handleImageUpload = event => {
        console.log(event.target.files[0]);
        const imageData = new FormData();
        imageData.set("key", "2920637730192fda2f6df0a3ff9f8920")
        imageData.append("image", event.target.files[0])

        axios.post('https://api.imgbb.com/1/upload',
            imageData)
            .then(function (response) {
                setImageURl(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            });

    }

    return (
        <section className="dashboard-section">
            <div className="row dashboard-div ">
                <div className="col-md-3 sidebar ">
                    <Sidebar />

                </div>
                <div className="col-md-9 dashboard-work-div">
                    <h2 className="dashboard-heading">Give Us Your Review</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <h6>Name</h6>
                        <input className="input-space" name="name" defaultValue="name" ref={register} />
                        <br />
                        <h6>Upload Your Image</h6>
                        <input className="input-space" type="file" name="exampleRequired" onChange={handleImageUpload} />
                        <h6>Description</h6>
                        <input className="input-space" name="description" defaultValue="description" ref={register} />
                        <br />
                        <input className="submit-button" type="submit" />
                    </form>
                </div>
            </div>
        </section>
    );
};

export default AddReview;
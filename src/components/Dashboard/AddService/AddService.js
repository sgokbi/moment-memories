import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import Sidebar from '../Sidebar/Sidebar';
import axios from 'axios';
import { useState } from 'react';

const AddService = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [imageURL, setImageURL] = useState(null);

    const onSubmit = data => {
        console.log(data);
        const serviceData = {
            name: data.name,
            imageURL: imageURL,
            charge: data.charge
        };
        //new service add API
        const url = `https://salty-earth-74088.herokuapp.com/addService`
        console.log(serviceData);
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(serviceData)
        })
    };

    const handleImageUpload = event => {
        const imageData = new FormData();
        imageData.set("key", "2920637730192fda2f6df0a3ff9f8920")
        imageData.append("image", event.target.files[0])
        axios.post('https://api.imgbb.com/1/upload',
            imageData)
            .then(function (response) {
                setImageURL(response.data.data.display_url);
            })
            .catch(function (error) {
            });
    }

    return (
        <section className="dashboard-section">
            <div className="row dashboard-div ">
                <div className="col-md-3 sidebar ">
                    <Sidebar />
                </div>
                <div className="col-md-9 dashboard-work-div">
                    <h2 className="dashboard-heading">Add Service</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <h6>Service Name</h6>
                        <input className="input-space" name="name" defaultValue="name" ref={register} />
                        <br />
                        <h6> Service Charge</h6>
                        <input className="input-space" name="charge" defaultValue="charge" ref={register} />
                        <br />
                        <h6>Upload Image</h6>
                        <input className="input-space" type="file" name="exampleRequired" onChange={handleImageUpload} />
                        <br />
                        <input className="submit-button" type="submit" />
                    </form>
                </div>
            </div>
        </section>
    );
};

export default AddService;
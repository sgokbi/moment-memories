import React from 'react';
import { useHistory } from 'react-router';
import "./ServiceDetails.css";

const ServiceDetails = (props) => {
    const { name, imageURL, charge, _id } = props.service;
    const history = useHistory();

    const handleBook = id => {
        const url = `/service/${id}`;
        history.push(url);
    }

    return (
        <div className="col-md-4  d-flex align-items-center service-details-div">
            <div>
                <img className="" src={imageURL} alt="" />
            </div>
            <div className="ms-3">
                <p>{name}</p>
                <p>Charge:{charge}</p>
                <button className="book-now" onClick={() => handleBook(_id)}>Book This Service</button>
            </div>

        </div>

    );
};

export default ServiceDetails;
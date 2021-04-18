import React from 'react';
import ServiceDetails from '../ServiceDetails/ServiceDetails';
import "./Services.css";
import { useState } from 'react';
import { useEffect } from 'react';


const Services = () => {

    const [servicesList, setServicesList] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5500/services")
            .then(res => res.json())
            .then(data => setServicesList(data))
    }, [])

    return (

        <div>
            <h3 className="text-center service-heading">OUR SERVICES</h3>
            <div className="row p-5 mt-4 mb-5  services-div">
                {
                    servicesList.map(service => <ServiceDetails service={service}></ServiceDetails>)
                }
            </div>
        </div>
    );
};

export default Services;
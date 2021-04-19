import React from 'react';
import { useState, useContext } from 'react';
import { useEffect } from 'react';
import { useForm } from "react-hook-form";
import { useParams } from 'react-router';
import { UserContext } from '../../../App';
import ProcessPayment from '../ProcessPayment/ProcessPayment';
import Sidebar from '../Sidebar/Sidebar';


const Book = () => {
    const { id } = useParams();
    const [booking, setBooking] = useState({});
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [bookingData, setBookingData] = useState(null);

    const onSubmit = data => {
        setBookingData(data);
    };

    const handlePaymentSuccess = paymentId => {
        const bookingData = {
            paymentId,
            name: loggedInUser.name,
            email: loggedInUser.email,
            serviceName: booking.name,
            serviceCharge: booking.charge
        };
        // add booking to database API
        const url = `https://salty-earth-74088.herokuapp.com/addBooking`
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(bookingData)
        })
            .then(res => res.json())
            .then(data => {
                data && alert('You have ordered successfully');
            })
    }

    useEffect(() => {
        //API  for specific service by getting id for booking
        const url = `https://salty-earth-74088.herokuapp.com/service/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setBooking(data);
            })
    }, [id])

    return (
        <section className="dashboard-section">
            <div className="row dashboard-div ">
                <div className="col-md-3 sidebar ">
                    <Sidebar />
                </div>
                <div className="col-md-9 dashboard-work-div">
                    <h2 className="dashboard-heading">You are Booking...</h2>
                    <h4> Service Name: {booking.name}</h4>
                    <form style={{ display: bookingData ? "none" : "block" }} onSubmit={handleSubmit(onSubmit)}>
                        <h6>Name</h6>
                        <input className="input-space" name=" name" defaultValue={loggedInUser.name} ref={register} />
                        <br />
                        <h6 >Email</h6>
                        <input className="input-space" name="email" defaultValue={loggedInUser.email} ref={register} />
                        <br />
                        <h6>Booking Title</h6>
                        <input className="input-space" name="serviceName" defaultValue={booking.name} ref={register} />
                        <br />
                        <h6>Service Charge</h6>
                        <input className="input-space" name="charge" defaultValue={booking.charge} ref={register} />
                        <br />
                        <input className="submit-button" type="submit" />
                    </form>
                    <div style={{ display: bookingData ? "block" : "none" }} className="w-50">
                        <h6>Pay With Credit Card</h6>
                        <ProcessPayment handlePayment={handlePaymentSuccess}></ProcessPayment>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Book;
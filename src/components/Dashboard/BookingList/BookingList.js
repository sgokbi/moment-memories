import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import Sidebar from '../Sidebar/Sidebar';


const BookingList = () => {
    const [bookings, setBookings] = useState([]);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    useEffect(() => {
        fetch("http://localhost:5500/bookings?email=" + loggedInUser.email)
            .then(res => res.json())
            .then(data => setBookings(data))
    }, [])

    return (
        <section className="dashboard-section">
            <div className="row dashboard-div ">
                <div className="col-md-3 sidebar ">
                    <Sidebar />

                </div>
                <div className="col-md-9 dashboard-work-div">
                    <h2 className="dashboard-heading"> Your Booking List</h2>
                    <h3>Hello, {loggedInUser.displayName}! You have {bookings.length} bookings.</h3>
                    {
                        bookings.map(book => <li>{book.serviceName} </li>)
                    }
                </div>
            </div>
        </section>
    );
};

export default BookingList;
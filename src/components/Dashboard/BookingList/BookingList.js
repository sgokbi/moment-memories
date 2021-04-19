import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import Sidebar from '../Sidebar/Sidebar';


const BookingList = () => {
    const [bookings, setBookings] = useState([]);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    useEffect(() => {
        fetch("https://salty-earth-74088.herokuapp.com/bookings?email=" + loggedInUser.email)
            .then(res => res.json())
            .then(data => setBookings(data))
    }, [loggedInUser.email])

    return (
        <section className="dashboard-section">
            <div className="row dashboard-div ">
                <div className="col-md-3 sidebar ">
                    <Sidebar />
                </div>
                <div className="col-md-9 dashboard-work-div">
                    <h2 className="dashboard-heading">Booking List</h2>
                    {
                        bookings.map(book => <li>{book.serviceName} </li>)
                    }
                </div>
            </div>
        </section>
    );
};

export default BookingList;
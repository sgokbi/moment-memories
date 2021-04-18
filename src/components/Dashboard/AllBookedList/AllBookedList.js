import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import Sidebar from '../Sidebar/Sidebar';


const AllBookedList = () => {
    const [bookings, setBookings] = useState([]);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    useEffect(() => {
        fetch("http://localhost:5500/bookings")
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
                    <h2 className="dashboard-heading">All Booked List</h2>
                    <h3>All Booked Items are {bookings.length}</h3>
                    {
                        bookings.map(book => <li>{book.serviceName} </li>)
                    }
                </div>
            </div>
        </section>
    );
};

export default AllBookedList;
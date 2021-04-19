import React, { useEffect, useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';


const AllBookedList = () => {
    const [allBookings, setAllBookings] = useState([]);


    useEffect(() => {
        fetch("http://localhost:5500/bookings")
            .then(res => res.json())
            .then(data => {
                setAllBookings(data)
                console.log(data);
            })

    }, [])

    return (
        <section className="dashboard-section">
            <div className="row dashboard-div ">
                <div className="col-md-3 sidebar ">
                    <Sidebar />

                </div>
                <div className="col-md-9 dashboard-work-div">
                    <h2 className="dashboard-heading">All Booked List</h2>
                    <h3>All Booked Items are {allBookings.length}</h3>
                    {
                        allBookings.map(book => <li>{book.serviceName} </li>)
                    }
                </div>
            </div>
        </section>
    );


};

export default AllBookedList;
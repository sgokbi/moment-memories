import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import "./Sidebars.css";
import addService from "../../../images/plus 1.png";
import makeAdmin from "../../../images/makeAdmin.png";
import manage from "../../../images/grid 1.png";
import book from "../../../images/shopping-cart 1.png";
import bookingList from "../../../images/bookingList.jpg";
import review from "../../../images/reviewIcon.jpg";
import { UserContext } from '../../../App';


const Sidebar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        //API to check if this email is admin or not
        fetch('https://salty-earth-74088.herokuapp.com/isAdmins', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email: loggedInUser.email })
        })
            .then(res => res.json())
            .then(data => {
                setIsAdmin(data);
            })
    }, [loggedInUser.email])

    return (
        <div>
            <Link to="/book">
                <h5 className="sidebar-headings"><img className="sidebar-icons" src={book} alt="" />Book</h5>
            </Link>
            <Link to="/bookingList">
                <h5 className="sidebar-headings"><img className="sidebar-icons" src={bookingList} alt="" />Booking List</h5>
            </Link>
            <Link to="/addReview">
                <h5 className="sidebar-headings"><img className="sidebar-icons" src={review} alt="" />Review</h5>
            </Link>

            { isAdmin && <div>
                <Link to="/addService">
                    <h5 className="sidebar-headings"><img className="sidebar-icons" src={addService} alt="" />Add Service</h5>
                </Link>
                <Link to="/makeAdmin">
                    <h5 className="sidebar-headings"><img className="sidebar-icons" src={makeAdmin} alt="" /> Make Admin</h5>
                </Link>
                <Link to="/manageService">
                    <h5 className="sidebar-headings"><img className="sidebar-icons" src={manage} alt="" />Manage Service</h5>
                </Link>
            </div>
            }

            <Link to="/home"> <button className="button mt-5">Back To Home</button></Link>
        </div>
    );
};

export default Sidebar;
import React from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css";

const Navbar = () => {

    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <Link class="navbar-brand ms-5 logo" style={{ color: "rgb(201, 8, 191)" }} href="#">Moment Memories</Link>
            <div class="container-fluid">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <Link class="nav-link ms-5" to="/home">Home</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link ms-5" to="/about">About Us</Link>
                        </li>

                        <li class="nav-item">
                            <Link class="nav-link ms-5" to="/dashboard">Dashboard</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link ms-5" to="/admin">Admin</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link ms-5 me-5 pe-5 ps-5 bg-success text-white" to="/login">Login</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
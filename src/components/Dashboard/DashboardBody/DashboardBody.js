import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import "./DashboardBody.css";

const AddService = () => {

    return (
        <section className="dashboard-section">
            <div className="row dashboard-div ">
                <div className="col-md-3 sidebar ">
                    <Sidebar />
                </div>
                <div className="col-md-9 dashboard-work-div">
                    <h2 className="dashboard-heading">Choose Your Work From Sidebar</h2>
                </div>
            </div>
        </section>
    );
};

export default AddService;

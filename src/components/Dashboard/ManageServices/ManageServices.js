import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import { useState } from 'react';
import { useEffect } from 'react';
import "./ManageServices.css";
import DeleteManage from '../DeleteMaange/DeleteManage';


const ManageServices = () => {
    const [servicesList, setServicesList] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5500/services")
            .then(res => res.json())
            .then(data => setServicesList(data))
    }, [servicesList])

    return (
        <section className="">
            <div className="row ">
                <div className="col-md-3 sidebar ">
                    <Sidebar />
                </div>

                <div className="col-md-9 manage-div ">
                    <h2 className="dashboard-heading">Manage Services</h2>
                    {
                        servicesList.map(service => <DeleteManage service={service}></DeleteManage>)
                    }
                </div>
            </div>
        </section>
    );
};

export default ManageServices;
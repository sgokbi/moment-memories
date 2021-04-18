import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import Sidebar from '../Sidebar/Sidebar';

const MakeAdmin = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <section className="dashboard-section">
            <div className="row dashboard-div ">
                <div className="col-md-3 sidebar ">
                    <Sidebar />
                </div>

                <div className="col-md-9 dashboard-work-div">
                    <h2 className="dashboard-heading">Add an Admin</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <h6 >Email</h6>
                        <input className="input-space" name="email" defaultValue="email" ref={register} />
                        <br />
                        <input className="submit-button" type="submit" />
                    </form>
                </div>
            </div>
        </section>
    );
};

export default MakeAdmin;
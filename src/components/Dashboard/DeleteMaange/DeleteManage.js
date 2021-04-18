import React from 'react';
import "./DeleteManage.css";

const DeleteManage = (props) => {
    const { name, charge, _id } = props.service;

    const handleDelete = id => {

        fetch(`http://localhost:5500/delete/${id}`, {
            method: "DELETE",
        })
            .then(res => res.json())
            .then(data => {
            })
    }


    return (
        <div className="manage-book-list">
            <p>Service Name: {name}   </p>
            <p> Charge: {charge}</p>

            <button className="btn-success" onClick={() => handleDelete(_id)}>Delete</button>
        </div>
    );
};

export default DeleteManage;
import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <section className="text-center contact-div" >
            <div>
                <h2>Contact With Us</h2>
            </div>
            <div className="contact-form">
                <form action=" ">
                    <div className="form-group mt-3">
                        <input type="text" className="form-control" placeholder="Email Address *" />
                    </div>
                    <div className="form-group mt-3">
                        <textarea name="" className="form-control" id="" cols="5" rows="5" placeholder="Message *"></textarea>
                    </div>
                    <div className="form-group text-center mt-3">
                        <button type="button" className="btn btn-primary"> Submit </button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default Contact;
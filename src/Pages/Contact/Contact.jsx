import React from "react";
import "./Contact.css";
import { useForm } from "react-hook-form";

const Contact = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => console.log(data);
    return (
        <div className="contact-page">
            <div className="container">
                <h1 className="text-center title">Contact</h1>
                <div className="row">
                    <div className="col-lg-6 contact-info">
                        <h5>🗺 ADDRESS</h5>
                        <p>Khalishpur, Khulna, Bangladesh</p>
                        <h5>💌 EMAIL</h5>
                        <p>support@chisfis.com</p>
                        <h5>☎ PHONE</h5>
                        <p>+880 181 975 8093</p>
                        <h5>🌏 SOCIALS</h5>
                        <div className="social-links">
                            <ul>
                                <li>
                                    <i className="fab fa-facebook-f"></i>
                                </li>
                                <li>
                                    <i className="fab fa-twitter"></i>
                                </li>
                                <li>
                                    <i className="fab fa-instagram"></i>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="contact-form">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <label htmlFor="name">Name</label>
                                <input {...register("name")} />
                                <label htmlFor="email">Email</label>
                                <input {...register("email")} />
                                <label htmlFor="message">Message</label>
                                <textarea {...register("message")} />
                                <input
                                    className="btn btn-contact"
                                    type="submit"
                                />
                            </form>
                        </div>
                    </div>
                </div>
                <div className="row newsletter-section">
                    <div className="col-lg-6 newsletter">
                        <h1>Join our newsletter 🎉</h1>
                        <p>
                            Read and share new perspectives on just about any
                            topic. Everyone’s welcome.
                        </p>
                        <ol>
                            <li>Get more discount</li>
                            <li>Get premium magazines</li>
                        </ol>
                        <form className="subscribe">
                            <input
                                type="email"
                                placeholder="Enter your email"
                            />
                            <button className="btn btn-subs">
                                <i className="fad fa-arrow-right"></i>
                            </button>
                        </form>
                    </div>
                    <div className="col-lg-6">
                        <div className="contact-img">
                            <img
                                src="https://i.ibb.co/FsJxwbL/SVG-subcribe2-efb832b2.png"
                                alt="contact illustration"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;

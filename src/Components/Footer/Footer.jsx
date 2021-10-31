import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer>
            <div className="footer-top">
                <div className="container">
                    <div className="row top-area shadow bg-body rounded">
                        <div className="col-lg-4">
                            <div className="footer-info">
                                <i className="fal fa-map-marker-alt"></i>
                                <div className="info">
                                    <p>Our Address</p>
                                    <h6>Drive Chicago, IL 60607</h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="footer-info">
                                <i className="fal fa-phone"></i>
                                <div className="info">
                                    <p>Call Us</p>
                                    <h6>360-779-2228</h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="footer-info">
                                <i className="far fa-envelope"></i>
                                <div className="info">
                                    <p>Our Mail</p>
                                    <h6>example@example.com</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* 2nd section  */}
            <div className="container">
                <div className="row content-area">
                    <div className="col-lg-4">
                        <img
                            src="https://i.ibb.co/X42cVHm/logo.png"
                            alt="logo"
                        />
                        <p>
                            It is a long established fact that a reader will be
                            distracted by the readable.
                        </p>
                        <ul className="footer-social">
                            <li>
                                <i className="fab fa-facebook-f"></i>
                            </li>
                            <li>
                                <i className="fab fa-linkedin-in"></i>
                            </li>
                            <li>
                                <i className="fab fa-twitter"></i>
                            </li>
                            <li>
                                <i className="fab fa-instagram"></i>
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-2">
                        <h3>Services</h3>
                        <ul className="service">
                            <li>
                                <Link to="/">Cars</Link>
                            </li>
                            <li>
                                <Link to="/">Hotels</Link>
                            </li>
                            <li>
                                <Link to="/">Flights</Link>
                            </li>
                            <li>
                                <Link to="/">Tours</Link>
                            </li>
                            <li>
                                <Link to="/">Packages</Link>
                            </li>
                            
                        </ul>
                    </div>
                    <div className="col-lg-2">
                        <h3>Useful Links</h3>
                        <ul className="service">
                            <li>
                                <Link to="/home">Home</Link>
                            </li>
                            <li>
                                <Link to="/about">About</Link>
                            </li>
                            <li>
                                <Link to="/">Support</Link>
                            </li>
                            <li>
                                <Link to="/">News</Link>
                            </li>
                            <li>
                                <Link to="/hotels">Hotels</Link>
                            </li>
                            <li>
                                <Link to="/contact">Contact Us</Link>
                            </li>
                        </ul>
                    </div>
                    {/* subscribe area  */}
                    <div className="col-lg-4 footer-form">
                        <h3>Subscribe</h3>
                        <form>
                            <input
                                type="email"
                                className="form-control"
                                id="exampleInputEmail1"
                                placeholder="Email..."
                            ></input>
                            <button className="btn btn-primary btn-sub">
                                Submit
                            </button>
                            <p>
                                Get The Latest Updates via email. Any time you
                                may unsubscribe
                            </p>
                        </form>
                    </div>
                </div>
            </div>
            {/* footer bottom area  */}
            <div className="footer-bottom container">
                <div className="row">
                    <div className="col-lg-6">
                        <p className="copy-right">
                            © Website 2022 | All Rights Reserved
                        </p>
                    </div>
                    <div className="col-lg-6">
                        <ul className="bottom-links">
                            <li>
                                <Link to="/">Privacy</Link>
                            </li>
                            <li>
                                <Link to="/">Terms</Link>
                            </li>
                            <li>
                                <Link to="/">Sitemap</Link>
                            </li>
                            <li>
                                <Link to="/">Help</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

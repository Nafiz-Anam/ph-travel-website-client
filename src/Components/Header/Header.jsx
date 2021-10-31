import React from "react";
import "./Header.css";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../../Firebase/Hooks/useAuth";

const Header = () => {
    const { user, logout } = useAuth();

    return (
        <header>
            <div className="navigation container">
                <nav className="navbar navbar-expand-lg">
                    <div className="container-fluid">
                        <span className="navbar-brand">
                            <img
                                className="logo"
                                src="https://i.ibb.co/X42cVHm/logo.png"
                                alt="logo"
                            />
                        </span>
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            {/* <span className="navbar-toggler-icon"></span> */}
                            <i class="fad fa-bars"></i>
                        </button>
                        <div
                            className="collapse navbar-collapse"
                            id="navbarSupportedContent"
                        >
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <span className="nav-link">
                                        <NavLink to="/">Home</NavLink>
                                    </span>
                                </li>
                                <li className="nav-item">
                                    <span className="nav-link">
                                        <NavLink to="/hotels">Hotels</NavLink>
                                    </span>
                                </li>
                                <li className="nav-item">
                                    <span className="nav-link">
                                        <NavLink to="/about">About US</NavLink>
                                    </span>
                                </li>
                                <li className="nav-item">
                                    <span className="nav-link">
                                        <NavLink to="/contact">
                                            Contact Us
                                        </NavLink>
                                    </span>
                                </li>
                                {/* conditional rendering for auth links  */}
                                {/* before login user  */}
                                {!user?.email && (
                                    <li className="  nav-item">
                                        <Link to="/login">
                                            <button className="nav-link login-btn btn">
                                                Login
                                            </button>
                                        </Link>
                                    </li>
                                )}
                                {/* admin condition  */}
                                {user?.email === "admin@chisfis.com" && (
                                    <li className=" nav-item">
                                        <Link to="/admin">
                                            <button className="nav-link register-btn btn">
                                                Admin
                                            </button>
                                        </Link>
                                    </li>
                                )}
                                {/* after login user  */}
                                {user?.email &&
                                    user?.email !== "admin@chisfis.com" && (
                                        <li className="nav-item">
                                            <span className="nav-link user-name">
                                                <Link to="/profile">
                                                    {user?.displayName
                                                        ? user?.displayName
                                                        : "Anonymous"}
                                                </Link>
                                            </span>
                                        </li>
                                    )}
                                {/* {user?.email &&
                                    user?.email !== "admin@chisfis.com" && (
                                        <li className="nav-item">
                                            <span className="nav-link">
                                                <NavLink to="/profile">
                                                    Profile
                                                </NavLink>
                                            </span>
                                        </li>
                                    )} */}
                                {user?.email && (
                                    <li className="nav-item">
                                        <button
                                            onClick={logout}
                                            className="btn btn-danger logout-btn"
                                        >
                                            Log Out
                                        </button>
                                    </li>
                                )}
                                {/* conditional rendering for auth links  */}
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Header;

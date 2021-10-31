import React from "react";
import "./Notfound.css";

const Notfound = () => {
    return (
        <div className="pb-5">
            {/* body area here  */}
            <div className="container content-404 text-center">
                <h1>404</h1>
                <h3>Sorry but we couldn't find this page</h3>
                <p>
                    This page you are looking for does not exist
                    <b><u> Report this</u></b>
                </p>
                <div className="notfound-form pt-5">
                    <form className="d-flex justify-content-center">
                        <div>
                            <input
                                type="text"
                                placeholder="Enter your search"
                                className="form-control notfound-input"
                                id="search"
                            />
                        </div>
                        <button className="btn notfound-btn">Send</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Notfound;

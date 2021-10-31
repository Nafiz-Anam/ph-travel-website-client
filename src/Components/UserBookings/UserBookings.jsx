import React, { useState } from "react";
import "./UserBookings.css";

const UserBookings = (props) => {
    // console.log(props);
    const { hotelname, status, image, _id } = props.Hotel;
    // const [allBookings, setAllBookings] = useState([]);
    //delete single booking
    const handleDelete = (id) => {
        fetch(`http://localhost:5000/booking/${id}`, {
            method: "DELETE",
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.deletedCount > 0) {
                    alert("Canceled Successfully.");
                    
                    // const remainingBookings = allBookings.filter(
                    //     (booking) => booking._id !== id
                    // );
                    // setAllBookings(remainingBookings);
                }
            });
    };
    return (
        <div className="col-lg-6">
            <div className="main-card shadow">
                <div className="card-img">
                    <img src={image} alt="event" />
                </div>
                <div className="card-details">
                    <h1>{hotelname}</h1>
                    <p>{status}</p>
                    <div className="cancel-btn">
                        <button
                            onClick={() => {
                                handleDelete(_id);
                            }}
                            className="btn btn-danger"
                        >
                            Cancel
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserBookings;

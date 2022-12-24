import React, { useEffect, useState } from "react";
import UserBookings from "../../Components/UserBookings/UserBookings";
import "./Profile.css";
import useAuth from "../../Firebase/Hooks/useAuth";

const Profile = () => {
    const { user } = useAuth();
    // fetching specific data  here
    const [allBookings, setAllBookings] = useState([]);
    useEffect(() => {
        fetch("https://chis-fis-server.onrender.com/booking")
            .then((res) => res.json())
            .then((data) => {
                const specificBooking = data.filter(
                    (booking) => booking.email === user.email
                );
                setAllBookings(specificBooking);
                // console.log(data);
            });
    }, []);
    // deleting a booking
    const handleDelete = (id) => {
        const proceed = window.confirm("Are you sure, you want to cancel?");
        if (proceed) {
            fetch(`https://chis-fis-server.onrender.com/booking/${id}`, {
                method: "DELETE",
            })
                .then((res) => res.json())
                .then((data) => {
                    if (data.deletedCount > 0) {
                        alert("Canceled Successfully.");
                        const remainingBookings = allBookings.filter(
                            (booking) => booking._id !== id
                        );
                        setAllBookings(remainingBookings);
                    }
                });
        }
    };
    return (
        <div className="profile-page">
            <div className="container">
                <h1 className="profile-title text-center">
                    Your Booking {user.displayName}
                </h1>
                {/* <div className="row">
                    {allBookings.map((hotel) => (
                        <UserBookings Hotel={hotel} key={hotel._id} />
                    ))}
                </div> */}
                <div className="booking-list">
                    <h1>All Bookings</h1>
                    {/* mobile bookings  */}
                    <div className="mobile-booking">
                        <div className="row">
                            <div className="col-sm-12">
                                {allBookings.map((booking) => (
                                    <div
                                        key={booking?._id}
                                        className="card m-4"
                                    >
                                        <img
                                            src={booking?.image}
                                            className="card-img-top"
                                            alt="..."
                                        />
                                        <div className="card-body">
                                            <h5 className="card-title">
                                                {booking?.hotelname}
                                            </h5>
                                            <p className="card-text">
                                                Booked By :{" "}
                                                <b>{booking?.name}</b>
                                            </p>
                                            <p className="card-text">
                                                Email : <b>{booking?.email}</b>
                                            </p>
                                            <p className="card-text">
                                                Status : {booking?.status}
                                            </p>
                                            <div className="buttons mt-3">
                                                <button
                                                    onClick={() => {
                                                        handleDelete(
                                                            booking._id
                                                        );
                                                    }}
                                                    className="btn btn-danger mx-1"
                                                >
                                                    Cancel
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    {/* mobile bookings  */}
                    <table className="booking-table">
                        <thead className="table-list ">
                            <tr>
                                <td>Name</td>
                                <td>Email ID</td>
                                <td>Registration Date</td>
                                <td>Booked Item</td>
                                <td>Action</td>
                                <td>Status</td>
                            </tr>
                        </thead>
                        <tbody>
                            {allBookings.map((booking) => (
                                <tr key={booking?._id}>
                                    <td>{booking?.name}</td>
                                    <td>{booking?.email}</td>
                                    <td>20/07/2021</td>
                                    <td>{booking?.hotelname}</td>
                                    <td>
                                        <button
                                            onClick={() => {
                                                handleDelete(booking._id);
                                            }}
                                            className="btn btn-danger mx-1"
                                        >
                                            X
                                        </button>
                                    </td>
                                    <td>{booking?.status}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Profile;

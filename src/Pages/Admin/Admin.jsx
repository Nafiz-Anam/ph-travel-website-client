import React, { useEffect, useState } from "react";
import "./Admin.css";
import { useForm } from "react-hook-form";

const Admin = () => {
    const { register, handleSubmit, reset } = useForm();
    const [allBookings, setAllBookings] = useState([]);
    const onSubmit = (data) => {
        console.log(data);
        fetch("https://gruesome-beast-12739.herokuapp.com/hotels", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.insertedId) {
                    alert("Successfully added new listing.");
                    reset();
                }
            });
    };
    // fetching all bookings
    // fetching data  here
    // const [allBookings, setAllBookings] = useState([]);
    useEffect(() => {
        fetch("https://gruesome-beast-12739.herokuapp.com/booking")
            .then((res) => res.json())
            .then((data) => {
                setAllBookings(data);
                // console.log(data);
            });
    }, []);
    //delete single booking
    const handleDelete = (id) => {
        const proceed = window.confirm("Are you sure, you want to cancel?");
        if (proceed) {
            fetch(`https://gruesome-beast-12739.herokuapp.com/booking/${id}`, {
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
    // single data
    const [hotel, setHotel] = useState({});
    // update status
    const handleStatus = (id) => {
        fetch(`https://gruesome-beast-12739.herokuapp.com/hotels/${id}`)
            .then((res) => res.json())
            .then((data) => {
                // console.log(data);
                setHotel(data);
            });
        const updatedStatus = { ...hotel };
        updatedStatus.status = "Approve";
        setHotel(updatedStatus);
        fetch(`https://gruesome-beast-12739.herokuapp.com/booking/${id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(updatedStatus),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.modifiedCount > 0) {
                    alert("Approved Successfully.");
                    fetch("https://gruesome-beast-12739.herokuapp.com/booking")
                        .then((res) => res.json())
                        .then((data) => {
                            setAllBookings(data);
                            // console.log(data);
                        });
                    // const remainingBookings = allBookings.filter();
                    // setAllBookings(remainingBookings);
                }
            });
    };
    return (
        <div className="admin-page">
            <div className="container">
                <div className="d-flex align-items-start admin-panel">
                    <div
                        className="nav flex-column me-3 menu-side"
                        id="v-pills-tab"
                        role="tablist"
                        aria-orientation="vertical"
                    >
                        <button
                            className="nav-link active btn"
                            id="v-pills-home-tab"
                            data-bs-toggle="pill"
                            data-bs-target="#v-pills-home"
                            type="button"
                            role="tab"
                            aria-controls="v-pills-home"
                            aria-selected="true"
                        >
                            <i className="fal fa-user-friends"></i> All Bookings
                        </button>
                        <button
                            className="nav-link btn"
                            id="v-pills-profile-tab"
                            data-bs-toggle="pill"
                            data-bs-target="#v-pills-profile"
                            type="button"
                            role="tab"
                            aria-controls="v-pills-profile"
                            aria-selected="false"
                        >
                            <i className="fal fa-plus"></i> All new Listing
                        </button>
                    </div>
                    <div
                        className="tab-content content-side"
                        id="v-pills-tabContent"
                    >
                        <div
                            className="tab-pane fade show active"
                            id="v-pills-home"
                            role="tabpanel"
                            aria-labelledby="v-pills-home-tab"
                        >
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
                                                            <b>
                                                                {booking?.name}
                                                            </b>
                                                        </p>
                                                        <p className="card-text">
                                                            Email :{" "}
                                                            <b>
                                                                {booking?.email}
                                                            </b>
                                                        </p>
                                                        <p className="card-text">
                                                            Status :{" "}
                                                            {booking?.status}
                                                        </p>
                                                        <div className="buttons mt-3">
                                                            <button
                                                                onClick={() =>
                                                                    handleStatus(
                                                                        booking._id
                                                                    )
                                                                }
                                                                className="btn btn-success mx-1"
                                                            >
                                                                Approve
                                                            </button>
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
                                                        onClick={() =>
                                                            handleStatus(
                                                                booking._id
                                                            )
                                                        }
                                                        className="btn btn-success mx-1"
                                                    >
                                                        Approve
                                                    </button>
                                                    <button
                                                        onClick={() => {
                                                            handleDelete(
                                                                booking._id
                                                            );
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
                        <div
                            className="tab-pane fade event"
                            id="v-pills-profile"
                            role="tabpanel"
                            aria-labelledby="v-pills-profile-tab"
                        >
                            <div className="add-event">
                                <h1>Add Event</h1>
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <div className="row add-form">
                                        <div className="col-lg-6 col-sm-12 right-side">
                                            <label htmlFor="eventTitle">
                                                Hotel
                                            </label>
                                            <input
                                                type="text"
                                                id="eventTitle"
                                                placeholder="Hotel Title"
                                                {...register("eventTitle", {
                                                    required: true,
                                                })}
                                            />
                                            <label htmlFor="bedcount">
                                                Bed Count
                                            </label>
                                            <input
                                                type="text"
                                                id="bedcount"
                                                placeholder="Bed Count"
                                                {...register("bedcount", {
                                                    required: true,
                                                })}
                                            />
                                            <label htmlFor="price">Price</label>
                                            <input
                                                type="text"
                                                id="price"
                                                placeholder="Price"
                                                {...register("price", {
                                                    required: true,
                                                })}
                                            />
                                            <label htmlFor="description">
                                                Description
                                            </label>
                                            <textarea
                                                type="text"
                                                id="description"
                                                placeholder="Enter Description"
                                                {...register("description")}
                                            />
                                        </div>
                                        <div className="col-lg-6 col-sm-12 left-side">
                                            <label htmlFor="rating">
                                                Ratings
                                            </label>
                                            <input
                                                type="text"
                                                id="ratings"
                                                placeholder="Input Ratings"
                                                {...register("ratings")}
                                            />
                                            <label htmlFor="address">
                                                Address
                                            </label>
                                            <input
                                                type="text"
                                                id="address"
                                                placeholder="Address"
                                                {...register("address")}
                                            />
                                            <label htmlFor="banner">
                                                Banner
                                            </label>
                                            <input
                                                type="text"
                                                id="banner"
                                                placeholder="Image Link"
                                                {...register("image")}
                                            />
                                        </div>
                                    </div>
                                    <div className="submit-btn">
                                        <input
                                            className="btn btn-event"
                                            type="submit"
                                            value="Submit"
                                        />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Admin;

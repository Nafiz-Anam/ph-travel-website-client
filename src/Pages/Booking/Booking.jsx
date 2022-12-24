import React from "react";
import "./Booking.css";
import { useForm } from "react-hook-form";
import useAuth from "../../Firebase/Hooks/useAuth";
import { useHistory } from "react-router-dom";

const Booking = () => {
    // importing login methods here
    const { user, saveDetails } = useAuth();
    // console.log(saveDetails);
    const { register, handleSubmit } = useForm();
    const history = useHistory();
    const onSubmit = (data) => {
        // console.log(data);
        fetch("https://chis-fis-server.onrender.com/booking", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.insertedId) {
                    alert("Booking Successful..!!");
                    history.push("/profile");
                }
            });
    };
    return (
        <div className="volunteer-register">
            <div className="container volunteer-container">
                <div className="volunteer-reg-form shadow">
                    <h1>Confirm Booking</h1>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input
                            type="text"
                            // placeholder="Full Name"
                            defaultValue={user?.displayName}
                            {...register("name", {})}
                        />
                        <input
                            type="email"
                            // placeholder="Email"
                            defaultValue={user?.email}
                            {...register("email")}
                        />
                        <input
                            type="text"
                            placeholder="Hotel Name"
                            defaultValue={saveDetails?.eventTitle}
                            {...register("hotelname")}
                        />
                        <h1>Pay with</h1>
                        <input
                            type="text"
                            placeholder="Card number"
                            {...register("comment")}
                        />
                        <input
                            type="text"
                            // placeholder="Holder name"
                            defaultValue={user?.displayName}
                            {...register("card-owner")}
                        />
                        <div className="payment-card-details">
                            <div className="exp-date">
                                <input
                                    type="text"
                                    placeholder="Expiration date"
                                    {...register("card-expire")}
                                />
                            </div>
                            <div className="cvc-num">
                                <input
                                    type="text"
                                    placeholder="CVC"
                                    {...register("card-cvc")}
                                />
                            </div>
                        </div>
                        <input
                            type="text"
                            placeholder="Your Comment"
                            {...register("comment")}
                        />
                        <input
                            className="hidden-field"
                            type="text"
                            defaultValue="Pending"
                            {...register("status")}
                        />
                        <input
                            className="hidden-field"
                            type="text"
                            defaultValue={saveDetails?.image}
                            {...register("image")}
                        />
                        <input
                            className="btn btn-confirm"
                            type="submit"
                            value="Pay & Confirm"
                        />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Booking;

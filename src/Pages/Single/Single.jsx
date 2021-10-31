// import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import "./Single.css";
import { useEffect, useState } from "react";
import useAuth from "../../Firebase/Hooks/useAuth";

const Single = () => {
    const { id } = useParams();
    const [hotel, setHotel] = useState({});
    const { setSaveDetails } = useAuth();

    useEffect(() => {
        fetch(`https://gruesome-beast-12739.herokuapp.com/hotels/${id}`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setHotel(data);
            });
    }, []);

    const history = useHistory();

    const handleBooking = (hotelData) => {
        // console.log(event);
        setSaveDetails(hotelData);
        history.push("/booking");
    };

    return (
        <div className="single-details">
            {/* data loads here  */}
            <div className="details-container">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 details-area">
                            <div className="hotel-info row shadow bg-body ">
                                <div className="col-lg-7 col-sm-12">
                                    <img src={hotel?.image} alt="" />
                                </div>
                                <div className="col-lg-5 col-sm-12">
                                    <h1>{hotel?.eventTitle}</h1>
                                    <div className="mt-3 mb-3 star">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star-half"></i>{" "}
                                        <b>({hotel?.ratings})</b>
                                    </div>

                                    <p>
                                        <i class="fal fa-map-marker-alt"></i>{" "}
                                        {hotel?.address}
                                    </p>
                                </div>
                            </div>
                            <div className="desc">
                                <h1>Overview of {hotel?.eventTitle}</h1>
                                <p>{hotel?.description}</p>
                            </div>
                        </div>
                        {/* booking part area  */}
                        <div className="col-lg-4 ">
                            <div className="booking-form shadow bg-body ">
                                <h1>Booking Summary</h1>
                                <form>
                                    <div className="mb-3">
                                        <label
                                            htmlFor="formGroupExampleInput"
                                            className="form-label"
                                        >
                                            Entry
                                        </label>
                                        <input
                                            type="datetime-local"
                                            className="form-control"
                                            id="formGroupExampleInput"
                                            placeholder="07/20/2021"
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label
                                            htmlFor="formGroupExampleInput2"
                                            className="form-label"
                                        >
                                            Departure
                                        </label>
                                        <input
                                            type="datetime-local"
                                            className="form-control"
                                            id="formGroupExampleInput2"
                                            placeholder="08.30 PM"
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label
                                            htmlFor="guests"
                                            className="form-label"
                                        >
                                            Guest Count
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="guests"
                                            placeholder="Guest Count"
                                        />
                                    </div>

                                    <div>
                                        <button
                                            onClick={() => {
                                                handleBooking(hotel);
                                            }}
                                            className="btn btn-booking"
                                        >
                                            Confirm Booking
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        {/* booking part area  */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Single;

import React, { useEffect, useState } from "react";
import Card from "../../Components/Card/Card";
import "./Hotels.css";

const Hotels = () => {
    // fetching data  here
    const [allHotels, setAllHotels] = useState([]);
    useEffect(() => {
        fetch("https://chis-fis-server.onrender.com/hotels")
            .then((res) => res.json())
            .then((data) => setAllHotels(data));
    }, []);
    return (
        <div className="hotels-page">
            <div className="container">
                <div className="row banner-content">
                    <div className="col-lg-6">
                        <div className="banner">
                            <h1>
                                Experience the beauty the world has offer to
                                you.
                            </h1>
                            <p>
                                Accompanying us, you have a trip full of
                                experiences. With Chisfis, booking
                                accommodation, resort villas, hotels
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-6 banner-img">
                        <img
                            src="https://i.ibb.co/dpZP8hW/hero-right2-48e4cfdd.png"
                            alt="banner"
                        />
                    </div>
                </div>
                <div className="feature-places">
                    <h1>Best places to stay</h1>
                    <p>Popular places to stay that Chisfis has to offer</p>
                    <div className="row py-5">
                        <div className="col-lg-8 ctgs">
                            <span className="btn btn-ctg active">New York</span>
                            <span className="btn btn-ctg">Tokyo</span>
                            <span className="btn btn-ctg">Paris</span>
                            <span className="btn btn-ctg">London</span>
                        </div>
                        <div className="col-lg-4 view-all">
                            <button className="btn btn-view-all shadow">
                                View all {">>"}
                            </button>
                        </div>
                    </div>
                    <div className="places">
                        <div className="row">
                            {allHotels.map((hotel) => (
                                <Card Hotel={hotel} key={hotel._id} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hotels;

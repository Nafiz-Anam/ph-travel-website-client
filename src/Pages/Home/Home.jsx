import React, { useEffect, useState } from "react";
import "./Home.css";
import Card from "../../Components/Card/Card";

const Home = () => {
    // fetching data  here
    const [allHotels, setAllHotels] = useState([]);
    useEffect(() => {
        fetch("https://gruesome-beast-12739.herokuapp.com/hotels")
            .then((res) => res.json())
            .then((data) => setAllHotels(data));
    }, []);
    return (
        <section className="home-page">
            <div className="container">
                <div className="row banner-content">
                    <div className="col-lg-6">
                        <div className="banner">
                            <h1>Hotel, car & experiences</h1>
                            <p>
                                Accompanying us, you have a trip full of
                                experiences. With Chisfis, booking
                                accommodation, resort villas, hotels
                            </p>
                            <button className="btn btn-search">
                                Start your search
                            </button>
                        </div>
                    </div>
                    <div className="col-lg-6 banner-img">
                        <img
                            src="https://i.ibb.co/n6GfXLc/hero-right-ee78c0ff.png"
                            alt="banner"
                        />
                    </div>
                </div>
                <div className="location">
                    <h1>Heading of sections</h1>
                    <p>Descriptions for sections</p>
                    <div className="location-cards">
                        <div className="card">
                            <img
                                src="https://i.ibb.co/0C2JRKb/queen-of-liberty-statue-of-liberty-new-york-liberty-statue-64271.jpg"
                                alt=""
                            />
                            <h3>New York</h3>
                            <p>188,288 properties</p>
                        </div>
                        <div className="card">
                            <img
                                src="https://i.ibb.co/Z6WxTNB/pexels-photo-4151484.jpg"
                                alt=""
                            />
                            <h3>New York</h3>
                            <p>188,288 properties</p>
                        </div>
                        <div className="card">
                            <img
                                src="https://i.ibb.co/mtLZk7p/pexels-photo-739407.jpg"
                                alt=""
                            />
                            <h3>New York</h3>
                            <p>188,288 properties</p>
                        </div>
                        <div className="card">
                            <img
                                src="https://i.ibb.co/W2tTdNk/pexels-photo-7740160.jpg"
                                alt=""
                            />
                            <h3>New York</h3>
                            <p>188,288 properties</p>
                        </div>
                        <div className="card">
                            <img
                                src="https://i.ibb.co/1dnJsSK/pexels-photo-460672.jpg"
                                alt=""
                            />
                            <h3>New York</h3>
                            <p>188,288 properties</p>
                        </div>
                    </div>
                </div>
                {/* map area start  */}
                <div className="map-area">
                    <div className="row">
                        <div className="map-img col-lg-7">
                            <img
                                src="https://i.ibb.co/tP0D2Tn/our-features-d6902772.png"
                                alt=""
                            />
                        </div>
                        <div className="col-lg-5 map-info">
                            <p className="sub-head">BENNEFITS</p>
                            <h1>Happening cities</h1>
                            <div className="benefit">
                                <p className="tag">Advertising</p>
                                <h3>Cost-effective advertising</h3>
                                <p className="text">
                                    With a free listing, you can advertise your
                                    rental with no upfront costs
                                </p>
                            </div>
                            <div className="benefit">
                                <p className="tag">Exposure</p>
                                <h3>Reach millions with Chisfis</h3>
                                <p className="text">
                                    Millions of people are searching for unique
                                    places to stay around the world
                                </p>
                            </div>
                            <div className="benefit">
                                <p className="tag">Secure</p>
                                <h3>Secure and simple</h3>
                                <p className="text">
                                    A Holiday Lettings listing gives you a
                                    secure and easy way to take bookings and
                                    payments online
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* map area start  */}
                {/* feature place  */}
                <div className="feature-places">
                    <h1>Featured places to stay</h1>
                    <p>
                        Popular places to stay that Chisfis recommends for you
                    </p>
                    <div className="row py-5 ctgs">
                        <div className="col-lg-8  ctgs">
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
                            {allHotels.slice(0, 8).map((hotel) => (
                                <Card Hotel={hotel} key={hotel._id} />
                            ))}
                        </div>
                        <div className="text-center pt-5">
                            <button className="btn btn-search">
                                Show More
                            </button>
                        </div>
                    </div>
                </div>
                {/* feature place  */}
                <div className="works text-center">
                    <h1>How it work</h1>
                    <p className="sub-head">Keep calm & travel on</p>
                    <div className="work-cards">
                        <div className="card">
                            <img
                                src="https://i.ibb.co/849BgCR/HIW1-bbef046f.png"
                                alt=""
                            />
                            <h3>Book & relax</h3>
                            <p>
                                Let each trip be an inspirational journey, each
                                room a peaceful space
                            </p>
                        </div>
                        <div className="card">
                            <img
                                src="https://i.ibb.co/682wtPg/HIW2-f6857768.png"
                                alt=""
                            />
                            <h3>Book & relax</h3>
                            <p>
                                Let each trip be an inspirational journey, each
                                room a peaceful space
                            </p>
                        </div>
                        <div className="card">
                            <img
                                src="https://i.ibb.co/g38pfdK/HIW3-b650d652.png"
                                alt=""
                            />
                            <h3>Book & relax</h3>
                            <p>
                                Let each trip be an inspirational journey, each
                                room a peaceful space
                            </p>
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
                {/* explore by stay types  */}
                <div className="stay-type">
                    <h1>Explore by types of stays</h1>
                    <p className="sub-head">
                        Explore houses based on 10 types of stays
                    </p>
                    <div className="stay-cards">
                        <div className="card">
                            <img
                                src="https://i.ibb.co/tYRb0bB/pexels-photo-3613236.jpg"
                                alt=""
                            />
                            <h3>Dome House</h3>
                            <p>188,288 properties</p>
                        </div>
                        <div className="card">
                            <img
                                src="https://i.ibb.co/r32cgT3/pexels-photo-2581922.jpg"
                                alt=""
                            />
                            <h3>Nature House</h3>
                            <p>188,288 properties</p>
                        </div>
                        <div className="card">
                            <img
                                src="https://i.ibb.co/Kj7zCyW/pexels-photo-2351649.jpg"
                                alt=""
                            />
                            <h3>Wooden House</h3>
                            <p>188,288 properties</p>
                        </div>
                        <div className="card">
                            <img
                                src="https://i.ibb.co/pvYFcbG/pexels-photo-962464.jpg"
                                alt=""
                            />
                            <h3>Houseboat</h3>
                            <p>188,288 properties</p>
                        </div>
                        <div className="card">
                            <img
                                src="https://i.ibb.co/tpgmQCW/pexels-photo-248837.jpg"
                                alt=""
                            />
                            <h3>Farm House</h3>
                            <p>188,288 properties</p>
                        </div>
                    </div>
                </div>
                <div className="choose">
                    <div className="row choose-container">
                        <div className="col-lg-5 choose-txt">
                            <img
                                src="https://i.ibb.co/X42cVHm/logo.png"
                                alt="logo"
                            />
                            <h1>Why did you choose us?</h1>
                            <p>
                                Accompanying us, you have a trip full of
                                experiences. With Chisfis, booking
                                accommodation, resort villas, hotels, private
                                houses, apartments... becomes fast, convenient
                                and easy.
                            </p>
                            <button className="btn btn-author">
                                Become an author
                            </button>
                        </div>
                        <div className="col-lg-6 choose-img">
                            <img
                                src="https://i.ibb.co/x6C3nH7/Become-An-Author-Img-02703848.png"
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;

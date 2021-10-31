import React from "react";
import { Link } from "react-router-dom";
import "./Card.css";

const Card = (props) => {
    //  console.log(props);
    const { _id, eventTitle, image, bedcount, ratings, address, price } =
        props.Hotel;
    return (
        <div className="col-lg-3 my-3">
            <div className="card shadow-sm all-card">
                <img src={image} className="card-img-top" alt="events" />
                <div className="card-body">
                    <p className="bed-count">Entire cabin - {bedcount} beds</p>
                    <h2 className="title">{eventTitle}</h2>
                    <p className="address">
                        <i className="fal fa-map-marker-alt"></i> {address}
                    </p>
                </div>
                <div className="card-footer">
                    <div className="row footer-card">
                        <div className="col-6">
                            <h4 className="price">
                                $ {price}
                                <span>/night</span>
                            </h4>
                        </div>
                        <div className="col-6 rating-area">
                            <p className="ratings">
                                <i className="fas fa-star"></i> 4.8{" "}
                                <span>({ratings})</span>
                            </p>
                        </div>
                    </div>
                    <div className="buttons pb-2">
                        <Link to={`/hotels/${_id}`}>
                            <button className="btn btn-details">Details</button>
                        </Link>
                        <button className="btn btn-wish">
                            <i className="far fa-heart"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;

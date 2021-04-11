import React from "react";
import PropTypes from "prop-types";
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/swiper.scss';
function Card({slider}) {
    return (
        <div className="card">
            <img src={slider.imageUrl} className="card-img-top" alt="..." />
            <div className="card-body">
                <p className="card-text">{slider.label}</p>
            </div>
        </div>
    );
}


Card.defaultProps = {
    slider: PropTypes.object.isRequired
};

export default Card;

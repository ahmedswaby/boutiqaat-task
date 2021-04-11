import React , { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Skeleton from 'react-loading-skeleton';

// checkbox component to handle checked & unckecked functions
function HomeCarousel({slidersData}) {
    return (
        <>
            <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    {slidersData.banners.map((slide, ind) => (
                        <div key={slide.id} className={ind === 0 ? 'carousel-item active' : 'carousel-item'}>
                            {slide.imageUrl ? 
                            <img src={slide.imageUrl} className="d-block w-100" alt="..." />
                            :
                                <Skeleton count={10} />
                            }
                    </div>
                    ))}
                </div>
                <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        </>
    );
}


HomeCarousel.defaultProps = {
    slidersData: PropTypes.object.isRequired
};

export default HomeCarousel;

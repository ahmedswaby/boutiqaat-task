import React, { useState, useEffect }from "react";
import PropTypes from "prop-types";
import Card from './card';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
function Carousel({ slidersData }) {
    const [firsRow, setFirsRow] = useState([])
    const [secondRow, setsecondRow] = useState([])

    // @todo: imporove row conts to work dynamically
    const rowCounts = () => {
        if (slidersData.rowCount > 1 && slidersData.recordCount > 10) {
            const lengthDive = Math.ceil(slidersData.recordCount / slidersData.rowCount)
            const firstRowsData = slidersData.banners.filter((item, index) => index < lengthDive)
            const secondRowsData = slidersData.banners.filter((item, index) => index >= lengthDive)
            setFirsRow(firstRowsData)
            setsecondRow(secondRowsData)
        } else {
            setFirsRow(slidersData.banners)
        }
    }
    const settings = {
        slidesPerView: 4,
        spaceBetween: 20,
        breakpoints: {
            // when window width is >= 320px
            320: {
                slidesPerView: 1,
                spaceBetween: 15
            },
            // when window width is >= 480px
            480: {
                slidesPerView: 2,
                spaceBetween: 15
            },
            // when window width is >= 640px
            992: {
                slidesPerView: 3,
                spaceBetween: 20
            }
        }
    }

    useEffect(() => {
        rowCounts()
    }, [])
    return (
        <>
            <div className="col-md-9">
                <Swiper {...settings}>
                    {firsRow.map((slider) => (
                    <SwiperSlide key={slider.id}>
                        <Card slider={slider} />
                    </SwiperSlide>
                ))
                }
                </Swiper>
                <Swiper {...settings} className='mt-4'>
                    {secondRow.map((slider) => (
                    <SwiperSlide key={slider.id}>
                        <Card key={slider.id} slider={slider} />
                    </SwiperSlide>
                ))
                }
                </Swiper>
            </div>

        </>
    );
}

Carousel.defaultProps = {
    slidersData: PropTypes.object.isRequired
};
export default Carousel;

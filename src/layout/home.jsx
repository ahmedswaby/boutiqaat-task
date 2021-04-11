import React, { useState, useEffect, lazy, Suspense, Fragment } from "react";
import Skeleton from 'react-loading-skeleton';

import Header from '../components/header';
import Footer from '../components/footer';

import { boutiqaatData  } from './../services/todoApi';

// using react lazy & suspense to better performance
const HomeCarousel = lazy(() => import('../components/HomeCarousel'))
const Carousel = lazy(() => import('../components/carousel'))

function Home() {
    const data = boutiqaatData.data.payload
    const homeSliderData = data.filter(items => items.type === "slider")
    const [sliders, setSliders] = useState(...homeSliderData)
    const [pageData, setPageData] = useState(data)

    // example for reciveing function if it's real Api to work with Axios
    // const receiveData = async () => {
    //     await getData()
    //     .then(data => {
    //         console.log(data);
    //     })
    // }
    return (
        <>
        <div className="container">
            <Header />
                {pageData.map((section, index) => (
                    section.type === 'slider' ?
                        <Suspense fallback={<h2>Still Loading…</h2>}>
                            <HomeCarousel slidersData={sliders} />
                        </Suspense>
                        :
                        section.type === "celebrity" ?
                            <Fragment key={section.id}>
                                <div className="mt-2 mb-3">
                                    <h3> {section.name} </h3>
                                </div>
                                <div className="row">
                                    <Suspense fallback={<Skeleton count={10} />}>
                                        <Carousel slidersData={section} />
                                    </Suspense>
                                    <div className="col-md-3">
                                        {
                                            section.headerDetails.banner ? 
                                            <img className="img-fluid" src={section.headerDetails.banner}
                                            alt={section.name} />
                                            :
                                            <Skeleton count={5} />
                                        }
                                    </div>
                                </div>
                            </Fragment>
                        :
                        <>
                            <div className="mt-2 mb-3">
                                <h3> {section.name} </h3>
                            </div>
                            <Suspense fallback={<Skeleton count={10} />}>
                                <Carousel slidersData={section} />
                            </Suspense>
                        </>
                ))
                }
        </div>
        <Footer />
        </>
    );
}
export default Home;

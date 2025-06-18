import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router';
import ArrowButton from './ArrowButton';

const Banner = () => {
    
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        className: ' w-11/12 mx-auto rounded-xl',
        autoplay: true,
        nextArrow: <ArrowButton />,
        prevArrow: <ArrowButton />, 
        appendDots: dots => (
            <div
                style={{

                    borderRadius: "10px",
                    padding: "10px"
                }}
            >
                <ul style={{ margin: "0px" }}> {dots} </ul>
            </div>
        ),
        customPaging: i => (
            <div
                style={{
                    width: "30px",
                    color: "#e5e8ed",
                    border: "1px #e5e8ed solid",
                }}
            >
                {i + 1}
            </div>
        )
    };

    return (
        <div className='slide-container'>
            <Slider {...settings}>
                             
                <div className='relative w-full h-80 bg-[url(/Carosel1.png)] bg-center bg-no-repeat bg-cover p-4 md:p-6 lg:p-8 rounded-xl'>
                    {/* Overlay container  */}
                    <div className='bg-black/50 absolute inset-0'></div>
                    {/* Content */}
                    <div className="relative z-10 container mx-auto px-4 text-center">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">Welcome to Shikho a Course Management System</h1>
                        <p className="text-lg md:text-xl mb-6 text-white">Manage, enroll, and learn—all in one place.</p>
                        <Link to="/courses" className="btn border-none bg-secondary font-semibold transition">
                            View Courses
                        </Link>
                    </div>
                </div>
                <div className='relative w-full h-80 bg-[url(/Carousel4.jpg)] bg-center bg-no-repeat bg-cover p-4 md:p-6 lg:p-8 rounded-xl'>
                    {/* Overlay container  */}
                    <div className='bg-black/50 absolute inset-0'></div>
                    {/* Content */}
                    <div className="relative z-10 container mx-auto px-4 text-center">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">Manage The all Added Courses</h1>
                        <p className="text-lg md:text-xl mb-6 text-white">Manage all Courses for admin or teacher. Edit, Update, view and delete courses</p>
                        <Link to="/manageCourse" className="btn border-none bg-secondary font-semibold transition">
                            Manage Courses
                        </Link>
                    </div>
                </div>

                <div className='relative w-full min-h-80 bg-[url(/carousel5.jpeg)] bg-center bg-no-repeat bg-fixed bg-cover p-4 md:p-6 lg:p-8 rounded-xl'>
                    {/* Overlay container  */}
                    <div className='bg-black/50 absolute inset-0'></div>
                    {/* Content */}
                    <div className='relative z-10 container mx-auto px-4 text-center mt-10'>
                        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Top Online Learning Platform.</h2>
                        <p className="text-lg md:text-xl mb-6 text-white">Top Learing platform in the bangladesh. here student can learn or get our best effort. </p>
                    </div>
                </div>
                <div className='relative w-full min-h-80 bg-[url(/Carousel2.jpg)] bg-center bg-no-repeat bg-fixed bg-cover p-4 md:p-6 lg:p-8 rounded-xl'>
                    {/* Overlay container  */}
                    <div className='bg-black/50 absolute inset-0'></div>
                    {/* Content */}
                    <div className='relative z-10 container mx-auto px-4 text-center mt-10'>
                        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white"> Welcome Back, Lifelong Learner</h2>
                        <p className="text-lg md:text-xl mb-6 text-white">Pick up where you left off and move closer to your goals — one lesson at a time.</p>
                    </div>
                </div>

                <div className='relative w-full min-h-80 bg-[url(/Carousel3.jpg)] bg-center bg-no-repeat bg-fixed bg-cover p-4 md:p-6 lg:p-8 rounded-xl'>
                    {/* Overlay container  */}
                    <div className='bg-black/50 absolute inset-0'></div>
                    {/* Content */}
                    <div className='relative z-10 container mx-auto px-4 text-center mt-10'>
                        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white"> Learning Made Simple</h2>
                        <p className="text-lg md:text-xl mb-6 text-white"> Access your courses, submit assignments, and collaborate—all from one place.</p>
                    </div>
                </div>

            </Slider>

            {/* Banner 1 */}

        </div>
    );
};

export default Banner;
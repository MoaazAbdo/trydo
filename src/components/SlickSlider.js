import React from 'react'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./SlickSlider.css";
import Slider from "react-slick";
import { Link } from 'react-router-dom';


const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows:false, 
    responsive: [
        {
            breakpoint: 1024,
            settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: true
            }
        },
        {
            breakpoint: 991,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                initialSlide: 0
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 0
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
}

function SlickSlider({one, two, three, four, five, six, seven, eight, title, text, button, special}) {
    return (
        <>

            <div className="slider-content">

                
                <div className="s-head">
                    <h1>{title}</h1>
                    <p>{text}</p>
                </div>
        
                <div className="slider">

                    <Slider {...settings} >

                        <div className="content">

                            <div className="card-img">

                                <img src={one} alt="one"/>

                                <div className={special ? " special-content" :  "s-content"}>
                                    <p>development </p>
                                    <h1>Getting tickets to the big show</h1>
                                    <Link to="/trydo">{button}</Link>
                                </div>

                                <div className={special ? "over special-over" : "over"}></div>

                            </div>

                        </div>


                        <div className="content">
                            
                            <div className="card-img">

                                <img src={two} alt="one"/>

                                <div className={special ? " special-content" :  "s-content"}>
                                    <p>development </p>
                                    <h1>Getting tickets to the big show</h1>
                                    <Link to="/trydo">{button}</Link>
                                </div>

                                <div className={special ? "over special-over" : "over"}></div>

                            </div>

                        </div>

                        <div className="content">
                            
                            <div className="card-img">

                                <img src={three} alt="one"/>
                                
                                <div className={special ? " special-content" :  "s-content"}>
                                    <p>development </p>
                                    <h1>Getting tickets to the big show</h1>
                                    <Link to="/trydo">{button}</Link>
                                </div>

                                <div className={special ? "over special-over" : "over"}></div>

                            </div>

                        </div>
                        <div className="content">
                            
                            <div className="card-img">

                                <img src={four} alt="one"/>
                                <div className={special ? " special-content" :  "s-content"}>
                                    <p>development </p>
                                    <h1>Getting tickets to the big show</h1>
                                    <Link to="/trydo">{button}</Link>
                                </div>

                                <div className={special ? "over special-over" : "over"}></div>
                            </div>

                        </div>

                        <div className="content">
                            
                            <div className="card-img">

                                <img src={five} alt="one"/>
                                
                                <div className={special ? " special-content" :  "s-content"}>
                                    <p>development </p>
                                    <h1>Getting tickets to the big show</h1>
                                    <Link to="/trydo">{button}</Link>
                                </div>

                                <div className={special ? "over special-over" : "over"}></div>

                            </div>

                        </div>


                        <div className="content">
                            
                            <div className="card-img">

                                <img src={six} alt="one"/>
                                
                                <div className={special ? " special-content" :  "s-content"}>
                                    <p>development </p>
                                    <h1>Getting tickets to the big show</h1>
                                    <Link to="/trydo">{button}</Link>
                                </div>

                                <div className={special ? "over special-over" : "over"}></div>

                            </div>

                        </div>


                        <div className="content">
                            
                            <div className="card-img">

                                <img src={seven} alt="one"/>
                                <div className={special ? " special-content" :  "s-content"}>
                                    <p>development </p>
                                    <h1>Getting tickets to the big show</h1>
                                    <Link to="/trydo">{button}</Link>
                                </div>

                                <div className={special ? "over special-over" : "over"}></div>

                            </div>

                        </div>


                        <div className="content">
                            
                            <div className="card-img">

                                <img src={eight} alt="one"/>
                                <div className={special ? " special-content" :  "s-content"}>
                                    <p>development </p>
                                    <h1>Getting tickets to the big show</h1>
                                    <Link to="/trydo">{button}</Link>
                                </div>

                                <div className={special ? "over special-over" : "over"}></div>

                            </div>

                        </div>


                        
                        
                        
                    </Slider>
                </div>
            </div>
            
        </>
    )
}

export default SlickSlider

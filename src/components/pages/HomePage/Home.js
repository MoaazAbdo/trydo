import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../../Button'
import './Home.css'
import ServiceSection from '../../ServiceSection'
import SlickSlider from '../../SlickSlider'
import { sliderOneData, sliderTwoData } from './Data'
import FunFacts from '../../FunFacts'
import Team from '../../Team'
import TabsSection from '../../TabsSection'
import Brands from '../../Brands'


const data = {
    headInfo: false,
    bg: false,
    center: false,
    headTitle: "",
    headText: ""
}

function Home() {
    return (
        <>
            <div className="landing-page" > 
                <div className="landing">
                    <img className="land-img" src={process.env.PUBLIC_URL + "/images/bg-image-3-overlay.jpg"} alt="backgroundImg" />
                    <div className="landing-over">
                        <h1>creative</h1>
                        <p>
                            There are many variations of passages of Lorem Ipsum available 
                            but the majority have suffered alteration.
                        </p>
                        <Link to="/contact">
                            <Button buttonSize="btn--large" textStyle="upper">contact us</Button>
                        </Link>
                    </div>
                </div>
            </div>

           
            <ServiceSection {...data} />

            <SlickSlider {...sliderOneData} />

            <FunFacts />

            <Team />

            <TabsSection />


            <SlickSlider {...sliderTwoData} />
            
            <Brands />

            
           
        </>
    )
}

export default Home

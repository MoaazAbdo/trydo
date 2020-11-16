import React from 'react'
import Landing from '../../Landing'
import './About.css'
import FunFacts from '../../FunFacts'
import { Link } from 'react-router-dom'
import Team from '../../Team'
import TabsSection from '../../TabsSection'
import Brands from '../../Brands'

function About() {
    return (
        <>
            <Landing title="About"/> 

            <div className="about-content">

                <div className="about-img">
                    <img src={process.env.PUBLIC_URL + "/images/about-3.jpg"} alt="aboutImg" />
                </div>

                <div className="about-info">

                    <h1>About</h1>

                    <p className="a-info">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour,
                        or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum Ipsum available, 
                        but the majority have suffered alteration in some form, by injected humour,
                        or randomised words which dont look even slightly believable. If you are going.
                    </p>

                    <div className="about-list">

                        <div className="about-list-content">
                            <h3 className="title">Who we are</h3>
                            <p>There are many vtions of passages of Lorem Ipsum available, but the majority have suffered.</p>
                        </div>

                        <div className="about-list-content">
                            <h3 className="title">Who we are</h3>
                            <p>There are many vtions of passages of Lorem Ipsum available, but the majority have suffered.</p>
                        </div>

                    </div>

                </div>

            </div>


            <FunFacts />

            <div className="inner">

                <div className="contentWrapper">
                    <div className="content">
                        
                        <h4 className="theme-gradient">Find Your Work Now</h4>
                        <p>It is a long established fact that a reader will be distracted by the readable 
                            content of a page when looking at its layout.
                            The point of using Lorem Ipsum is that.
                        </p>
                    
                        <Link to="/contact">Get Started</Link>
                    
                    </div>
                </div>

                <div className="thumbnail">
                    <div className="image">
                        <img src={process.env.PUBLIC_URL + "/images/finding-us-01.png"} alt="thumbnail"/> 
                    </div>
                </div>

            </div>

            <Team />

            <TabsSection />
            
            <Brands />

               
        </>
    )
}

export default About

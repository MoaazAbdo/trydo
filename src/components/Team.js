import React from 'react'
import './Team.css'
import {FaFacebookF, FaLinkedinIn, FaTwitter} from 'react-icons/fa'
import { Link } from 'react-router-dom'

function Team() {
    return (
        <>
            <div className="team">

                <div className="team-head">
                    <h1>Skilled Team</h1>
                    <p>There are many variations of passages of Lorem Ipsum available,
                    but the majority have suffered alteration.</p>
                </div>

                <div className="team-content">
                    
                    <div className="t-content">

                        <img src={process.env.PUBLIC_URL + "/images/team-01.jpg"} alt="teamImg" />
                        
                        <div className="over">

                            <div className="icon">
                                <Link to={"//www.facebook.com/"} target='_blank'> <FaFacebookF /> </Link>
                                <Link to={"//www.linkedin.com/"} target='_blank'> <FaLinkedinIn /> </Link>
                                <Link to={"//www.twitter.com/"} target='_blank'> <FaTwitter /> </Link>
                            </div>

                            <div className="info">
                                <h3>Jone Due</h3>
                                <p>Sr. Web Developer</p>
                            </div>

                        </div>

                    </div>

                    <div className="t-content">
                        <img src={process.env.PUBLIC_URL + "/images/team-02.jpg"} alt="teamImg" />

                        <div className="over">

                            <div className="icon">
                                <Link to={"//www.facebook.com/"} target='_blank'> <FaFacebookF /> </Link>
                                <Link to={"//www.linkedin.com/"} target='_blank'> <FaLinkedinIn /> </Link>
                                <Link to={"//www.twitter.com/"} target='_blank'> <FaTwitter /> </Link>
                            </div>

                            <div className="info">
                                <h3>Fatima Asrafi</h3>
                                <p>Front-end Engineer</p>
                            </div>

                        </div>

                    </div>

                    <div className="t-content">
                        <img src={process.env.PUBLIC_URL + "/images/team-03.jpg"} alt="teamImg" />

                        <div className="over">

                            <div className="icon">
                                <Link to={"//www.facebook.com/"} target='_blank'> <FaFacebookF /> </Link>
                                <Link to={"//www.linkedin.com/"} target='_blank'> <FaLinkedinIn /> </Link>
                                <Link to={"//www.twitter.com/"} target='_blank'> <FaTwitter /> </Link>
                            </div>

                            <div className="info">
                                <h3>Al-Amin Bali</h3>
                                <p>Sr. Graphic Designer</p>
                            </div>

                        </div>

                    </div>

                    <div className="t-content">
                        <img src={process.env.PUBLIC_URL + "/images/team-05.jpg"} alt="teamImg" />

                        <div className="over">

                            <div className="icon">
                                <Link to={"//www.facebook.com/"} target='_blank'> <FaFacebookF /> </Link>
                                <Link to={"//www.linkedin.com/"} target='_blank'> <FaLinkedinIn /> </Link>
                                <Link to={"//www.twitter.com/"} target='_blank'> <FaTwitter /> </Link>
                            </div>

                            <div className="info">
                                <h3>Moaaz Abdo </h3>
                                <p>Sr. Web Developer</p>
                            </div>

                        </div>

                    </div>

                    <div className="t-content">
                        <img src={process.env.PUBLIC_URL + "/images/team-06.jpg"} alt="teamImg" />

                        <div className="over">

                            <div className="icon">
                                <Link to={"//www.facebook.com/"} target='_blank'> <FaFacebookF /> </Link>
                                <Link to={"//www.linkedin.com/"} target='_blank'> <FaLinkedinIn /> </Link>
                                <Link to={"//www.twitter.com/"} target='_blank'> <FaTwitter /> </Link>
                            </div>

                            <div className="info">
                                <h3>Fatima Asrafi</h3>
                                <p>Front-end Engineer</p>
                            </div>

                        </div>

                    </div>

                    <div className="t-content">
                        <img src={process.env.PUBLIC_URL + "/images/team-12.jpg"} alt="teamImg" />

                        <div className="over">

                            <div className="icon">
                                <Link to={"//www.facebook.com/"} target='_blank'> <FaFacebookF /> </Link>
                                <Link to={"//www.linkedin.com/"} target='_blank'> <FaLinkedinIn /> </Link>
                                <Link to={"//www.twitter.com/"} target='_blank'> <FaTwitter /> </Link>
                            </div>

                            <div className="info">
                                <h3>Al-Amin Bali</h3>
                                <p>Sr. Graphic Designer</p>
                            </div>

                        </div>

                    </div>

                </div>

            </div>
        </>
    )
}

export default Team

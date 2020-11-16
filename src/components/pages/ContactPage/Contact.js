import React from 'react'
import Landing2 from '../../Landing2'
import './Contact.css'
import {data} from './Data'
import {AiFillCustomerService, AiOutlineMail} from 'react-icons/ai'
import { GoLocation } from 'react-icons/go'
import Brands from '../../Brands'

function Contact() {
    return (
        <>
            <Landing2 {...data} />

            <div className="contact-content">

                <div className="content">
                    <h2>Contact With Phone Number</h2>
                    <p>+057 254 365 456</p>
                    <p>+856 325 652 984</p>
                    <div className="icon">
                        <AiFillCustomerService />
                    </div>
                </div>

                <div className="content">
                    <h2>Email Address</h2>
                    <p>admin@gmail.com</p>
                    <p>example@gmail.com</p>
                    <div className="icon">
                        <AiOutlineMail />
                    </div>
                </div>

                <div className="content">
                    <h2>Location</h2>
                    <p>5678 Bangla Main Road, cities 580</p>
                    <p>GBnagla, example 54786</p>
                    <div className="icon">
                        <GoLocation />
                    </div>
                </div>
                
            </div>

            <div className="contact-form">
                <div className="form">
                    <h1>Contact Us.</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto cupiditate aperiam neque.</p>
                    <form>
                        <div>
                            <input type="text" placeholder="Your Name *" />
                        </div>
                        
                        <div>
                            <input type="email" placeholder="Your Email *" />
                        </div>
                        
                        
                        <div>
                            <input type="text" placeholder="Write Subject *" />
                        </div>
                        
                        
                        <div>
                            <textarea placeholder="Your Message *"></textarea>
                        </div>
                        
                        <button type="submit">submit</button>
                    </form>
                </div>
                <div className="image">
                    <img src={process.env.PUBLIC_URL + "/images/about-6.jpg"} alt="contactImg" />
                </div>
            </div>

            <Brands />
        </>
    )
}

export default Contact

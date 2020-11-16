import React from 'react'
import './Footer.css'
import {FaFacebookF, FaLinkedinIn, FaTwitter} from 'react-icons/fa'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <>
        <div className="footer">
            <div className="logo">
                <img src={process.env.PUBLIC_URL + "/images/logo.png"} alt="logo"/>
            </div>

            <ul className="social">
                <li className="list-item">
                    <Link to={"//www.facebook.com/"} target='_blank'>
                        <FaFacebookF />
                    </Link>
                </li>

                <li className="list-item">
                    <Link to={"//www.linkedin.com/"} target='_blank'>
                        <FaLinkedinIn />
                    </Link>
                </li>

                <li className="list-item">
                    <Link to={"//www.twitter.com/"} target='_blank'>
                        <FaTwitter />
                    </Link>
                </li>
            </ul>

            <div className="copy">
                <p>Copyright © 2020 Rainbow-Themes. All Rights Reserved.</p>
            </div>
        </div>  
        </>
    )
}

export default Footer

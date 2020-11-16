import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {FaTimes, FaBars} from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import Button from './Button';
import "./Navbar.css";


function Navbar() {
    const [menu, showMenu] = useState(false)
    const [button, setButton ] = useState(false)

    const handleShow = () => {
        showMenu(!menu)
    }

    const closeMobileMenu = () => {
        showMenu(false)
    }  

    const showButton = () => {
        window.innerWidth <= 960 ?  setButton(true) : setButton(false) 
    }

    useEffect( () => {
        showButton()
    }, [] )
    
    window.addEventListener("resize", showButton)

    return (
        <>
        <IconContext.Provider value={{color: "#fff"}}>
            <div className="navbar">
                <div className="navbar-container container">

                    <Link to="/trydo" className="navbar-logo" onClick={closeMobileMenu}>
                        <img src={process.env.PUBLIC_URL + '/images/logo-light.png'} alt="logo"/>
                        
                    </Link>

                    <div className="menu-icon" onClick={handleShow}>
                        {
                            menu ? <FaTimes /> : <FaBars /> 
                        }
                        
                    </div>

                    <ul className={menu ? "nav-menu active" : "nav-menu"}>

                        <li className="nav-item">
                            <Link to="/trydo" className="nav-links" onClick={closeMobileMenu}>Home</Link>
                        </li>

                        <li className="nav-item">
                            <Link to="/services" className="nav-links" onClick={closeMobileMenu}>services</Link>
                        </li>

                        <li className="nav-item">
                            <Link to="/about" className="nav-links" onClick={closeMobileMenu}>about</Link>
                        </li>

                        <li className="nav-item">
                            <Link to="/blogs" className="nav-links" onClick={closeMobileMenu}>blogs</Link>
                        </li>

                        <li className="nav-item">
                            <Link to="/pricing" className="nav-links" onClick={closeMobileMenu}>pricing</Link>
                        </li>
                        
                        <li className="nav-btn">
                            <Link to="/contact" className="btn-link" >
                                {
                                    button ? (
                                        <Button buttonSize="btn--mobile" textStyle="capitalize" onClick={closeMobileMenu}>contact</Button>
                                    ) : (
                                        <Button buttonSize="btn--medium" textStyle="capitalize" onClick={closeMobileMenu}>contact</Button>
                                    ) 
                                }
                                
                            </Link>
                        </li>

                    </ul>

                </div>
            </div>
        </IconContext.Provider>
        </>
    )
}

export default Navbar

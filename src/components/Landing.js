import React from 'react'
import { Link } from 'react-router-dom'
import "./Landing.css"

function Landing({title}) {
    return (
        <>
        <div className="Landing-section">

            <div className="Landing-content">
                <h2 className="L-title">{title}</h2>
                <p>
                <Link to='trydo' className="goToHome">
                Home
                </Link>
                <span> {title} </span>
                </p>
            </div>

        </div>  
        </>
    )
}

export default Landing

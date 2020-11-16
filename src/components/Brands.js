import React from 'react'
import "./Brands.css"

function Brands() {
    return (
        <>
            <div className="brands">
                <div className="brands-content">
                    <img src={process.env.PUBLIC_URL + "/images/brand-01.png"} alt="brand" />
                    <img src={process.env.PUBLIC_URL + "/images/brand-02.png"} alt="brand" />
                    <img src={process.env.PUBLIC_URL + "/images/brand-03.png"} alt="brand" />
                    <img src={process.env.PUBLIC_URL + "/images/brand-04.png"} alt="brand" />
                    <img src={process.env.PUBLIC_URL + "/images/brand-05.png"} alt="brand" />
                    <img src={process.env.PUBLIC_URL + "/images/brand-06.png"} alt="brand" />
                    <img src={process.env.PUBLIC_URL + "/images/brand-02.png"} alt="brand" />
                    <img src={process.env.PUBLIC_URL + "/images/brand-03.png"} alt="brand" />
                    <img src={process.env.PUBLIC_URL + "/images/brand-04.png"} alt="brand" />
                </div>
            </div>
        </>
    )
}

export default Brands

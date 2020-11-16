import React from 'react'
import "./Landing2.css"

function Landing2({imgSrc, head, info}) {
    return (
        <>
            <div className="landing-2">

                <div className="land-2">

                    <img src={imgSrc} alt="bgImg" />
                    
                    <div className="l-content">
                        <h1>{head}</h1>
                        <p>{info}</p>
                    </div>


                </div>

                <div className="over"></div>
                
            </div>
        </>
    )
}

export default Landing2

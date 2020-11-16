import React from 'react'
import { Link } from 'react-router-dom'
import "./ServiceSection.css"
import { SiMicrostrategy} from 'react-icons/si'
import { MdDeveloperMode } from 'react-icons/md'
import { IoMdPeople } from 'react-icons/io'
import { CgScreen } from 'react-icons/cg'

function ServiceSection({headInfo, bg, center ,headTitle, headText}) {
    return (
        <>
        <div className={bg ? "services bg" : "services"}>

            <div className={headInfo ? "service-head" : "not"}>

                <h1> {headTitle} </h1>
                <p>  {headText}  </p>

            </div>

            <div className="allService">
                
                <div className={center ? "service_section center" : "service_section " }>
                    
                    <Link to="/service-details">
                        
                        <div className="icon">
                            <SiMicrostrategy />
                        </div>

                        <div className="content">
                            <h3 className="title">Business Stratagy</h3>
                            <p>
                            I throw myself down among the tall grass by the stream as I lie close to the earth.
                            </p>
                        </div>
                    

                    </Link>
                </div>

                <div className={center ? "service_section center" : "service_section " }>
                    <Link to="/service-details">
                        <div className="icon">
                            <MdDeveloperMode />
                        </div>
                        <div className="content">
                            <h3 className="title">Website Development</h3>
                            <p>
                            I throw myself down among the tall grass by the stream as I lie close to the earth.
                            </p>
                        </div>
                    </Link>
                </div>

                <div className={center ? "service_section center" : "service_section " }>
                    <Link to="/service-details">
                        <div className="icon">
                            <IoMdPeople />
                        </div>
                        <div className="content">
                            <h3 className="title">Marketing & Reporting</h3>
                            <p>
                            I throw myself down among the tall grass by the stream as I lie close to the earth.
                            </p>
                        </div>
                    </Link>
                </div>

                <div className={center ? "service_section center" : "service_section " }>
                    <Link to="/service-details">
                        <div className="icon">
                            <CgScreen />
                        </div>
                        <div className="content">
                            <h3 className="title">Mobile App Development</h3>
                            <p>
                            I throw myself down among the tall grass by the stream as I lie close to the earth.
                            </p>
                        </div>
                    </Link>
                </div>

                <div className={center ? "service_section center" : "service_section " }>
                    <Link to="/service-details">
                        <div className="icon">
                            <IoMdPeople />
                        </div>
                        <div className="content">
                            <h3 className="title">Marketing & Reporting</h3>
                            <p>
                            I throw myself down among the tall grass by the stream as I lie close to the earth.
                            </p>
                        </div>
                    </Link>
                </div>
                
                <div className={center ? "service_section center" : "service_section " }>
                    <Link to="/service-details">
                        <div className="icon">
                            <CgScreen />
                        </div>
                        <div className="content">
                            <h3 className="title">Mobile App Development</h3>
                            <p>
                            I throw myself down among the tall grass by the stream as I lie close to the earth.
                            </p>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
        </>

         
    )
}

export default ServiceSection

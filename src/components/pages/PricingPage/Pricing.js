import React from 'react'
import Landing from '../../Landing'
import './Pricing.css'
import { AiOutlineCheck } from 'react-icons/ai'
import { Link } from 'react-router-dom'

function Pricing() {
    return (
        <>
            <Landing title="Pricing Table" />

            <div className="pricing">

                <div className="pricing-table">

                    <div className="pr-head">
                        <h4>free</h4>
                        <div className="price">
                            <span className="amount">29</span>
                            <span>USD Per Month</span>
                        </div>
                    </div>

                    <div className="pr-body">
                        <ul className="pricing-list">
                            <li className="list-item">
                                <span className="icon"><AiOutlineCheck /> </span> 5 PPC Campaigns
                            </li>

                            <li className="list-item">
                                <span className="icon"><AiOutlineCheck /> </span>   Digital Marketing
                            </li>

                            <li className="list-item">
                                <span className="icon"><AiOutlineCheck /> </span>   Marketing Agency
                            </li>

                            <li className="list-item">
                                <span className="icon"><AiOutlineCheck /> </span>   Seo Friendly
                            </li>

                            <li className="list-item">
                                <span className="icon"><AiOutlineCheck /> </span>   UI/UX designs
                            </li>
                        </ul>
                    </div>

                    <div className="pr-footer">
                        <Link to="#pricing">
                            Purchase Now
                        </Link>
                    </div>

                </div>

                <div className="pricing-table active">

                    <div className="pr-head">
                        <h4>Business</h4>
                        <div className="price">
                            <span className="amount">37</span>
                            <span>USD Per Month</span>
                        </div>
                    </div>

                    <div className="pr-body">
                        <ul className="pricing-list">
                            <li className="list-item">
                                <span className="icon"><AiOutlineCheck /> </span> 5 PPC Campaigns
                            </li>

                            <li className="list-item">
                                <span className="icon"><AiOutlineCheck /> </span>   Digital Marketing
                            </li>

                            <li className="list-item">
                                <span className="icon"><AiOutlineCheck /> </span>   Marketing Agency
                            </li>

                            <li className="list-item">
                                <span className="icon"><AiOutlineCheck /> </span>   Seo Friendly
                            </li>

                            <li className="list-item">
                                <span className="icon"><AiOutlineCheck /> </span>   UI/UX designs
                            </li>
                        </ul>
                    </div>

                    <div className="pr-footer">
                        <Link to="#pricing">
                            Purchase Now
                        </Link>
                    </div>
                    
                </div>


                <div className="pricing-table">

                    <div className="pr-head">
                        <h4>Advanced</h4>
                        <div className="price">
                            <span className="amount">59</span>
                            <span>USD Per Month</span>
                        </div>
                    </div>

                    <div className="pr-body">
                        <ul className="pricing-list">
                            <li className="list-item">
                                <span className="icon"><AiOutlineCheck /> </span> 5 PPC Campaigns
                            </li>

                            <li className="list-item">
                                <span className="icon"><AiOutlineCheck /> </span>   Digital Marketing
                            </li>

                            <li className="list-item">
                                <span className="icon"><AiOutlineCheck /> </span>   Marketing Agency
                            </li>

                            <li className="list-item">
                                <span className="icon"><AiOutlineCheck /> </span>   Seo Friendly
                            </li>

                            <li className="list-item">
                                <span className="icon"><AiOutlineCheck /> </span>   UI/UX designs
                            </li>
                        </ul>
                    </div>

                    <div className="pr-footer">
                        <Link to="#pricing">
                            Purchase Now
                        </Link>
                    </div>
                    
                </div>
                
            </div>
        </>
    )
}

export default Pricing

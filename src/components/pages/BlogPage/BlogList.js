import React from 'react'
import { Link } from 'react-router-dom'
import Landing from '../../Landing'
import './BlogList.css'
import { AiOutlineArrowRight }  from 'react-icons/ai'
function BlogList() {
    return (
        <>
            <Landing title="Blog List" />

            <div className="blogs">
                <div className="all-blogs">

                    <div className="content">

                        <div className="card-img">

                            <img src={process.env.PUBLIC_URL+'/images/blog-01.jpg'} alt="one"/>

                            <div className="special-content">
                                <p>development </p>
                                <h1>Getting tickets to the big show</h1>
                                <Link to="/trydo">read more</Link>
                            </div>

                            <div className="over special-over"></div>

                        </div>

                    </div>

                    <div className="content">

                        <div className="card-img">

                            <img src={process.env.PUBLIC_URL+'/images/blog-02.jpg'} alt="one"/>

                            <div className="special-content">
                                <p>development </p>
                                <h1>A big ticket gone to be an interesting </h1>
                                <Link to="/trydo">read more</Link>
                            </div>

                            <div className="over special-over"></div>

                        </div>

                    </div>

                    <div className="content">

                        <div className="card-img">

                            <img src={process.env.PUBLIC_URL+'/images/blog-03.jpg'} alt="one"/>

                            <div className="special-content">
                                <p>development </p>
                                <h1>The Home of the Future Could Bebes</h1>
                                <Link to="/trydo">read more</Link>
                            </div>

                            <div className="over special-over"></div>

                        </div>

                    </div>

                    <div className="content">

                        <div className="card-img">

                            <img src={process.env.PUBLIC_URL+'/images/blog-04.jpg'} alt="one"/>

                            <div className="special-content">
                                <p>development </p>
                                <h1>Getting tickets to the big show</h1>
                                <Link to="/trydo">read more</Link>
                            </div>

                            <div className="over special-over"></div>

                        </div>

                    </div>

                    <div className="content">

                        <div className="card-img">

                            <img src={process.env.PUBLIC_URL+'/images/blog-01.jpg'} alt="one"/>

                            <div className="special-content">
                                <p>development </p>
                                <h1>A big ticket gone to be an interesting</h1>
                                <Link to="/trydo">read more</Link>
                            </div>

                            <div className="over special-over"></div>

                        </div>

                    </div>

                    <div className="content">

                        <div className="card-img">

                            <img src={process.env.PUBLIC_URL+'/images/blog-02.jpg'} alt="one"/>

                            <div className="special-content">
                                <p>development </p>
                                <h1>The Home of the Future Could Bebes</h1>
                                <Link to="/trydo">read more</Link>
                            </div>

                            <div className="over special-over"></div>

                        </div>

                    </div>

                </div>

                <div className="pages">
                    <span className="visited">1</span>
                    <span>2</span>
                    <span>3</span>
                    <span>4</span>
                    <span> <AiOutlineArrowRight /> </span>
                </div>
            </div>
        </>
    )
}

export default BlogList

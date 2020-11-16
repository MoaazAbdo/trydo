import React from 'react'
import './ServiceDetails.css'
import Landing2 from '../../Landing2'
import {data} from './Data'

function ServiceDetails() {
   
    return (
        <>
            <Landing2 {...data} />
            
            <div className="details">
                <div className="image">
                    <img src={process.env.PUBLIC_URL + "/images/bl-big-01.jpg"} alt="service"/>
                </div>
                <div className="info">
                    <p>but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum. You need to be sure there isn't anything embarrassing</p>
                    <p>hidden in the middle of text. All the Lorem Ipsum generators tend toitrrepeat predefined chunks. Necessary, making this the first true generator on the Internet.</p>
                    <h3>Proceess of metel</h3>
                    <ul className="list">
                        <li className="list-item">
                             Yet this above sewed flirted opened ouch
                        </li>
                        <li className="list-item">
                            Goldfinch realistic sporadic ingenuous
                        </li>
                        <li className="list-item">
                            Abominable this abidin far successfully then like piquan
                        </li>
                        <li className="list-item">
                            Risus commodo viverra
                        </li>
                        <li className="list-item">
                           Lorem ipsum dolor sit amet, consectetur adipiscing
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default ServiceDetails

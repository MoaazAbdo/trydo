import React from 'react'
import Landing from '../../Landing'
import ServiceSection from '../../ServiceSection'
import { dataOne, dataTwo, dataThree, dataFour } from './Data'

function Services() {
    return (
        <>
            <Landing title="Service"/>
            <ServiceSection {...dataOne}/>
            <ServiceSection {...dataTwo}/>
            <ServiceSection {...dataThree}/>
            <ServiceSection {...dataFour}/>
        </>
    )
}

export default Services

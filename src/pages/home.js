import React from 'react'
import HeroSection from '../components/HeroSection/HomeHero'
import InfoSection from '../components/InfoSection'
import { homeObjOne } from '../components/InfoSection/Data'

function home() {
    return (
        <div>
            <HeroSection/>
            <InfoSection {...homeObjOne}/>
        </div>
        
        
    )
}

export default home
import React from 'react'
import { HeroBg, ProjContainer, ProjContent, HeroH1, ImageBg } from './HeroElements'
import Image from "../../images/man.jpg"

function ResumeHero() {
    return (
        <ProjContainer>
            <HeroBg>
                <ImageBg src={Image} />
            </HeroBg>
            <ProjContent>
                <HeroH1>Resume</HeroH1>
            </ProjContent>
        </ProjContainer>
    )
}

export default ResumeHero

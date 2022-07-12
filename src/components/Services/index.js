import React from 'react'
import { ServicesCard,ServicesContainer,ServicesH1,ServicesH2,ServicesIcon,ServicesP,ServicesWrapper} from './ServicesElements'
// import Icon1 from '../../images/Visell.PNG'
// import Icon2 from '../../images/MOOZ.png'

function Services() {
    return (
        <ServicesContainer id="services">
            <ServicesH1>Projects</ServicesH1>
            <ServicesWrapper>
                <ServicesCard to='/projects'>
                    {/* <ServicesIcon src={Icon1}/> */}
                    <ServicesH2>Visell</ServicesH2>
                    <ServicesP>A e-commerce portal...</ServicesP>
                </ServicesCard>
                <ServicesCard to='/projects'>
                    {/* <ServicesIcon src={Icon2}/> */}
                    <ServicesH2>MOOZ</ServicesH2>
                    <ServicesP>Like Zoom but...</ServicesP>
                </ServicesCard>
            </ServicesWrapper>
            
        </ServicesContainer>
    )
}

export default Services

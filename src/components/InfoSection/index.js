import React from 'react'
import {InfoContainer,InfoRow,InfoWrapper,Column1,TextWrapper, Heading, Subtitle,Img, ImgWrap} from './InfoElements'

function InfoSection({lightBg,id,imgStart,lightText,headline,darkText,description,description2,img,alt}) {
    return (
        <>
            <InfoContainer lightBg={lightBg} id={id}>
                <InfoWrapper>
                    <InfoRow imgStart={imgStart}>
                        <Column1>
                            <TextWrapper>
                                <Heading lightText={lightText}>{headline}</Heading>
                                <Subtitle darkText={darkText}>{description}</Subtitle>
                                <Subtitle darkText={darkText}>{description2}</Subtitle>
                                <ImgWrap>
                                <Img src={img} alt={alt}/>
                            </ImgWrap>
                            </TextWrapper>
                        </Column1>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
        </>
    )
}

export default InfoSection

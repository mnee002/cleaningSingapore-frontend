import React from 'react'
import {FaInstagram, FaWhatsapp, FaFacebook} from 'react-icons/fa'
import { CarousellURL, InstaURL, WhatsAppURL, FbURL } from '../../utils/const'
import {FooterContainer,  FooterWrap,
SocialIconLink, SocialIcons, SocialLogo, SocialMedia, SocialMediaWrap, WebsiteRights, SocialWordLink} from './FooterElements'

function Footer() {
    return (
        <FooterContainer>
            <FooterWrap>
                {/* <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>Hello</FooterLinkTitle>
                            <FooterLink to='/about'>About</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer> */}
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to="/">Cleaning Singapore 88</SocialLogo>
                        <WebsiteRights>Cleaning Singapore 88 ©{new Date().getFullYear()} All Rights Reserved</WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink href={InstaURL} target="_blank" aria-label="Instagram">
                                <FaInstagram/>
                            </SocialIconLink>
                            <SocialIconLink href={WhatsAppURL} target="_blank" aria-label="WhatsApp">
                                <FaWhatsapp/>
                            </SocialIconLink>
                            <SocialIconLink href={FbURL} target="_blank" aria-label="Facebook">
                                <FaFacebook/>
                            </SocialIconLink>
                            <SocialWordLink href={CarousellURL} target="_blank" aria-label="Carousell">
                                Carousell
                            </SocialWordLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer

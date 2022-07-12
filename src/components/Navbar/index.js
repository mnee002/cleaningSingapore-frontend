import React from 'react'
import {FaBars} from 'react-icons/fa'
import { WhatsAppURL, FbURL } from '../../utils/const'
import {Nav, NavExtLinks,NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem,NavLinks} from './NavbarElements'

function Navbar({toggle, clickScrollUp}) {
    return (
        <>
        <Nav>
            <NavbarContainer>
                <NavLogo to='/' onClick={clickScrollUp}>
                    Cleaning Singapore 88
                </NavLogo>
                <MobileIcon onClick={toggle}>
                    <FaBars/>
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLinks to='/pricing' onClick={clickScrollUp}>Pricing</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='/' onClick={clickScrollUp}>Book Now</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavExtLinks href={WhatsAppURL} target="_blank">WhatsApp</NavExtLinks>
                    </NavItem>
                    <NavItem>
                        <NavExtLinks href={FbURL} target="_blank">Facebook</NavExtLinks>
                    </NavItem>
                </NavMenu>
                
            </NavbarContainer>
        </Nav>
        </>
    )
}

export default Navbar

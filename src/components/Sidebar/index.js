import React from 'react'
import { WhatsAppURL,FbURL } from '../../utils/const'
import {SidebarContainer,SidebarExtLink ,Icon, CloseIcon, SidebarLink, SidebarMenu, SidebarWrapper} from './SidebarElements'

function Sidebar({isOpen,toggle,clickToggle}) {

    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon/>
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                <SidebarLink to="/" onClick={clickToggle}>
                        Home
                    </SidebarLink>
                    <SidebarLink to="/pricing" onClick={clickToggle}>
                        Pricing
                    </SidebarLink>
                    <SidebarLink to="/" onClick={clickToggle}>
                        Book Now
                    </SidebarLink>
                    <SidebarExtLink href={WhatsAppURL} target="_blank" onClick={toggle}>
                        WhatsApp
                    </SidebarExtLink>
                    <SidebarExtLink href={FbURL} target="_blank" onClick={toggle}>
                        Facebook
                    </SidebarExtLink>
                </SidebarMenu>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar


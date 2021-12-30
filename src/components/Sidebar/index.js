import React from 'react'
import { SendIcon } from '../Navbar/NavbarElements'
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SideBtnWrap, SidebarRoute} from './SidebarElements'

const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon/>
            </Icon>   
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to= 'Welcome' onClick={toggle}>
                        Welcome
                    </SidebarLink>
                    <SidebarLink to= 'Projects' onClick={toggle}>
                        Projects
                    </SidebarLink>
                    <SidebarLink to= 'About' onClick={toggle}>
                        About
                    </SidebarLink>
                    <SidebarLink to= 'Contact' onClick={toggle}>
                        Contact
                    </SidebarLink> 
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to = 'contact'>Get in Touch<SendIcon/></SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>         
        </SidebarContainer>
    )
}

export default Sidebar

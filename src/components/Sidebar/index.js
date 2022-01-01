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
                    <SidebarLink to='HeroSection' offset={-80} smooth={true} duration= {500} exact='true' onClick={toggle}>
                        Welcome
                    </SidebarLink>
                    <SidebarLink to='ProjectsSection' offset={-80} smooth={true} duration= {500} exact='true' onClick={toggle}>
                        Projects
                    </SidebarLink>
                    <SidebarLink to='AboutSection' offset={-80} smooth={true} duration= {500} exact='true' onClick={toggle}>
                        About
                    </SidebarLink>
                    <SidebarLink to='ContactSection' offset={-80} smooth={true} duration= {500} exact='true' onClick={toggle}>
                        Contact
                    </SidebarLink> 
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to='ContactSection' offset={-80} smooth={true} duration= {500} exact='true' onClick={toggle} >Get in Touch<SendIcon/></SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>         
        </SidebarContainer>
    )
}

export default Sidebar

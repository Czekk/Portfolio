import React from 'react';
import {Nav, NavbarContainer, NavLogo, MobileIcon, NavLinks, NavMenu, NavItem, NavButtton, NavButtonLink, SendIcon} from './NavbarElements';
import {FaBars} from 'react-icons/fa';
import { useState } from 'react';
import { animateScroll as scroll } from 'react-scroll';


const Navbar = ({toggle}) => {
    const [active, setActive] = useState([true, false, false, false]);
    const heroActive = () => {setActive([true, false, false, false])};
    const projectsActive = () => { setActive([false, true, false, false])};
    const aboutActive = () => {setActive([false, false, true, false])};
    const contactActive = () => { setActive([false, false, false, true])};
    
    return (
        <>
            <Nav className='navbar'>
                <NavbarContainer className= 'Navbar-container'>
                    <NavLogo to="/" onClick={scroll.scrollToTop} smooth={true} duration={500}>Czerinton Kunaraja</NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars/>
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to="HeroSection" onSetActive={heroActive} active= {active[0]} smooth={true} duration={500} spy={true} exact="true" offset={-80} >Welcome</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="ProjectsSection" onSetActive={projectsActive} active={active[1]} smooth={true} duration={500} spy={true} exact="true" offset={-50} >Projects</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="AboutSection" onSetActive={aboutActive} active={active[2]} smooth={true} duration={500} spy={true} exact="true" offset={-80} >About</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="ContactSection" onSetActive={contactActive} active={active[3]} smooth={true} duration={500} spy={true} exact="true" offset={-80} >Contact</NavLinks>
                        </NavItem>
                    </NavMenu> 
                    <NavButtton>
                        <NavButtonLink to="ContactSection" onSetActive={contactActive} active={active[3]} smooth={true} duration={500} spy={true} exact="true" offset={-80}>Get in touch <SendIcon/></NavButtonLink>
                    </NavButtton>
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar

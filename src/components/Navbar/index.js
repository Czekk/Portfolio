import React from 'react';
// import {Link, NavLink} from 'react-router-dom';
import {Nav, NavbarContainer, NavLogo, MobileIcon, NavLinks, NavMenu, NavItem, NavButtton, NavButtonLink, SendIcon} from './NavbarElements';
import {FaBars} from 'react-icons/fa'


const Navbar = ({toggle}) => {
    return (
        <>
            <Nav className='navbar'>
                <NavbarContainer className= 'Navbar-container'>
                    <NavLogo to='/' spy="true" offset={80}>Czerinton Kunaraja</NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars/>
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to = "Welcome">Welcome</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to = "Projects" spy= {true} smooth = {true} exact='true' duration= {500}>Projects</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to = "About">About</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to = "Contact">Contact</NavLinks>
                        </NavItem>
                    </NavMenu> 
                    <NavButtton>
                        <NavButtonLink to = "GetInTouch">Get in touch <SendIcon/></NavButtonLink>
                    </NavButtton>
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar

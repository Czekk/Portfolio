import React, {useState} from 'react';
// import {Link, NavLink} from 'react-router-dom';
import {Nav, NavbarContainer, NavLogo, MobileIcon, NavLinks, NavMenu, NavItem, NavButtton, NavButtonLink} from './NavbarElements';
import {FaBars} from 'react-icons/fa'


const Navbar = () => {
    return (
        <>
            <Nav className='navbar'>
                <NavbarContainer className= 'Navbar-container'>
                    <NavLogo to='/'>Czerinton Kunaraja</NavLogo>
                    <MobileIcon>
                        <FaBars/>
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to = "Welcome">Welcome</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to = "Projects">Projects</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to = "About">About</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to = "Contact">Contact</NavLinks>
                        </NavItem>
                    </NavMenu> 
                    <NavButtton>
                        <NavButtonLink to = "GetInTouch">Get in touch!</NavButtonLink>
                    </NavButtton>
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar

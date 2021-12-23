import styled from 'styled-components';
import {Link as LinkR} from 'react-router-dom';
import {Link as LinkS} from 'react-scroll';
import { FaTelegramPlane } from 'react-icons/fa';

export const Nav = styled.nav`
    background: #12263A;
    heigth: 80px;
    display: flex;
    justify-content: left;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;

    @media screen and (max-width: 960px) {
        transition: 0.8s all ease;
    }
`

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    z-index:1;
    width: 100%;
    padding: 0 24px;
    max-width: 3840px;
`

export const NavLogo = styled(LinkR)`
    color: #C5D8D1;
    justify-self: flex-start;
    cursor: pointer;
    font-size: 1.4rem;
    display:flex;
    align-items: center;
    margin-left: 24px;
    font-weight: bold;
    text-decoration: none;
`

export const MobileIcon = styled.div`
    display: none;
    color: #C5D8D1;

    @media screen and (max-width:768px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
    }
`

export const NavMenu = styled.ul`
    display : flex;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-right: -22px;

    @media screen and (max-width: 760px) {
        display: none;
    }
`

export const NavItem = styled.li`
    height: 80px;
`
export const NavLinks = styled(LinkS)`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;

    &.active {
        border-botttom: 3px solid #01bf71;  
    }
`
export const NavButtton = styled.nav`
    display: flex;
    align-items: center;

    @media screen and (max-width: 768px) {
        display: none;
    }
`
export const NavButtonLink = styled(LinkR)`
border-radius: 50px;
background: #F4EDEA;
white-space: nowrap;
padding: 10px 22px;
color: #12263A;
font-size: 16px;
outline: none;
border: none;
cursor: pointer;
transition: all 0.2s ease-in-out;
text-decoration: none;

&:hover {
    transistion: all 0.2s ease-in-out;
    background: #F4D1AE;
    color: #06BCC1;
}
`
export const SendIcon = styled(FaTelegramPlane)`
margin-left: 5px;
margin-bottom: -3px;
`
import styled from 'styled-components';
import {Link as LinkR} from 'react-router-dom';
import {Link as LinkS} from 'react-scroll';
import { FaTelegramPlane } from 'react-icons/fa';

export const Nav = styled.nav`
    background: #12263A;
    heigth: 80px;
    margin-top: -80px;
    display: flex;
    justify-content: left;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 999;
    // box-shadow: 1px 1px 1px 1px grey;

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
    color: #fff;
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

    @media screen and (max-width: 768px) {
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
    border-bottom: ${({active}) => (active? '3px solid #fff' : 'none')};
    transistion: all 0.2s ease-in-out;
`
export const NavButtton = styled.nav`
    display: flex;
    align-items: center;

    @media screen and (max-width: 768px) {
        display: none;
    }
`
export const NavButtonLink = styled(LinkS)`
border-radius: 50px;
background: #fff;
white-space: nowrap;
padding: 10px 22px;
color: #12263A;
font-size: 16px;
font-weight: bold;
outline: none;
border: none;
cursor: pointer;
box-shadow: 1px 1px 1px 1px grey;
transition: all 0.2s ease-in-out;
text-decoration: none;

&:hover {
    transistion: all 0.2s ease-in-out;
    background: #C5D8D1;
    color: #12263A;
}
`
export const SendIcon = styled(FaTelegramPlane)`
margin-left: 5px;
margin-bottom: -3px;
`
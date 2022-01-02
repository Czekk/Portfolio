import styled from "styled-components"
import { BsGithub, BsLinkedin } from "react-icons/bs"
import {SiGmail} from 'react-icons/si'

export const FooterContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    items-align: center;    
    background: #12263A;
    width: 100%;
    height: 200px;
    position: relative;
`
export const Address = styled.h1`
    color: #fff;
    width: 100%;
    font-size: 16px;
    font-weight: bold;
    padding: 5px;
    text-align: center;
`
export const Email = styled.p`
    color: #fff;
    font-size: 14px;
    // text-decoration: italic;
    padding: 5px;
    text-align: center;
`
export const Telephone = styled.p`
    color: #fff;
    font-size: 14px;
    padding: 5px;
    text-align: center;
`
export const SocialContainer = styled.div`
    display: flex;
    height: 20%;
    width: 100%;
    justify-content: center;
    items-align: center;
    margin-bottom: 5px;
`
export const BsGithubIcon = styled(BsGithub)`
    font-size: 32px;
    color: #fff;
    margin: 10px;
    cursor: pointer;
    border: none;
    outline: none;
    border-radius: 50px;
    box-shadow: 2px 1px 2px 1px grey;
    z-index: 999;

    // &:hover {
    //     color: #12263A;
    //     background: #fff;
    //     font-size: 36px;
    //     box-shadow: 1px 1px 1px 1px lightgrey;
    // }
`
export const BsLinkedinIcon = styled(BsLinkedin)`
    font-size: 32px;
    color: #fff;
    margin: 10px;
    cursor: pointer;
    border: none;
    outline: none;
    box-shadow: 2px 1px 2px 1px grey;
    z-index: 999;

//     &:hover {
//         color: #12263A;
//         background: #fff;
//         font-size: 36px;
//         box-shadow: 1px 1px 1px 1px lightgrey;
//     }
// `
export const MdEmailIcon = styled(SiGmail)`
    font-size: 32px;
    color: #12263A;
    background: #fff;
    margin: 10px;
    cursor: pointer;
    border: none;
    outline: none;
    border-radius: 5px;
    box-shadow: 2px 1px 2px 1px grey;
    z-index: 999;

//     &:hover {
//         color: #fff;
//         background: #12263A;
//         font-size: 36px;
//         box-shadow: none;
// `
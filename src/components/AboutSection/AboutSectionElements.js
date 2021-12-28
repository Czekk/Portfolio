import styled from "styled-components";
import {BsGithub, BsLinkedin} from 'react-icons/bs';
import {SiGmail} from 'react-icons/si';
import { Link } from "react-scroll";
import { FaTelegramPlane } from "react-icons/fa";

export const AboutContainer = styled.div`
    Background: #C5D8D1;
    display: flex;
    justify-content: center;
    width: 100%;
    height: 91vh;
    z-index: 2;
    position: relative;
    top: 0;
    bottom: 0;
`
export const AboutBodyWrapper = styled.div`
    background: #fff;
    display: flex;
    justify-content: center;
    items-align: center;
    width: 80%;
    height: 90%;
    margin-top: 50px;
    border-radius: 5px;
    position: relative;
    box-shadow: 2px 2px 2px 2px grey;
    border: none;
    outline: none;

    @media screen and (max-width: 768px) {
        flex-direction: column;
        margin-top: 10px;
        width: 350px;
    }
`
export const AboutAside = styled.div`
    display: block;
    justify-content: center;
    flex-direction: column;
    items-align: center;
    padding: 25px;
    margin: auto;
    height: 100%;
    width: 30%;
    border: none;
    outline: none;
    position: relative;
    z-index: 4;
    border-right: 1px solid silver;
    
    @media screen and (max-width: 768px) {
        display: flex;
        justify-content: center;
        border: none;
        border-bottom: 1px solid silver;
        height: 40%;
        width: 100%;
    }
`
export const profileImgContainer = styled.div`
    display: flex;
    width: 100%;
    height: 20%;
    margin-top: 30px;
    position: relative;

    @media screen and (max-width: 768px) {
        height: 30%;
    }
`

export const  ProfileImg = styled.img`
    display: flex;
    border-radius: 50px;
    height: 100px;
    width: 100px;
    margin: 5px 33%;
    z-index: 999;
    position: relative;

    @media screen and (max-width: 768px) {
        height: 75px;
        width: 75px;
        margin: 5px 37%;
    }
`
export const ProfileDescription = styled.div`
    display: flex;
    justify-content: left;
    flex-direction: column;
    width: 100%;
    border-top: 1px solid silver;
    height: 70%;

    @media screen and (max-width: 768px) {
        display: flex;
        justify-content: center;
        items-align: center;
    }
`
export const Name = styled.h1`
    font-size: 20px;
    font-weight: bold;
    color: #12263A;

    @media screen and (max-width: 768px) {
        font-size: 16px;
        text-align: center;
    }
`
export const Title = styled.p`
    font-size: 16px;
    color: #12263A;
    @media screen and (max-width: 768px) {
        font-size: 14px;
        text-align: center;
    }
`
export const SocialContainer = styled.div`
    display: flex;
    height: 10%;
    width: 100%;
    justify-content: center;
    items-align: center;
    margin-bottom: 5px;
`
export const BsGithubIcon = styled(BsGithub)`
    font-size: 32px;
    color: #12263A;
    margin: 10px;
    cursor: pointer;

    &:hover {
        color: #F4D1AE;
    }
`
export const BsLinkedinIcon = styled(BsLinkedin)`
    font-size: 32px;
    color: #12263A;
    margin: 10px;
    cursor: pointer;

    &:hover {
        color: #F4D1AE;
    }
`
export const MdEmailIcon = styled(SiGmail)`
    font-size: 38px;
    color: #12263A;
    margin: 10px;
    cursor: pointer;

    &:hover {
        color: #F4D1AE;
    }
`
export const AboutMain = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: left;
    height: 100%;
    width: 70%;

    @media screen and (max-width: 768px) {
        height: 60%;
        width: 100%;
    }

`
export const AboutH1 = styled.h1`
display: flex;
width: 100%;
height: 10%;
padding: 20px 0px;
text-align: center;
font-size: 24px;
font-weight: bold;
color: #12263A;
position: relative;
z-index: 4;
border-bottom: 1px solid silver;

@media screen and (max-width: 768px) {
    font-size: 18px;
    padding 5px 5px;
}

@media screen and (max-width: 480px) {
    font-size: 14px;
    padding 3px 3px;
}
`
export const AboutP = styled.p`
    font-size: 16px;
    text-align: justify;
    color: #12263A;
    margin: 5px 5px;
    height: 70%;

    @media screen and (max-width: 768px) {
        font-size: 14px;
    }
`
export const TechStackGroup = styled.div`
    display: flex;
    justify-content: center;
    items-align: center;
    width: 100%;
    height: 15%;
    padding: 10px 40px;
    border-top: 1px solid silver;
    position: relative;
`
export const Icon = styled.i`
    color: #12263A;
    font-size: 24px;
    margin: 5px;

    @media screen and (max-width: 768px) {
        font-size: 14px;
        margin: 2px;
    }
`
export const ButtonWrapper = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    height: 10%;
`
export const ContactButton = styled(Link)`
    background: #12263A;
    border-radius: 50px;
    height: 60%;
    width: 30%;
    padding: 10px 25px;
    margin-top: 10px;
    color: #fff;
    text-align: center;
    font-size: 1rem;
    position: relative;
    transition: all 0.2s ease-in-out;
    cursor: pointer;

    &:hover {
        background: #F4D1AE;
        transition: all 0.2s ease-in-out;
    }

    @media screen and (max-width: 768px) {
        width: 45%;
        height: 80%;
        padding: 0px 10px;
        padding-top: -15px;
        padding-bottom: 5px;
        margin-top: 5px;
        text-align: center;
        justify-content: center;
        transition: all 0.2s ease-in-out;
    }
`
export const FaTelegramPlaneIcon = styled(FaTelegramPlane)`
    color: #fff;
    font-size: 18px;
    margin-bottom: -4px;
    &:hover {
        background: #F4D1AE;
        color: #12263A;
    }
`
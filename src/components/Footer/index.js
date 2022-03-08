import React from 'react'
import { FooterContainer, Address, Email, Telephone, SocialContainer, BsGithubIcon, BsLinkedinIcon, MdEmailIcon  } from './FooterComponents'

const Footer = () => {
    return (
        <>
            <FooterContainer>
                <Address>123 Some Street, City, State, USA 11100</Address>
                <Email>czerintonkr@gmail.com</Email>
                <Telephone>201-234-1393</Telephone>
                <SocialContainer>
                    <a href= 'https://github.com/Czekk' target='_blank' rel='noreferrer'><BsGithubIcon /></a>
                    <a href='https://www.linkedin.com/in/czerinton-kunaraja-8418901b7' target='_blank' rel='noreferrer'><BsLinkedinIcon /></a>
                    <a href='mailto:czerintonkr@gmail.com' target='_blank' rel='noreferrer'><MdEmailIcon/></a>
                </SocialContainer>
            </FooterContainer>
        </>
    )
}

export default Footer

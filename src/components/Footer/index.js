import React from 'react'
import { FooterContainer, Address, Email, Telephone, SocialContainer, BsGithubIcon, BsLinkedinIcon, MdEmailIcon  } from './FooterComponents'

const Footer = () => {
    return (
        <>
            <FooterContainer>
                <Address>123, Some Street, city, State, USA 08080</Address>
                <Email>czerintonkr@gmail.com</Email>
                <Telephone>201-234-1393</Telephone>
                <SocialContainer>
                    <BsGithubIcon/>
                    <BsLinkedinIcon/>
                    <MdEmailIcon/>
                </SocialContainer>
            </FooterContainer>
        </>
    )
}

export default Footer

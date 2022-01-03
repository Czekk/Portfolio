import React, { useState } from 'react'
import { FaBootstrap, FaCss3Alt, FaDocker, FaHtml5, FaLinux, FaNodeJs, FaNpm, FaReact, FaPython, FaJava, FaGit, FaAws } from 'react-icons/fa'
import {IoLogoJavascript} from 'react-icons/io'
import {SiExpress, SiMongodb, SiKubernetes, SiTypescript, SiJira} from 'react-icons/si'
import { AboutContainer, AboutBodyWrapper, AboutAside, ProfileImgContainer, ProfileImg, ProfileDescription, SocialContainer,
     AboutMain, AboutH1, AboutP, BsGithubIcon, BsLinkedinIcon, MdEmailIcon, Name, Title, Icon, 
     ContactButton, FaTelegramPlaneIcon, ButtonWrapper, TechStackGroup } from './AboutSectionElements'
import ProfilePic2 from '../../images/ProfilePic2.webp'

const AboutSection = () => {
    return (
        <>
            <AboutContainer>
                <AboutBodyWrapper>
                    <AboutAside>
                        <ProfileImgContainer>
                            <ProfileImg src= {ProfilePic2}/>
                        </ProfileImgContainer>
                        <ProfileDescription>
                            <Name>Czerinton Kunaraja</Name>
                            <Title>B.Sc Computer Science</Title>
                            <Title>FullStack Application Developer</Title>
                            {/* <hr/>
                            <Title><strong>Skills: </strong></Title>
                            <Title>Responsive design</Title>
                            <Title>Reusable Component Development</Title>
                            <Title>Test Driven Development</Title>
                            <Title>Containerization / Dockerize</Title>
                            <Title>MicroServices Architecture</Title>
                            <Title>Cross-platform ios and Android mobile development</Title> */}
                        </ProfileDescription>
                        <SocialContainer>
                            <a href= 'https://github.com/Czekk' target='_blank' rel='noreferrer'><BsGithubIcon /></a>
                            <a href='https://www.linkedin.com/in/czerinton-kunaraja-8418901b7' target='_blank' rel='noreferrer'><BsLinkedinIcon /></a>
                            <a href='mailto:czerintonkr@gmail.com' target='_blank'  rel='noreferrer'><MdEmailIcon/></a>
                        </SocialContainer>
                    </AboutAside>
                    <AboutMain>
                        <AboutH1>
                            About
                        </AboutH1>
                        <AboutP>
                        I have worked in both front and backend. I have exeprience working with ReactJs library, Bootstrap, Styled-Components, flutter (Cross-platform mobile).
                        I have gained responsive, mobile friendly, reusable and test driven development skills from my personel and professional projects.
                        I have worked with NodeJs, Express, MongoDb, Kubernetes, Docker and Python backend technologies.
                        </AboutP>
                        <TechStackGroup>
                            <Icon><FaHtml5/></Icon>
                            <Icon><FaCss3Alt/></Icon>
                            <Icon><IoLogoJavascript/></Icon>
                            <Icon><FaReact/></Icon>
                            <Icon><SiExpress/></Icon>
                            <Icon><SiMongodb/></Icon>
                            <Icon><FaNodeJs/></Icon>
                            <Icon><SiKubernetes/></Icon>
                            <Icon><FaDocker/></Icon>
                            <Icon><FaPython/></Icon>
                            <Icon><FaJava/></Icon>
                            <Icon><FaBootstrap/></Icon>
                            <Icon><SiTypescript/></Icon>
                            <Icon><FaLinux/></Icon>
                            <Icon><FaGit/></Icon>
                            <Icon><FaAws/></Icon>
                            <Icon><FaNpm/></Icon>
                            <Icon><SiJira/></Icon>
                        </TechStackGroup>
                        <ButtonWrapper>
                            <ContactButton to='ContactSection' offset={-80} smooth='true' duration={500} exact='true'>Contact me <FaTelegramPlaneIcon /> </ContactButton>
                        </ButtonWrapper>  
                    </AboutMain>
                </AboutBodyWrapper>
            </AboutContainer>
        </>
    )
}

export default AboutSection

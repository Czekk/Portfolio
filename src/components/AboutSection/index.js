import React from 'react'
import { FaBootstrap, FaCss3Alt, FaDocker, FaHtml5, FaLinux, FaNodeJs, FaNpm, FaReact, FaPython, FaJava, FaGit, FaAws } from 'react-icons/fa'
import {IoLogoJavascript} from 'react-icons/io'
import {SiExpress, SiMongodb, SiKubernetes, SiTypescript, SiJira} from 'react-icons/si'
import { AboutContainer, AboutBodyWrapper, AboutAside, ProfileImg, ProfileDescription, SocialContainer,
     AboutMain, AboutH1, AboutP, BsGithubIcon, BsLinkedinIcon, MdEmailIcon, Name, Title, Icon, 
     ContactButton, FaTelegramPlaneIcon, ButtonWrapper, TechStackGroup } from './AboutSectionElements'
import ProfilePic2 from '../../images/ProfilePic2.jpeg'

const AboutSection = () => {
    return (
        <>
            <AboutContainer>
                <AboutBodyWrapper>
                    <AboutAside>
                        <profileImgContainer>
                            <ProfileImg src= {ProfilePic2}/>
                        </profileImgContainer>
                        <ProfileDescription>
                            <Name>Czerinton Kunaraja</Name>
                            <Title>B.Sc Computer Science</Title>
                            <Title>FullStack Application Developer</Title>
                            <hr/>
                            <Title><strong>Skills: </strong></Title>
                            <Title>Responsive design</Title>
                            <Title>Reusable Component Development</Title>
                            <Title>Test Driven Development</Title>
                            <Title>Containerization / Dockerize</Title>
                            <Title>MicroServices Architecture</Title>
                            <Title>Cross-platform ios and Android mobile development</Title>
                        </ProfileDescription>
                        <SocialContainer>
                            <BsGithubIcon/>
                            <BsLinkedinIcon/>
                            <MdEmailIcon/>
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
                            <ContactButton>Contact me <FaTelegramPlaneIcon/> </ContactButton>
                        </ButtonWrapper>  
                    </AboutMain>
                </AboutBodyWrapper>
            </AboutContainer>
        </>
    )
}

export default AboutSection

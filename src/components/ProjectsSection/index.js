import {React, useState, useRef, useEffect} from 'react'
import { FaGithub } from 'react-icons/fa'
import {CgWebsite} from 'react-icons/cg'
import { ProjectsBg, ProjectsH1, ProjectsContainer, ProjectsCard, CardImg, ProjectTitle, ProjectsP, ViewBtn, GithubBtn, AboutMeBtn, FaChevronDownIcon, More } from './ProjectsElements'
import image from '../../images/portfolio.png'
import { project1, project2, project3, project4, project5, project6, project7, project8} from './Data'
import { animateScroll as scroll } from 'react-scroll'

const ProjectsSection = () => {
    const [over, setOver] = useState(false);
    const [sticky, setSticky] = useState(false);
    const ref = useRef();
    // const el = ref.current;

    // const observer = new IntersectionObserver(callbackfunction, options)
    // observer.observe(el)
    const scrollTo = () => {
        scroll.scrollMore(window.innerHeight*.8)
    }

    return (
        <>
            <ProjectsBg>
                <ProjectsH1>
                    My Projects..
                </ProjectsH1>
                <ProjectsContainer>
                    <ProjectsCard>
                        <CardImg src={project1.img} scale/>
                        <ProjectTitle>{project1.title}</ProjectTitle>
                        <ProjectsP>{project1.description}</ProjectsP>
                        <ViewBtn href= ""><CgWebsite/> View Project  </ViewBtn>
                        <GithubBtn href=""><FaGithub/> Checkout the code  </GithubBtn>
                    </ProjectsCard>
                    <ProjectsCard>
                        <CardImg src={project2.img} scale/>
                        <ProjectTitle>{project2.title}</ProjectTitle>
                        <ProjectsP>{project2.description}</ProjectsP>
                        <ViewBtn href= ""><CgWebsite/> View Project  </ViewBtn>
                        <GithubBtn href=""><FaGithub/> Checkout the code  </GithubBtn>
                    </ProjectsCard>
                    <ProjectsCard>
                        <CardImg src={project3.img} scale/>
                        <ProjectTitle>{project3.title}</ProjectTitle>
                        <ProjectsP>{project3.description}</ProjectsP>
                        <ViewBtn href= ""><CgWebsite/> View Project  </ViewBtn>
                        <GithubBtn href=""><FaGithub/> Checkout the code  </GithubBtn>
                    </ProjectsCard>
                    <ProjectsCard>
                        <CardImg src={project4.img} scale/>
                        <ProjectTitle>{project4.title}</ProjectTitle>
                        <ProjectsP>{project4.description}</ProjectsP>
                        <ViewBtn href= ""><CgWebsite/> View Project  </ViewBtn>
                        <GithubBtn href=""><FaGithub/> Checkout the code  </GithubBtn>
                    </ProjectsCard>
                    <ProjectsCard>
                        <CardImg src={project5.img} scale/>
                        <ProjectTitle>{project5.title}</ProjectTitle>
                        <ProjectsP>{project5.description}</ProjectsP>
                        <ViewBtn href= ""><CgWebsite/> View Project  </ViewBtn>
                        <GithubBtn href=""><FaGithub/> Checkout the code  </GithubBtn>
                    </ProjectsCard>
                    <ProjectsCard>
                        <CardImg src={project6.img} scale/>
                        <ProjectTitle>{project6.title}</ProjectTitle>
                        <ProjectsP>{project6.description}</ProjectsP>
                        <ViewBtn href= ""><CgWebsite/> View Project  </ViewBtn>
                        <GithubBtn href=""><FaGithub/> Checkout the code  </GithubBtn>
                    </ProjectsCard>
                </ProjectsContainer>
                <More onClick={scrollTo} duration={500} smooth={true} exact='true' 
                onMouseOver={() => setOver(true)} onMouseLeave={() => setOver(false)}
                ref= {ref} sticky={sticky} >More <FaChevronDownIcon over = {over}/></More>
                <AboutMeBtn to='AboutSection' offset={-80} duration={500} smooth= {true} exact='true' 
                onMouseOver={() => setOver(true)} onMouseLeave={() => setOver(false)}>About <FaChevronDownIcon over = {over}/></AboutMeBtn>
            </ProjectsBg>  
        </>
    )
}

export default ProjectsSection

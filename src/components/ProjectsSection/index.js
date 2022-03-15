import {React, useState} from 'react'
import { FaGithub } from 'react-icons/fa'
import {CgWebsite} from 'react-icons/cg'
import { ProjectsBg, ProjectsH1, ProjectsContainer, ProjectsCard, CardImg, ProjectTitle, ProjectsP, ViewBtn, GithubBtn, AboutMeBtn, FaChevronDownIcon, More } from './ProjectsElements'

import { project1, project2, project3, project4, project5, project6} from './Data'
import { animateScroll as scroll } from 'react-scroll'

const ProjectsSection = () => {
    const [over, setOver] = useState(0);
   
    const scrollTo = () => {
        scroll.scrollMore(window.innerHeight*.9)
    }

    return (
        <>
            <ProjectsBg>
                
                <ProjectsContainer>
                    <ProjectsH1>
                        My Projects..
                    </ProjectsH1>
                    <ProjectsCard>
                        <CardImg src={project1.img} />
                        <ProjectTitle>{project1.title}</ProjectTitle>
                        <ProjectsP>{project1.description}</ProjectsP>
                        <ViewBtn href= "https://cocky-payne-0b8eaa.netlify.app" target='_blank' rel='norefferer'><CgWebsite/> View Project  </ViewBtn>
                        <GithubBtn href="https://github.com/Czekk/MrKtLine-Financial-App-Complete.git" target='_blank' rel='git hub project page'><FaGithub/> Checkout the code  </GithubBtn>
                    </ProjectsCard>
                    <ProjectsCard>
                        <CardImg src={project2.img} />
                        <ProjectTitle>{project2.title}</ProjectTitle>
                        <ProjectsP>{project2.description}</ProjectsP>
                        <ViewBtn href= "https://adoring-snyder-f67a64.netlify.app" target={'_blank'} rel='Flick Review Application'><CgWebsite/> View Project  </ViewBtn>
                        <GithubBtn href="https://github.com/Czekk/FlickReview-Complete.git" target={'_blank'} rel='git hub project page'><FaGithub/> Checkout the code  </GithubBtn>
                    </ProjectsCard>
                    <ProjectsCard>
                        <CardImg src={project3.img} />
                        <ProjectTitle>{project3.title}</ProjectTitle>
                        <ProjectsP>{project3.description}</ProjectsP>
                        <ViewBtn href= ""><CgWebsite/> View Project  </ViewBtn>
                        <GithubBtn href=""><FaGithub/> Checkout the code  </GithubBtn>
                    </ProjectsCard>
                    <ProjectsCard>
                        <CardImg src={project4.img} />
                        <ProjectTitle>{project4.title}</ProjectTitle>
                        <ProjectsP>{project4.description}</ProjectsP>
                        <ViewBtn href= ""><CgWebsite/> View Project  </ViewBtn>
                        <GithubBtn href=""><FaGithub/> Checkout the code  </GithubBtn>
                    </ProjectsCard>
                    <ProjectsCard>
                        <CardImg src={project5.img} />
                        <ProjectTitle>{project5.title}</ProjectTitle>
                        <ProjectsP>{project5.description}</ProjectsP>
                        <ViewBtn href= ""><CgWebsite/> View Project  </ViewBtn>
                        <GithubBtn href=""><FaGithub/> Checkout the code  </GithubBtn>
                    </ProjectsCard>
                    <ProjectsCard>
                        <CardImg src={project6.img} />
                        <ProjectTitle>{project6.title}</ProjectTitle>
                        <ProjectsP>{project6.description}</ProjectsP>
                        <ViewBtn href= ""><CgWebsite/> View Project  </ViewBtn>
                        <GithubBtn href=""><FaGithub/> Checkout the code  </GithubBtn>
                    </ProjectsCard>
                </ProjectsContainer>
                <More onClick={scrollTo} duration={500} smooth='true' exact='true' 
                onMouseOver={() => setOver(1)} onMouseLeave={() => setOver(0)}
                > More <FaChevronDownIcon over = {over}/></More>
                <AboutMeBtn to='AboutSection' offset={-80} duration={500} smooth= "true" exact='true' 
                onMouseOver={() => setOver(1)} onMouseLeave={() => setOver(0)}>About <FaChevronDownIcon over = {over}/></AboutMeBtn>
            </ProjectsBg>  
        </>
    )
}

export default ProjectsSection

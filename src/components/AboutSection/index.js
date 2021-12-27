import React from 'react'
import { Button } from '../ButtonElements'

const AboutSection = () => {
    return (
        <>
            <AboutContainer>
                <AboutH1>
                    About me!
                </AboutH1>
                <AboutAside>
                    <ProfileImg/>
                    <ProfileDescription>
                        Czerinton Kunaraja
                        FullStack Application Developer
                    </ProfileDescription>
                </AboutAside>
                <AboutMain>
                    I have worked in both front and backend. I have exeprience working with ReactJs library, Bootstrap, Styled-Components, flutter (Cross-platform mobile).
                    I have gained responsive, mobile friendly, reusable and test driven development skills from my personel and professional projects.
                    I have worked with NodeJs, Express, MongoDb, Kubernetes, Docker and Python backend technologies. 
                    <Button>Contact me </Button>
                    //Github
                    //LinkedIn
                </AboutMain>
            </AboutContainer>
        </>
    )
}

export default AboutSection

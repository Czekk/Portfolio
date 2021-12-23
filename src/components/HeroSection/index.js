import React from 'react';
import { HeroContainer, HeroBg, VideoBg } from './HeroSectionElements';
import Video from '../../videos/video.mp4';
import { FaArrowCircleDown, FaArrowDown } from 'react-icons/fa';

export const HeroSection = () => {
    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg autoPlay loop muted src= {Video} type='video/mp4' disablePictureInPicture/>
            </HeroBg>
            <HeroContent>
                <Heroh1>
                    Welcome to my page!
                </Heroh1>
                <Herop>
                    I am a Mern stack application deveoper with experience building scalable, responsive, and robust applications.
                </Herop>
                <HeroBtnWrapper>
                    <Button to='projects'>View my projects {hover? <FaArrowDown/>:<FaArrowCircleDown/>}</Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

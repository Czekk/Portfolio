import React, {useState} from 'react';
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1,HeroP, HeroBtnWrapper, ArrowCircleDown, ArrowDown } from './HeroSectionElements';
import Video from '../../videos/video.mp4';
import { Button } from '../ButtonElements';


export const HeroSection = () => {
    const [hover, setHover] = useState(false);

    const onHover = () =>{
        setHover(!hover)
    }
    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg autoPlay loop muted src= {Video} type='video/mp4' disablePictureInPicture/>
            </HeroBg>
            <HeroContent>
                <HeroH1>
                    Welcome to my page!
                </HeroH1>
                <HeroP>
                    I am a Mern stack application deveoper with experience building scalable, responsive, and robust applications.
                </HeroP>
                <HeroBtnWrapper>
                    <Button to='projects' onMouseEnter = {onHover} onMouseLeave = {onHover} primary= 'true' dark= 'true'>View my projects {hover? <ArrowDown/>:<ArrowCircleDown/>}</Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

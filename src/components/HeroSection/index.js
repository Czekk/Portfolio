import React, {useState} from 'react';
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1,HeroP, HeroBtnWrapper, ArrowCircleDown, ArrowDown } from './HeroSectionElements';
import Video from '../../videos/video.mp4';
import { Button } from '../ButtonElements';
import Typical from 'react-typical'


export const HeroSection = () => {
    const [hover, setHover] = useState(false);

    const onHover = () =>{
        setHover(!hover)
    }
    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg autoPlay loop muted src= {Video} type='video/mp4' alt='background video of peaks' disablePictureInPicture/>
            </HeroBg>
            <HeroContent>
                <HeroH1>
                    Hello, welcome to my page!
                </HeroH1>
                <Typical steps= {
                ['I am a Full-stack (MERN) application developer', 500, 
                'with experience building', 500, 
                'responsive',500, 
                'robust', 500, 
                'and scalable',500,
                'mobile and web applications',500
                ]}
                loop={Infinity}
                wrapper= {HeroP}
                />
                <HeroBtnWrapper>
                    <Button to='ProjectsSection' onMouseEnter = {onHover} onMouseLeave = {onHover} primary= 'true' dark= 'true' duration={500} smooth='true' offset={-80} exact='true'>View my projects {hover? <ArrowDown/>:<ArrowCircleDown/>}</Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

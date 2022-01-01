import React, {useState} from 'react'
import { HeroSection } from '../components/HeroSection';
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import ProjectsSection from '../components/ProjectsSection'
import AboutSection from '../components/AboutSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import { Element } from 'react-scroll';


const Home = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen)
    }
    return (
        <>
            <Sidebar isOpen= {isOpen} toggle={toggle}/>
            <Navbar toggle= {toggle}/>
            <Element name="HeroSection"><HeroSection /></Element>
            <Element name="ProjectsSection"><ProjectsSection /></Element>
            <Element name="AboutSection"><AboutSection/></Element>
            <Element name="ContactSection"><ContactSection/></Element>
            <Footer/>
        </>
    )
}

export default Home

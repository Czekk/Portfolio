import React, {useState} from 'react'
import { HeroSection } from '../components/HeroSection';
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import ProjectsSection from '../components/ProjectsSection'
import AboutSection from '../components/AboutSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';


const Home = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen)
    }
    return (
        <>
            <Sidebar isOpen= {isOpen} toggle={toggle}/>
            <Navbar toggle= {toggle}/>
            <HeroSection id= "Welcome"/>
            <ProjectsSection id= "Projects"/>
            <AboutSection id= "About"/>
            <ContactSection id= "Contact"/>
            <Footer/>
        </>
    )
}

export default Home

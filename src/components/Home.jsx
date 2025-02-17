import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Hero from './home/Hero';
import Program from './home/Program';
import About from './home/About';
import ProgramFoto from './home/ProgramFoto'
import Footer from './Footer';
import Kontak from './home/Kontak';

const MainPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0); 
        AOS.init();
    }, []);

    return (
        <div>
            <Hero/>
            <About/>
            <Program />
            <ProgramFoto />
            <Kontak />
            <Footer />
        </div>
    );
}

export default MainPage;

import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Foto3 from '../../assets/foto3.png'
import './About.css'

const About = () => {
    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <div className='about-home'>
            <div className='barrier'></div>
            <div className='container'>
                <img src={Foto3} alt='Kegiatan Yayasan Hadji Kalla' width='560' height='auto' data-aos="fade-up"/>
                <div className='col-2' data-aos="fade-up">
                    <h2>TENTANG KAMI</h2>
                    <p data-aos="fade-up"> Yayasan Hadji Kalla merupakan lembaga filantropi yang bergerak dalam pengelola Zakat, Infaq, dan Shadaqah (ZIS) yang berada di bawah naungan Kalla Group, sebuah perusahaan yang bergerak dalam berbagai sektor di Indonesia. <br/> 
                    <br/>Yayasan Laz Hadji Kalla memiliki fokus utama pada penghimpunan dan pendayagunaan dana zakat, infaq, dan shadaqah (ZIS) untuk membantu memperbaiki kondisi sosial dan ekonomi masyarakat yang membutuhkan.</p>
                    <Link to="/tentang-kami" className='button' data-aos="fade-up" >Selengkapnya</Link>
                </div>
            </div>
        </div>
    )
}

export default About

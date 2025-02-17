import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';
import Logo from '../../assets/hadjikalla-logo.png';
import './Hero.css';

const Hero = () => {
    useEffect(() => {
        AOS.init({ once: true }); 
    }, []);

    return (
        <div className='hero'>
            <div className='content'>
                <img src={Logo} alt='Logo Yayasan Hadji Kalla'/>
                <div className='text'>
                    <p>AKTIF BERSAMA MEMBANGUN BANGSA</p>
                    <p>Lembaga pengelola ZIS perusahaan Kalla Group, yang telah mendapatkan izin sebagai Lembaga Amil Zakat Skala Nasional.</p>
                    <div className='click'>
                        <Link to='/tentang-kami' className='button'>Tentang Kami</Link>
                        <Link to='/kontak' className='button'>Kontak Kami</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero

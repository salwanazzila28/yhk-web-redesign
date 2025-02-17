import React, { useState, useEffect } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import logo from '../assets/hadjikalla-logo.png'

import '../css/Navbar.css'

const Navbar = () => {

    const [click, setClick] = useState(false)
    const [scroll, setScroll] = useState(false);

    const handleClick = () => setClick(!click)

    const closeMenu = () => setClick(false)

    useEffect(() => {
        const changeBackground = () => {
            if (window.scrollY >= 3) {
                setScroll(true);
            } else {
                setScroll(false);
            }
        }

        window.addEventListener('scroll', changeBackground);

        return () => {
            window.removeEventListener('scroll', changeBackground);
        };
    }, []);

    return (
        <div className={scroll ? 'header active' : 'header'}>
            <nav className='navbar'>
                <Link to='/' className='logo'>
                    <img src={logo} alt='logo' />
                </Link>
                <div className='hamburger' onClick={handleClick}>
                    {click ? (<FaTimes className="icon" style={{ color: '#02803d' }} />)
                        : (<FaBars className="icon" style={{ color: '#02803d' }} />)}
                </div>
                
                <ul className={click ? "nav-menu active" : "nav-menu"}>
                    <li className='nav-item'>
                        <Link to='/' onClick={closeMenu}>Beranda</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/tentang-kami' onClick={closeMenu}>Tentang Kami</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/program' onClick={closeMenu}>Program</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/kontak' onClick={closeMenu}>Kontak</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/kotak-saran' onClick={closeMenu}>Kotak Saran</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar

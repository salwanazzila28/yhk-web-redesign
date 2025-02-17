import React from 'react'
import HkLogo from '../assets/hadjikalla-logo.png'
import { Link } from 'react-router-dom'
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';
import '../css/Footer.css'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="row">
                    <div className="footer-col-left">
                        <img src={HkLogo} alt='Logo Hadji Kalla' />
                        <p>Yayasan Hadji Kalla adalah lembaga pengelola ZIS perusahaan Kalla Group, yang telah mendapatkan izin sebagai Lembaga Amil Zakat Skala Nasional dan dipercaya oleh masyarakat untuk menyalurkan zakat, infak, dan sedekah secara amanah dan transparan, serta membawa manfaat nyata bagi masyarakat melalui program-program yang berkelanjutan.</p>
                    </div>
                    <div className="footer-col">
                        <h4>Menu</h4>
                        <ul>
                            <li><Link to="/">Beranda</Link></li>
                            <li><Link to="/tentang-kami">Tentang Kami</Link></li>
                            <li><Link to="/program">Program</Link></li>
                            <li><Link to="/kontak">Kontak Kami</Link></li>
                            <li><Link to="/kotak-saran">Kotak Saran</Link></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>Program</h4>
                        <ul>
                            <li><Link to="/educare">Educare</Link></li>
                            <li><Link to="/humanity-environment-care">Humanity Environment</Link></li>
                            <li><Link to="/community-development">Community Development</Link></li>
                            <li><Link to="/islamic-care">Islamic Care</Link></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>Ikuti Kami</h4>
                        <div className="social-links">
                            <Link to="https://web.facebook.com/YayasanKalla" className="icon-link"><FaFacebookF /></Link>
                            <Link to="https://twitter.com/yayasankalla" className="icon-link"><FaTwitter /></Link>
                            <Link to="https://www.instagram.com/yayasankalla/" className="icon-link"><FaInstagram /></Link>
                            <Link to="www.youtube.com/@yayasanhadjikalla1984" className="icon-link"><FaYoutube /></Link>
                        </div>
                    </div>
                </div>
                <hr/>
                <div className='copyright'>
                    <p>© 2024 Yayasan Hadji Kalla. All rights reserved.</p>
                </div>
            </div>
            
        </footer>
    )
}

export default Footer
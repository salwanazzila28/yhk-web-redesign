import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'
import IslamicHeader from '../../assets/islamicheader.png'
import Dokumentasi from '../../assets/tebariftar.jpeg'
import '../../css/ListProgramPages.css'
import Footer from '../Footer'

const TebarIftar = () => {
    useEffect(() => {
        window.scrollTo(0, 0); 
      }, []);

  return (
    <div className='list-program-pages'>
        <div className='program-header'>
            <img src={IslamicHeader} alt='Islamic Header'/>
        </div>
        <div className='navigation-program-list'>
            <div className='navpro-title'>
            <p>PROGRAM KAMI</p>
            </div>
            <ul className='link-program'>
                <li className='link-item'>
                    <Link to='/educare'>Educare</Link> |
                </li>
                <li className='link-item'>
                    <Link to='/community-development'>Comunnity Development</Link> |
                </li>
                <li className='link-item'>
                    <Link to='/humanity-environment-care'>Humanity & Environment</Link> |
                </li>
                <li className='link-item'>
                    <Link to='/islamic-care'>Islamic Care</Link>
                </li>
            </ul>
        </div>
        <div className='program-content'>
            <div className='title'>
            <h1>TEBAR IFTAR</h1> <hr/>
            <hr/>
            </div>
            <div className='foto-program'>
                <img src={Dokumentasi} alt='Dokumentasi'/>
            </div>
            <div className='text-1'>
                <h3>TEBAR IFTAR;</h3>
                <p>Program ini berangkat dari isu kebutuhan masyarakat untuk berbuka puasa selama bulan Ramadan. Program bantuan Ramadan dalam bentuk pembagian paket iftar paket ke masjid-masjid yang ada di wilayah marginal/miskin kota Makassar. Wilayah penyalurannya meliputi masjid-masjid dengan masyarakat dhuafa yang ada di Kota Makassar.<br/>  
                <br/>Program yang bersumber dari dana Infaq LAZ Hadji Kalla ini, diharapkan bisa menjangkau warga duafa di wilayah marginal/miskin di kota Makassar, sehingga mereka dapat menikmati hidangan berbuka puasa yang layak selama selama 25 hari di bulan Ramadan tahun 1445 H/2024 M.</p>
            </div>
            <hr/>
        </div>
        <Footer/>
    </div>
  )
}

export default TebarIftar
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'
import IslamicHeader from '../../assets/islamicheader.png'
import Dokumentasi from '../../assets/daidbs.jpg'
import '../../css/ListProgramPages.css'
import Footer from '../Footer'

const DaiDbs = () => {
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
            <h1>DAI DBS</h1> <hr/>
            <hr/>
            </div>
            <div className='foto-program'>
                <img src={Dokumentasi} alt='Dokumentasi DaiDbs'/>
            </div>
            <div className='text-1'>
                <h3>DAI DBS; </h3>
                <p>Program ini terbagi dilakukan dengan melakukan penugasan kepada para Dai Muda untuk memenuhi kebutuhan spiritual masyarakat Muslim di desa DBS (Desa Bangkit Sejahtera) selama Ramadan dan pasca Ramadan selama 6 bulan. Dai di desa binaan memberikan warna tersendiri bagi program LAZ Hadji Kalla dengan tetap memperhatikan kebutuhan masing-masing desa.<br/>
                <br/>Program yang telah dilaksanakan sejak awal Yayasan Hadji Kalla didirikan. Khusus untuk Tebar Dai DBS, program ini dilakukan dengan menugaskan Dai ke Desa Binaan Yayasan Hadji Kalla. Pada tahun 2024 ini, LAZ Hadji Kalla  rencananya akan menggunakan Dai lokal yang berdomisili di sekitar lokasi desa sebagai inisiatif untuk mengatasi kendala bahasa lokal hingga mobilitas Dai terkait. Wilayah program ini meliputi Sulsel, Sulbar, Sulteng dan Sultra.</p>
            </div>
            <hr/>
        </div>
        <Footer/>
    </div>
  )
}

export default DaiDbs
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'
import IslamicHeader from '../../assets/islamicheader.png'
import Dokumentasi from '../../assets/idulfitribahagia.jpg'
import '../../css/ListProgramPages.css'
import Footer from '../Footer'

const IdulFitriBahagia = () => {
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
            <h1>IDUL FITRI BAHAGIA</h1> <hr/>
            <hr/>
            </div>
            <div className='foto-program'>
                <img src={Dokumentasi} alt='Dokumentasi' />
            </div>
            <div className='text-1'>
                <h3>IDUL FITRI BAHAGIA;</h3>
                <p> Yayasan Hadji Kalla melalui Lembaga Amil Zakat (LAZ) Hadji Kalla melakukan penyaluran paket sembako idul fitri untuk warga dhuafa di 60 wilayah kabupaten dan kota di empat provinsi, yakni Sulawesi Selatan, Sulawesi Tenggara, Sulawesi Tengah dan Sulawesi Barat. Sebanyak 10.000 paket akan disalurkan jelang lebaran idul fitri 1445 H.<br/>
                <br/>Pada tahun 2024, Yayasan Hadji Kalla akan mendistribusikan paket sembako ke masyarakat dhuafa di wilayah kerja LAZ Hadji Kalla sebanyak 10.000 paket dan 25.000 paket di Wilayah Jakarta dan Sumatera Barat. Program ini merupakan bantuan rutin yang dilakukan oleh LAZ Hadji Kalla setiap menjelang idul fitri. Melalui bantuan ini, LAZ Hadji Kalla telah membantu meringankan beban puluhan ribu warga dhuafa di berbagai wilayah  menjelang hari raya.</p>
            </div>
            <hr/>
        </div>
        <Footer/>
    </div>
  )
}

export default IdulFitriBahagia
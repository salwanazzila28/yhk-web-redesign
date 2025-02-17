import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'
import IslamicHeader from '../../assets/islamicheader.png'
import Dokumentasi from '../../assets/soundsystem.png'
import '../../css/ListProgramPages.css'
import Footer from '../Footer'

const GemaSound = () => {
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
            <h1>GEMA SOUND SYSTEM</h1> <hr/>
            <hr/>
            </div>
            <div className='foto-program'>
                <img src={Dokumentasi} alt='Dokumentasi'/>
            </div>
            <div className='text-1'>
                <h3>GEMA SOUND SYSTEM;</h3>
                <p>GEMA SOUND SYSTEM; Program ini dilatarbelakangi oleh banyaknya kebutuhan dan permintaan bantuan sound system dari masjid dan pesantren yang masuk ke Yayasan Hadji Kalla, baik secara langsung maupun melalui media online.<br/>
                <br/>Pada tahun 2024 ini, Yayasan Hadji Kalla melalui Lembaga Amil Zakat (LAZ) Hadji Kalla menyalurkan bantuan sound system mencakup pemasangan sound system untuk 90 (sembilan puluh) masjid dan 30 pesantren terpilih yang telah melalui tahap kurasi proposal. Ada pula program Pelatihan Perawatan Sound System yang akan diberikan kepada para pengurus masjid yang ada di Sulawesi Selatan, Sulawesi Barat, Sulawesi Tengah dan Sulawesi Tenggara. Selain pemasangan sound system untuk masjid, program ini juga akan menyasar pemasangan di pesantren yang ada di pelosok.<br/>
                <br/>Melalui program ini, yang dananya bersumber dari infaq, diharapkan jamaah yang masjidnya telah dibantu pemasangan sound system bisa mendengarkan bacaan Shalat dan ceramah agama dengan lebih jelas dan jernih. Selain itu pengurus masjid juga mampu melakukan perawatan sound system secara mandiri lewat pelatihan yang diberikan.</p>
            </div>
            <hr/>
        </div>
        <Footer/>
    </div>
  )
}

export default GemaSound
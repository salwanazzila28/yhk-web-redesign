import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'
import IslamicHeader from '../../assets/islamicheader.png'
import Dokumentasi from '../../assets/gurungaji.jpg'
import '../../css/ListProgramPages.css'
import Footer from '../Footer'

const GuruNgaji = () => {
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
            <h1>GURU NGAJI KOMPETEN</h1> <hr/>
            <hr/>
            </div>
            <div className='foto-program'>
                <img src={Dokumentasi} alt='Dokumentasi'/>
            </div>
            <div className='text-1'>
                <h3>GURU NGAJI KOMPETEN ;</h3>
                <p>adalah Program pelatihan penguatan dan peningkatan kapabilitas guru Al Qur’an (TPQ/Tahsin) baik dalam hal kemampuan bacaan maupun metodologi pengajarannya (ToT Guru Ngaji). Selain memberikan pelatihan untuk peningkatan kualitas guru ngaji, Program ini juga akan memberikan Pendampingan kepada para guru yang telah dilatih untuk mengelola Lembaga Al Qur’an.<br/>
                <br/>Lewat program ini, diharapkan para peserta yang terpilih memiliki kemampuan sebagai guru ngaji yang lebih baik dan mumpuni, mereka juga mampu mengelola lembaga Al Quran dengan terstandar. Pada tahun 2024, direncanakan program ini bisa terlaksana di 4 kabupaten/kota di Sulawesi Selatan dan menyasar 200 orang calon guru ngaji kompeten.</p>
            </div>
            <hr/>
        </div>
        <Footer/>
    </div>
  )
}

export default GuruNgaji
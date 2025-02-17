import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'
import EducareHeader from '../../assets/educareheader.png'
import Dokumentasi from '../../assets/sekolahislam.jpeg'
import '../../css/ListProgramPages.css'
import Footer from '../Footer'

const SekolahIslam = () => {
    useEffect(() => {
        window.scrollTo(0, 0); 
      }, []);

  return (
    <div className='list-program-pages'>
        <div className='program-header'>
            <img src={EducareHeader} alt='Educare Header'/>
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
            <h1>DANA PENDIDIKAN SEKOLAH ISLAM ATHIRAH BONE</h1> <hr/>
            <hr/>
            </div>
            <div className='foto-program'>
                <img src={Dokumentasi} alt='Dokumentasi'/>
            </div>
            <div className='text-1'>
                <h3>DANA PENDIDIKAN SEKOLAH ISLAM ATHIRAH BONE</h3>
                <p>Sebanyak 36,27% jumlah siswa di Sekolah Islam Athirah (SIA) Bone adalah siswa yang tergolong tidak mampu secara ekonomi, dalam hal ini, SIA Bone belum mampu menyediakan dana subsidi silang untuk menutupi biaya operasional untuk murid yang tergolong dhuafa, sehingga dibuatlah program bantuan SIA Bone. <br/>
                <br/>Pada tahun 2023, program ini dijalankan dengan pemberian bantuan dana untuk biaya pendidikan dan konsumsi selama 12 bulan untuk siswa dhuafa yang menempuh pendidikan di SIA Bone yang berada di Kabupaten Bone, Sulawesi Selatan.<br/>
                <br/>Program ini disalurkan menggunakan dana zakat yang dikelola oleh Yayasan Hadji Kalla. Diharapkan dengan program dukungan SIA Bone ini, maka siswa dhuafa yang dibantu dapat menjalankan pendidikan dengan baik, seiring dengan kebutuhan makan dan biaya pendidikan yang juga terpenuhi.</p>
            </div>
            <hr/>
        </div>
        <Footer/>
    </div>
  )
}

export default SekolahIslam
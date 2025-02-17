import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'
import CommunityHeader from '../assets/communityheader.png'
import Erny from '../assets/ernycommunity.jpeg'
import Heryanto from '../assets/heryantocommunity.jpeg'
import Footer from './Footer'
import '../css/PagesProgram.css'

const CommunityPages = () => {
  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);

  return (
    <div className='program-pages'>
      <div className='program-header'>
        <img src={CommunityHeader} alt='Community Development Header'/>
      </div>
      <div className='navigation-program'>
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
          <h1>PROGRAM COMMUNITY DEVELOPMENT</h1> <hr/>
        </div>
        <div className='text'>
          <p>Bidang Community Development merupakan bidang program pembinaan dan pemberdayaan masyarakat desa dan petani. Tugas utama bidang ini adalah melaksanakan kegiatan-kegiatan pemberdayaan masyarakat baik melalui pelatihan/workshop maupun kegiatan pendampingan komunitas yang menyeluruh hingga batas waktu tertentu.<br/>
          <br/>Tujuan utama dari kegiatan program ini adalah memberdayakan kelompok masyarakat binaan sebagai kelompok masyarakat penerima manfaat sesuai potensi dan sumber daya yang mereka miliki dengan meningkatkan pengetahuan dan ketrampilan  yang secara langsung maupun tidak langsung akan meningkatkan sumber penghasilan atau taraf ekonomi kelompok penerima manfaat.<br/>
          <br/>Tahun 2024, Yayasan Hadji Kalla melalui Bidang Community Development menjalankan dua program pembinaan, yakni Program Desa Bangkit Sejahtera 2024, dan Program Pemberdayaan Ekonomi Rakyat – Alpukat. Program tersebut dijalankan di 4 Provinsi wilayah kerja YHK, yakni di Sulawesi Selatan, Sulawesi Barat. Sulawesi Tengah dan Sulawesi Tenggara.</p> <br/>
        </div>
        <hr/>
        <div className='list-program'>
          <div className='program-tahun'>
            <h1>PROGRAM 2023 - 2024</h1>
            <ul className='nav-list'>
                <li className='list-item'>
                  <Link to='/desa-bangkit-sejahtera'>DESA BANGKIT SEJAHTERA</Link>
                </li>
                <li className='list-item'>
                  <Link to='/pemberdayaan-ekonomi-rakyat-alpukat'>PEMBERDAYAAN EKONOMI RAKYAT – ALPUKAT</Link>
                </li>
            </ul>
          </div>
          <hr/>
        </div>
        <hr/>
        <div className='management'>
          <h1>MANAGEMENT</h1>
          <span className='line'></span>
          <div className='program-team'>
            <div className='program-mem'>
              <img src={Erny} alt='Erny Rachmi Nurdin - Program Manager'/>
              <h4>Erny Rachmi Nurdin</h4>
              <p>Program Manager</p>
            </div>
            <div className='program-mem'>
              <img src={Heryanto} alt='Heryanto - Program Officer'/>
              <h4>Heryanto</h4>
              <p>Program Officer</p>
            </div>
          </div>
        </div>
      </div>
      {/* <div className='dokumentasi'>
        isinya foto-foto
      </div> */}
      <Footer/>  
    </div>
  )
}

export default CommunityPages
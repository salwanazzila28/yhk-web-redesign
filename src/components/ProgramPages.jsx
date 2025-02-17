import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'
import EducareFoto from '../assets/educare1.jpg'
import IslamicFoto from '../assets/islamic1.jpg'
import HumanityFoto from '../assets/humanity1.jpg'
import CommunityFoto from '../assets/community1.jpg'
import Footer from './Footer';
import '../css/ProgramPages.css'

const ProgramPages = () => {
  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);

  return (
    <div className='program'>
      <div className='event'>
        <h1>PROGRAM YANG SEDANG BERJALAN</h1>
      </div>
      <div className='container-card'>
        <div class="card">
          <img src={EducareFoto} alt='Program Educare'/>
          <div class="content-card">
            <h2>EDUCARE</h2>
            <p>Yayasan Hadji Kalla melalui bidang Pendidikan (Educare) turut berpartisipasi untuk meningkatkan kualitas pendidikan Indonesia khususnya di wilayah Sulawesi dengan melakukan kegiatan-kegiatan pemberdayaan dan pendampingan di bidang pendidikan.</p>
            <Link to='/educare' className='btn-lg'>SELENGKAPNYA</Link>
          </div>
        </div>
        <div class="card">
          <img src={CommunityFoto} alt='Program Community Development'/>
          <div class="content-card">
            <h2>COMMUNITY DEVELOPMENT</h2>
            <p>Bidang Community Development merupakan bidang program pembinaan dan pemberdayaan masyarakat desa dan petani. Tugas utama bidang ini adalah melaksanakan kegiatan-kegiatan pemberdayaan masyarakat baik melalui pelatihan/workshop maupun kegiatan pendampingan komunitas yang menyeluruh hingga batas waktu tertentu.</p>
            <Link to='/community-development' className='btn-lg'>SELENGKAPNYA</Link>
          </div>
        </div>
        <div class="card">
          <img src={HumanityFoto} alt='Program Humanity & Environment Care'/>
          <div class="content-card">
            <h2>HUMANITY & ENVIRONMENT CARE</h2>
            <p>Pada tahun 2024 ini terdapat 6 program utama yang menjadi rencana Kerja kegiatan bidang ini, antara lain; Program Penanggulangan Dampak Bencana, Mitigasi Bencana, Program Si Anak Sehat, Program Komunitas Aktif Jantung Sehat dan Program Kampung Hijau Energi dan Program Aksi Hijau Tangguh Iklim.</p>
            <Link to='/humanity-environment-care' className='btn-lg'>SELENGKAPNYA</Link>
          </div>
        </div>
        <div class="card">
          <img src={IslamicFoto} alt='Program Islamic Care'/>
          <div class="content-card">
            <h2>ISLAMIC CARE</h2>
            <p>Program Islamic Care telah berjalan sejak Tahun 70-an, programnya adalah bantuan zakat yang disalurkan melalui Program Ramadan seperti Idul Fitri Bahagia dan Tebar Iftar hingga program pembinaan berkelanjutan untuk asnaf dan kelompok dhuafa. </p>
            <Link to='/islamic-care' className='btn-lg'>SELENGKAPNYA</Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default ProgramPages
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'
import CommunityHeader from '../../assets/communityheader.png'
import Dokumentasi from '../../assets/rakyatalpukat.jpg'
import '../../css/ListProgramPages.css'
import Footer from '../Footer'

const RakyatAlpukat = () => {
    useEffect(() => {
        window.scrollTo(0, 0); 
      }, []);

  return (
    <div className='list-program-pages'>
        <div className='program-header'>
            <img src={CommunityHeader} alt='Community Header'/>
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
            <h1>PEMBERDAYAAN EKONOMI RAKYAT – ALPUKAT</h1> <hr/>
            <hr/>
            </div>
            <div className='foto-program'>
                <img src={Dokumentasi} alt='Dokumentasi Rakyat Alpukat' />
            </div>
            <div className='text-1'>
                <h3>PEMBERDAYAAN EKONOMI RAKYAT – ALPUKAT; </h3>
                <p>Program ini dibuat atas dasar adanya penurunan kuantitas dan kualitas produksi buah alpukat di Sulawesi Selatan, akibat dari varietas bibit yang dibudidayakan oleh petani bukan merupakan varietas unggul yang berakibat pada rendahnya nilai jual di pasaran. Melalui Program Pemberdayaan Ekonomi Rakyat – Alpukat ini, Yayasan Hadji Kalla melanjutkan intervensi program pemberdayaan dan pendampingan yang telah dilaksanakan sejak tahun 2021 untuk dua kelompok petani Alpukat di Kabupaten Gowa dan Kabupaten Bantaeng. Kemudian pada tahun 2024, Lanjutan intervensi pendampingan tahun ke-4 untuk Kelompok Tani Alpukat Malino yang akan memasuki Masa Panen Alpukat. Di mana Kelompok Petani Penerima Manfaat akan diberikan pelatihan dan pendampingan,mulai dari pelatihan teknik panen hingga penentuan link pasar yang signifikan serta pengelolaan keuangan petani.<br/>
                <br/>Program Pemberdayaan Ekonomi Rakyat – Alpukat ini bersumber dari dana zakat Yayasan Hadji Kalla, yang diharapkan melalui program ini, bisa meningkatkan produktivitas hasil panen minimal 60% di akhir program, mampu menghasilkan bibit unggul secara mandiri serta memperluas jangkauan wilayah penerima manfaat, serta meningkatkan pendapatan petani minimal 30% bila dibandingkan dengan pendapatan sebelum mengikuti program.</p>
            </div>
            <hr/>
        </div>
        <Footer/>
    </div>
  )
}

export default RakyatAlpukat
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'
import CommunityHeader from '../../assets/communityheader.png'
import Dokumentasi from '../../assets/desabangkit.jpg'
import '../../css/ListProgramPages.css'
import Footer from '../Footer'

const BeasiswaKeluarga = () => {
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
            <h1>DESA BANGKIT SEJAHTERA</h1> <hr/>
            <hr/>
            </div>
            <div className='foto-program'>
                <img src={Dokumentasi} alt='Dokumentasi Desa Bangkit' />
            </div>
            <div className='text-1'>
                <h3>DESA BANGKIT SEJAHTERA; </h3>
                <p>Masih banyaknya desa di wilayah kerja Yayasan Hadji Kalla yang minim atau bahkan belum pernah melakukan program pemberdayaan masyarakat untuk meningkatkan kualitas sumber daya alam dan manusia yang ada di desa, menjadi dasar dibuatnya program ini.  Program pemberdayaan masyarakat ini telah dijalankan Yayasan Hadji Kalla sejak tahun 2015. Pada tahun 2024, dasar program/indikator yang digunakan untuk memilih lokasi /desa calon binaan menggunakan indikator persentase jumlah penduduk miskin ekstrem yang ada di 4 provinsi wilayah kerja Yayasan Hadji Kalla. <br/>
                <br/>Di tahun 2024, Program Desa Bangkit Sejahtera akan membina desa yang termasuk wilayah prioritas 1 Miskin Ekstrem di 4 (empat) provinsi wilayah kerja Yayasan Hadji Kalla, yakni Sulawesi Selatan, Sulawesi Barat, Sulawesi Tengah dan Sulawesi Tenggara. Intervensi program diprioritaskan untuk implementasi program pemberdayaan ekonomi dengan 50% warga miskin ekstrem dipilih sebagai peserta program.
                <br/>Program Desa Bangkit Sejahtera bersumber dari dana zakat Yayasan Hadji Kalla, yang diharapkan melalui program ini, bisa membantu meningkatkan kualitas ekonomi masyarakat melalui pelatihan berbasis komoditi lokal yang pada akhirnya bisa menopang dan meningkatkan kualitas sosial dan lingkungan masyarakat desa yang dibina.</p>
            </div>
            <hr/>
        </div>
        <Footer/>
    </div>
  )
}

export default BeasiswaKeluarga
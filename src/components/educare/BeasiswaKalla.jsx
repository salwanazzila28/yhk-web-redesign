import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'
import PaduanBeasiswa from '../../assets/beasiswakallapdf.pdf'
import EducareHeader from '../../assets/educareheader.png'
import BeasiswaKallaPoster from '../../assets/beasiswakalla.jpg'
import BeasiswaKallaDokumentasi from '../../assets/beasiswakalladokumentasi.jpg'
import '../../css/ListProgramPages.css'
import Footer from '../Footer'

const BeasiswaKalla = () => {
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
            <h1>BEASISWA KALLA</h1> <hr/>
            <hr/>
            </div>
            <div className='foto-program'>
                <img src={BeasiswaKallaDokumentasi} alt='Dokumentasi'/>
            </div>
            <div className='text-1'>
                <h3>BEASISWA KALLA; </h3>
                <p>Persentase angka putus kuliah di Indonesia Timur tahun 2021 mencapai 7%. Angka putus kuliah tertinggi terdapat pada Provinsi Sulawesi Tengah (6%), Sulawesi Selatan (6%), Sulawesi Barat (4%), dan Sulawesi Tenggara (8%), sumber: Data statistik pendidikan KEMENRISTEKDIKTI Tahun 2022. Hal inilah yang menjadi landasan dibuatnya Program Beasiswa KALLA. <br/>
                <br/>Program ini berupa pemberian Bantuan Beasiswa UKT (uang kuliah tunggal) serta kegiatan peningkatan kapasitas sosial dan akademik untuk para calon penerima Beasiswa KALLA. Hingga tahun 2022, Yayasan Hadji Kalla telah membantu lebih dari 700 mahasiswa/i yang menempuh pendidikan di berbagai Perguruan Tinggi di 4 Provinsi Wilayah Kerja YHK, yakni Sulawesi Selatan, Sulawesi Barat, Sulawesi Tengah dan Sulawesi Tenggara. Total nilai bantuan pada tahun 2021-2022 mencapai 3.3 Milyar Rupiah. <br/>
                <br/>Program Beasiswa KALLA berasal dari dana Zakat dan Infaq yang dikelola oleh Yayasan Hadji Kalla. Diharapkan melalui program ini, Yayasan Hadji Kalla bisa berkontribusi  mengurangi angka putus kuliah di 4 provinsi wilayah kerja, serta menciptakan lulusan mahasiswa binaan Beasiswa KALLA yang berkontribusi positif untuk sosial kemasyarakatan.</p>
            </div>
            <hr/>
            <div className='text-2'>
                <div className='a-text-2'>
                    <h1>PENDAFTARAN</h1> <hr/>
                    <p>Program pemberian bantuan beasiswa pendidikan & kepemimpinan untuk mahasiswa yang berasal atau berdomisili di provinsi Sulawesi Selatan, Sulawesi Barat, Sulawesi tengah, dan Sulawesi Tenggara. <br/>
                    <br/>Klik navigasi di bawah ini untuk masuk ke laman pendaftaran.</p>
                    <Link to='https://educare.yayasanhadjikalla.co.id/beasiswa_Kalla_2024_2025' className='button'>Daftar Sekarang</Link>
                    <p>Informasi lengkap terkait program dan panduan pendaftaran, dapat diunduh melalui link di bawah ini:</p>
                    <a href={PaduanBeasiswa} className='link'>PANDUAN TEKNIS BEASISWA KALLA_2024</a>
                </div>
                <img src={BeasiswaKallaPoster} alt='Dokumentasi'/>
            </div>
            <hr/>
        </div>
        <Footer/>
    </div>
  )
}

export default BeasiswaKalla
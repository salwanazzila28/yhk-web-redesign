import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'
import HumanityHeader from '../../assets/humanityheader.png'
import Dokumentasi from '../../assets/kebencanaan.jpeg'
import '../../css/ListProgramPages.css'
import Footer from '../Footer'

const ProgramKebencanaan = () => {
    useEffect(() => {
        window.scrollTo(0, 0); 
      }, []);

  return (
    <div className='list-program-pages'>
        <div className='program-header'>
            <img src={HumanityHeader} alt='Humanity Header'/>
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
            <h1>PROGRAM RESPON KEBENCANAAN</h1> <hr/>
            <hr/>
            </div>
            <div className='foto-program'>
                <img src={Dokumentasi} alt='Dokumentasi'/>
            </div>
            <div className='text-1'>
                <h3>Program Respon Kebencanaan; </h3>
                <p>Untuk mengurangi dampak yang ditimbulkan oleh bencana yang terjadi, maka Yayasan Hadji Kalla melakukan perencanaan dan pengkajian risiko bencana yang lebih terarah, terpadu, tersistematis dan kolaboratif dengan berbagai elemen masyarakat sehingga upaya pengurangan risiko bencana di 4 Provinsi Wilayah Kerja YHK lebih optimal dibandingkan sebelumnya.<br/>
                <br/>program ini sifatnya KONTINJENSI: Memberikan bantuan langsung berupa: Dana, logistik,  dan alat dapur untuk membantu mengatasi kebutuhan dasar korban selama masa tanggap darurat.<br/>
                <br/>Pemanfaat utama dari program ini adalah masyarakat umum yang terdampak langsung terhadap kejadian bencana alam dan non alam di area program serta Wilayah yang secara nasional ditetapkan menjadi daerah bencana nasional oleh pemerintah melalui BPBD dan Kementerian Sosial RI.</p>
            </div>
            <hr/>
        </div>
        <Footer/>
    </div>
  )
}

export default ProgramKebencanaan
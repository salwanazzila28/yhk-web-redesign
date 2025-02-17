import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'
import EducareHeader from '../../assets/educareheader.png'
import BeasiswaKeluargaDokumentasi from '../../assets/beasiswakeluargakalla.jpg'
import '../../css/ListProgramPages.css'
import Footer from '../Footer'

const BeasiswaKeluarga = () => {
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
            <h1>BEASISWA KELUARGA KALLA</h1> <hr/>
            <hr/>
            </div>
            <div className='foto-program'>
                <img src={BeasiswaKeluargaDokumentasi} alt='Dokumentasi'/>
            </div>
            <div className='text-1'>
                <h3>BEASISWA KELUARGA KALLA;</h3>
                <p>Program Beasiswa Keluarga KALLA dibuat atas rekomendasi Muzakki (Perusahaan-perusahaan di bawah Kalla Group), yang merekomendasikan bantuan kepada karyawan dalam bentuk beasiswa kepada anak-anak karyawan yang berpenghasilan rendah, yang tergolong dalam kategori asnaf (fakir/miskin). <br/>
                <br/>Program ini disalurkan dalam bentuk pemberian bantuan beasiswa selama 12 bulan kepada 328 anak karyawan dan 32 anak pensiunan Kalla Group yang tengah menempuh pendidikan dari jejang Sekolah Dasar hingga Perguruan Tinggi di 4 Provinsi Wilayah Kerja YHK, yakni Sulawesi Selatan, Sulawesi Barat, Sulawesi Tengah dan Sulawesi Tenggara. <br/>
                <br/>Program Beasiswa Keluarga KALLA berasal dari dana Zakat yang dikelola oleh Yayasan Hadji Kalla. Melalui program ini, diharapkan Yayasan Hadji Kalla bisa Mengurangi beban tanggungan biaya pendidikan karyawan dan pensiunan Kalla Group yang memiliki anak usia SD hingga Perguruan Tinggi.</p>
            </div>
            <hr/>
        </div>
        <Footer/>
    </div>
  )
}

export default BeasiswaKeluarga
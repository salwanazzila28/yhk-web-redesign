import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'
import HumanityHeader from '../../assets/humanityheader.png'
import Dokumentasi from '../../assets/senamjantung.jpg'
import '../../css/ListProgramPages.css'
import Footer from '../Footer'

const SenamJantung = () => {
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
            <h1>KADERISASI PELATIH SENAM JANTUNG SEHAT</h1> <hr/>
            <hr/>
            </div>
            <div className='foto-program'>
                <img src={Dokumentasi} alt='Dokumentasi' />
            </div>
            <div className='text-1'>
            <h3>Kaderisasi Pelatih Senam Jantung Sehat; </h3>
                <p>Kegiatan ini mempunyai aktivitas utama menyelenggarakan kegiatan: pelatihan calon pelatih klub jantung sehat tingkat dasar untuk 120 peserta baru dari  kabupaten dan kota di Sulawesi Selatan.<br/>
                <br/>kejadian penyakit jantung semakin meningkat dari tahun ke tahun dengan prevalensi penyakit jantung di Indonesia sebesar 1,5%. Itu artinya, 15 dari 1.000 orang Indonesia menderita penyakit jantung.(data Riset Kesehatan Dasar (Riskesdas) tahun 2018). Salah satu upaya untuk mencegah penyakit jantung adalah dengan berolah raga. Oleh sebab itu, gerakan senam jantung sehat diciptakan dengan tujuan menjaga performa jantung, agar dapat mengambil oksigen sebesar-besarnya dengan tujuan kadar oksigen dalam tubuh dapat terpenuhi. Beberapa manfaat lainnya adalah:  Memperbaiki denyut nadi, melancarkan aliran darah, mencegah terjadinya Stroke, Jantung Koroner, dan penyakit terkait kesehatan jantung lainnya dan membantu mengurangi penyumbatan pembuluh darah yang diakibatkan oleh timbunan lemak dan kolesterol yang kini sudah menjadi momok karena gaya hidup yang tidak sehat. Akan tetapi, untuk mengajak warga melakukan senam jantung, dibutuhkan instruktur yang tepat dan terlatih untuk mendampingi warga menjaga kesehatan jantungnya melalui olahraga senam. Oleh karena itu, YHK dapat berperan serta dengan menyelenggarakan pendidikan calon pelatih senam jantung sehat. Kegiatan ini merupakan kelanjutan dari program yang sama di tahun 2020.<br/>
                <br/>Penyakit Tidak Menular (PTM) seperti jantung koroner, hipertensi, diabetes melitus, kanker, gagal ginjal, dan penyakit paru, menjadi penyakit penyebab kematian terbanyak di Indonesia, termasuk di Makassar dan beberapa kota di Provinsi Sulawesi Selatan.<br/>
                <br/>tahun 2020, Tim HE Yayasan Hadji Kalla memiliki pengalaman melakukan kegiatan yang sifatnya preventif untuk mencegah serangan kedua penyakit: Jantung dan Diabetes terhadap masyarakat kota Makassar dengan menyelenggarakan pelatihan calon pelatih klub jantung sehat bekerjasama dengan Yayasan Jatung Sehat Sulsel. Pada tahun 2021, upaya tersebut akan dikembangkan dengan berbagai kegiatan lainnya antara lain: pemeriksaan kesehatan, gula darah (untuk deteksi dini penyakit diabates).<br/>
                <br/>jumlah kelompok dan kegiatan senam jantung di kelompok masyarakat di sulawesi Selatan.</p>
            </div>
            <hr/>
        </div>
        <Footer/>
    </div>
  )
}

export default SenamJantung
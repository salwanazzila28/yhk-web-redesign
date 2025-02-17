import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'
import EducareHeader from '../../assets/educareheader.png'
import Dokumentasi from '../../assets/parentingislam.jpeg'
import '../../css/ListProgramPages.css'
import Footer from '../Footer'

const ParentingIslam = () => {
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
            <h1>PARENTING ISLAM</h1> <hr/>
            <hr/>
            </div>
            <div className='foto-program'>
                <img src={Dokumentasi} alt='Dokumentasi' />
            </div>
            <div className='text-1'>
                <h3>PARENTING ISLAM;</h3>
                <p>Parenting Islam adalah pelatihan yang diberikan kepada orang tua agar memahami pola pengasuhan yang baik. Pelatihan ini merupakan salah satu upaya untuk mengurangi kekerasan terhadap anak yang terjadi di Kota Makassar. Kegiatan pelatihan akan dilaksanakan di wilayah yang tinggi tingkat kekerasan terhadap anak. Harapannya dengan mengetahui pola pengasuhan yang baik, para orang tua mampu mendidik anak dengan baik dan mengurangi tingkat kekerasan yang terjadi karena pola pengasuhan yang tidak tepat.<br/>
                <br/>Pelaksanaan Pelatihan Parenting Islam tahun 2022 telah mendampingi lebih dari 80 keluarga dan orang tua yang berdomisili di wilayah Kota Makassar. Untuk tahun 2023 target diperluas dengan menyasar para orang tua yang ada di beberapa kecamatan di Kota Makassar dengan tingkat kekerasan terhadap anaknya cukup tinggi. Program akan dilakukan mulai bulan Juni-September 2023.</p>
            </div>
            <hr/>
        </div>
        <Footer/>
    </div>
  )
}

export default ParentingIslam
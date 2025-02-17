import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'
import EducareHeader from '../../assets/educareheader.png'
import Dokumentasi from '../../assets/paud.jpeg'
import '../../css/ListProgramPages.css'
import Footer from '../Footer'

const PaudMandiri = () => {
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
            <h1>PAUD TERAKREDITASI DAN MANDIRI</h1> <hr/>
            <hr/>
            </div>
            <div className='foto-program'>
                <img src={Dokumentasi} alt='Dokumentasi'/>
            </div>
            <div className='text-1'>
                <p>PAUD Terakreditasi dan Mandiri adalah program pemberdayaan terhadap lembaga PAUD berupa kegiatan pelatihan, pendampingan, dan pemberian bantuan perlengkapan penunjang akreditasi. Diharapkan setelah mendapat intervensi pemberdayaan oleh Yayasan Hadji Kalla, PAUD-PAUD yang dibantu dapat segera mendapatkan akreditasi sehingga bisa mengakses bantuan-bantuan pemerintah dan lebih mandiri secara finansial.<br/>
                <br/>Sepanjang tahun 2022 ada sebanyak 17 PAUD di Kota Makassar yang mendapatkan bantuan pendampingan dan bantuan perlengkapan penunjang akreditasi. Untuk tahun 2023 jumlah PAUD yang akan dibantu ditargetkan naik sebanyak 30 PAUD yang ada di 4 provinsi wilayah jangkauan program. Pelaksanaan program akan di mulai pada pertengahan 2023 mendatang.</p>
            </div>
            <hr/>
        </div>
        <Footer/>
    </div>
  )
}

export default PaudMandiri
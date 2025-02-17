import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'
import HumanityHeader from '../../assets/humanityheader.png'
import Dokumentasi from '../../assets/anaksehat.jpg'
import '../../css/ListProgramPages.css'
import Footer from '../Footer'

const AnakSehat = () => {
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
            <h1>PROGRAM SI ANAK SEHAT</h1> <hr/>
            <hr/>
            </div>
            <div className='foto-program'>
                <img src={Dokumentasi} alt='Dokumentasi'/>
            </div>
            <div className='text-1'>
                <h3>Program Si Anak Sehat; </h3>
                <p>Inti dari program ini adalah; Melakukan pelatihan dan pendampingan kegiatan peningkatan pengetahuan komunitas ibu, nakes dan kader posyandu  dalam pemberian makanan tambahan yang berdampak pada pengurangan prevalansi stunting. Selanjutnya, Melakukan memberikan layanan kesehatan khitanan anak-anak usia dari keluarga dhuafa yang berasal dari kampung-kampung di wilayah kota Makassar dan desa-desa dampingan YHK yang tersebar di berbagai kabupaten se- Sulawesi Selatan.<br/>
                <br/>Salah satu dampak yang diharapkan dari program ini adalah meningkatnya kesehatan masyarakat khususnya pada Anak.</p>
            </div>
            <hr/>
        </div>
        <Footer/>
    </div>
  )
}

export default AnakSehat
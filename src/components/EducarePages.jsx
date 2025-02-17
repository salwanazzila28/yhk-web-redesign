import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'
import EducareHeader from '../assets/educareheader.png'
import Therry from '../assets/therryeducare.png'
import Ria from '../assets/riaeducare.jpg'
import Footer from './Footer'
import '../css/PagesProgram.css'

const EducarePages = () => {
  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);

  return (
    <div className='program-pages'>
      <div className='program-header'>
        <img src={EducareHeader} alt='Educare Header'/>
      </div>
      <div className='navigation-program'>
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
          <h1>PROGRAM EDUCARE</h1> <hr/>
        </div>
        <div className='text'>
          <p>Yayasan Hadji Kalla melalui bidang Pendidikan (Educare) turut berpartisipasi untuk meningkatkan kualitas pendidikan Indonesia khususnya di wilayah Sulawesi dengan melakukan kegiatan-kegiatan pemberdayaan dan pendampingan di bidang pendidikan. Program kerja Educare tahun 2023 berupa Beasiswa Kalla, Beasiswa Keluarga Kalla, Dana Pendidikan SIA Bone, Akreditasi Mandiri, Sekolah Unggul, dan Parenting Islam. Enam program yang telah dilaksanakan sepanjang tahun 2023 telah menyentuh hingga lebih dari 15.000 penerima manfaat di empat wilayah provinsi jangkauan program yakni Sulsel, Sulbar, Sulteng dan Sultra. <br/>
          <br/>Pada tahun 2024, Yayasan Hadji Kalla melalui Lembaga Amil Zakat (LAZ) Hadji Kalla akan kembali menjalankan 6 Program, Beasiswa Kalla, Beasiswa Keluarga Kalla, Dana Pendidikan SIA (Sekolah Islam Athirah) Bone, Keluarga Tangguh, Tumbuh Pendidikan dan Kolaborasi untuk Anak, yang ditargetkan untuk bisa menyentuh 20.000 penerima manfaat. Dana yang dikelola LAZ Hadji Kalla untuk program-program Educare berasal dari dana zakat perusahaan-perusahaan Kalla Group.</p> <br/>
        </div>
        <hr/>
        <div className='list-program'>
          <div className='program-tahun'>
            <h1>PROGRAM 2023 - 2024</h1>
              <ul className='nav-list'>
                  <li className='list-item'>
                      <Link to='/beasiswa-kalla'>BEASISWA KALLA</Link>
                  </li>
                  <li className='list-item'>
                      <Link to='/beasiswa-keluarga-kalla'>BEASISWA KELUARGA KALLA</Link>
                  </li>
                  <li className='list-item'>
                      <Link to='/sekolah-islam-athirah-bone'>DANA PENDIDIKAN SEKOLAH ISLAM ATHIRAH BONE</Link>
                  </li>
                  <li className='list-item'>
                      <Link to='/paud-terakreditasi-dan-mandiri'>PAUD TERAKREDITASI DAN MANDIRI</Link>
                  </li>
                  <li className='list-item'>
                      <Link to='/parenting-islam'>PARENTING ISLAM</Link>
                  </li>
              </ul>
          </div>
          <hr/>
        </div>
        <hr/>
        <div className='management'>
          <h1>MANAGEMENT</h1>
          <span className='line'></span>
          <div className='program-team'>
            <div className='program-mem'>
              <img src={Therry} alt='Therry Alghifary - Program Manager'/>
              <h4>Therry Alghifary</h4>
              <p>Program Manager</p>
            </div>
            <div className='program-mem'>
              <img src={Ria} alt='Ria Supratman - Program Officer'/>
              <h4>Ria Supratman</h4>
              <p>Program Officer</p>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default EducarePages
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'
import IslamicHeader from '../assets/islamicheader.png'
import Salman from '../assets/salmanislamic.jpg'
import Syafei from '../assets/syafeiislamic.png'
import Footer from './Footer'
import '../css/PagesProgram.css'

const IslamicPages = () => {
  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);

  return (
    <div className='program-pages'>
      <div className='program-header'>
        <img src={IslamicHeader} alt='Islamic Care Header'/>
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
          <h1>PROGRAM ISLAMIC CARE</h1> <hr/>
        </div>
        <div className='text'>
          <p>Program Islamic Care telah berjalan sejak Tahun 70-an, programnya adalah bantuan zakat yang disalurkan melalui Program Ramadan seperti Idul Fitri Bahagia dan Tebar Iftar hingga program pembinaan berkelanjutan untuk asnaf dan kelompok dhuafa. Hingga saat ini, Islamic Care terus mengembangkan berbagai program yang bertujuan untuk meningkatkan “KUALITAS KEISLAMAN” – serta memberikan manfaat yang lebih luas kepada masyarakat.<br/>
          <br/>Saat ini, Islamic Care telah memperluas wilayah jangkauan program meliputi 60 Kabupaten dan Kota di Sulawesi Selatan, Sulawesi Barat, Sulawesi Tengah dan Sulawesi Tenggara. Kegiatan-kegiatan yang dilaksanakan oleh Islamic Care pada tahun 2024 meliputi bantuan berupa; Idul Fitri Bahagia, Tebar Iftar, Guru Ngaji Kompeten, Gema Sound System, Dai DBS, Pemberdayaan Asnaf dan Bina Tunarungu.</p> <br/>
        </div>
        <hr/>
        <div className='list-program'>
          <div className='program-tahun'>
            <h1>PROGRAM 2023 - 2024</h1>
            <ul className='nav-list'>
                <li className='list-item'>
                    <Link to='/idul-fitri-bahagia'>IDUL FITRI BAHAGIA</Link>
                </li>
                <li className='list-item'>
                    <Link to='/tebar-iftar'>TEBAR IFTAR</Link>
                </li>
                <li className='list-item'>
                    <Link to='/dai-dbs'>DAI DBS</Link>
                </li>
                <li className='list-item'>
                    <Link to='/gema-sound-system'>GEMA SOUND SYSTEM</Link>
                </li>
                <li className='list-item'>
                    <Link to='/guru-ngaji-kompeten'>GURU NGAJI KOMPETEN</Link>
                </li>
                <li className='list-item'>
                    <Link to='/pemberdayaan-asnaf'>PEMBERDAYAAN ASNAF</Link>
                </li>
                <li className='list-item'>
                    <Link to='/bina-tunarungu'>BINA TUNARUNGU</Link>
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
              <img src={Salman} alt='Salman Febriyansyah - Program Manager'/>
              <h4>Salman Febriyansyah</h4>
              <p>Program Manager</p>
            </div>
            <div className='program-mem'>
              <img src={Syafei} alt='M Syafei Karsali - Program Officer'/>
              <h4>M Syafei Karsali</h4>
              <p>Program Officer</p>
            </div>
          </div>
        </div>
      </div>
      {/* <div className='dokumentasi'>
        isinya foto-foto
      </div> */}
      <Footer/>
    </div>
  )
}

export default IslamicPages
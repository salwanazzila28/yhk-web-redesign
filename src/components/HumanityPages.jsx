import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'
import HumanityHeader from '../assets/humanityheader.png'
import sapril from '../assets/saprilhumanity.jpeg'
import jumadi from '../assets/jumadihumanity.jpg'
import Footer from './Footer'
import '../css/PagesProgram.css'

const HumanityPages = () => {
  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);

  return (
    <div className='program-pages'>
      <div className='program-header'>
        <img src={HumanityHeader} alt='Humanity & Environment Header'/>
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
          <h1>PROGRAM HUMANITY & ENVIRONMENT CARE</h1> <hr/>
        </div>
        <div className='text'>
          <p>Pada tahun 2024 ini terdapat 6 program utama yang menjadi rencana Kerja kegiatan bidang ini, antara lain; Program Penanggulangan Dampak Bencana, Mitigasi Bencana, Program Si Anak Sehat, Program Komunitas Aktif Jantung Sehat dan Program Kampung Hijau Energi dan Program Aksi Hijau Tangguh Iklim.<br/>
          <br/>Bidang Kesehatan, Lingkungan dan Kemanusiaan akan berfokus pada masalah penanganan stunting dengan melakuan pelatihan dan pendampingan kegiatan peningkatan pengetahuan komunitas ibu, nakes dan kader posyandu  dalam pemberian makanan tambahan yang berdampak pada pengurangan prevalansi stunting. Selanjutnya, Melakukan memberikan layanan kesehatan khitanan anak-anak usia dini dari keluarga dhuafa yang berasal dari kampung-kampung di wilayah kota Makassar dan desa-desa dampingan YHK yang tersebar di berbagai kabupaten se- Sulawesi Selatan.<br/>
          <br/>Dalam Isu lingkungan, berfokus pada program, Kampung Hijau Energi dan Aksi Hijau Tangguh Iklim. Program Kampung Hijau Energi sendiri adalah program yang mengusung integrasi keahlian hijau berbasis pemberdayaan masyarakat yang bertujuan untuk memberikan edukasi utilisasi energi hijau, tahun ini adalah lanjutan dari tahun sebelumnya dengan membangun reaktor biogas, sebagai energi alternatif yang juga membuka peluang produksi pupuk organik mandiri di pedesaan.</p> <br/>
        </div>
        <hr/>
        <div className='list-program'>
          <div className='program-tahun'>
            <h1>PROGRAM 2023 - 2024</h1>
            <ul className='nav-list'>
              <li className='list-item'>
                  <Link to='/program-respon-kebencanaan'>PROGRAM RESPON KEBENCANAAN</Link>
              </li>
              <li className='list-item'>
                  <Link to='/sianak-sehat'>SI ANAK SEHAT</Link>
              </li>
              <li className='list-item'>
                  <Link to='/kaderisasi-pelatih-senam-jantung-sehat'>KADERISASI PELATIH SENAM JANTUNG SEHAT</Link>
              </li>
              <li className='list-item'>
                  <Link to='/kampung-hijau-energi'>KAMPUNG HIJAU ENERGI</Link>
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
              <img src={sapril} alt='Therry Alghifary - Program Manager'/>
              <h4>Sapril Akhmadi</h4>
              <p>Program Manager</p>
            </div>
            <div className='program-mem'>
              <img src={jumadi} alt='Ria Supratman - Program Officer'/>
              <h4>Muhammad Jumadi</h4>
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

export default HumanityPages
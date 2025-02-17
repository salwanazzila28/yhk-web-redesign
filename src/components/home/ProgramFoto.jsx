import React from 'react';
import { Link } from 'react-router-dom';
import BeasiswaKalla from '../../assets/beasiswakalla.jpg';
import AktifPositif from '../../assets/aktifpositif.png'
import DesaBina from '../../assets/desa.jpg'
import './ProgramFoto.css'

const ProgramFoto = () => {

  return (
    <div className='program-foto'>
      <div className='profoto-title'>
        <h1>PROGRAM YANG SEDANG BERJALAN</h1>
        <hr/>
      </div>
      <div className='profoto-card'>
        <div className='profoto-one'>
          <Link to="https://educare.yayasanhadjikalla.co.id/aktifpositif">
          <img src={AktifPositif} alt='Poster Kegiatan Aktif Positif'></img>
          </Link>
        </div>

        <div className='profoto-two'>
          <Link to="/beasiswa-kalla">
            <img src={BeasiswaKalla} alt='Poster Beasiswa Kalla' />
          </Link>
        </div>

        <div className='profoto-three'>
          <Link to="/desa-bangkit-sejahtera"> 
            <img src={DesaBina} alt='Poster Desa Binaan Yayasan Hadji Kalla'></img>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ProgramFoto
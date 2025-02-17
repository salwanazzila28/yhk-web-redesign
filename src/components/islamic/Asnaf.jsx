import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'
import IslamicHeader from '../../assets/islamicheader.png'
import Dokumentasi from '../../assets/asnaf.jpg'
import '../../css/ListProgramPages.css'
import Footer from '../Footer'

const Asnaf = () => {
    useEffect(() => {
        window.scrollTo(0, 0); 
      }, []);

  return (
    <div className='list-program-pages'>
        <div className='program-header'>
            <img src={IslamicHeader} alt='Islamic Header'/>
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
            <h1>PEMBERDAYAAN KOMUNITAS ASNAF;</h1> <hr/>
            <hr/>
            </div>
            <div className='foto-program'>
                <img src={Dokumentasi} alt='Dokumentasi'/>
            </div>
            <div className='text-1'>
                <h3>PEMBERDAYAAN KOMUNITAS ASNAF;</h3>
                <p> Berdasarkan data yang dihimpun oleh Yayasan Hadji Kalla, komunitas asnaf dan mualaf mendapat kesulitan atas akses pendidikan dan pembelajaran agama serta kesulitan dalam pemenuhan kebutuhan hidup. Hal tersebut karena belum adanya lembaga yang secara rutin melakukan pembinaan kepada Mualaf. Atas dasar tersebut Yayasan Hadji Kalla melalui Lembaga Amil Zakat (LAZ) Hadji Kalla membuat program pemberdayaan pendidikan keislaman kepada asnaf Mualaf serta pemberian bantuan, pelatihan dan pendampingan usaha untuk kemandirian Mualaf . Selain itu, ada pula program bantuan Asnaf Fakir berupa bantuan renovasi rumah untuk para fakir terpilih yang telah melalui tahap seleksi dan survei dari tim LAZ Hadji Kalla. Pada tahun 2024, program ini akan menyasar komunitas asnaf yang ada di wilayah Kota Makassar dan Kabupaten Gowa.<br/>
                <br/>Program ini bersumber dari dana Zakat LAZ Hadji Kalla, yang diharapkan melalui program pembinaan dan pemberdayaan keagamaan, maka kelompok Asnaf bisa mandiri dan berdaya secara ekonomi.</p>
            </div>
            <hr/>
        </div>
        <Footer/>
    </div>
  )
}

export default Asnaf
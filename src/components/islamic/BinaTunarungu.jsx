import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'
import IslamicHeader from '../../assets/islamicheader.png'
import Dokumentasi from '../../assets/binatunarungu.jpg'
import '../../css/ListProgramPages.css'
import Footer from '../Footer'

const BinaTunarungu = () => {
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
            <h1>BINA TUNARUNGU</h1> <hr/>
            <hr/>
            </div>
            <div className='foto-program'>
                <img src={Dokumentasi} alt='Dokumentasi' />
            </div>
            <div className='text-1'>
                <h3>BINA TUNARUNGU;</h3>
                <p>Adalah Program Bantuan Produktif yang diberikan oleh Yayasan Hadji Kalla melalui Lembaga Amil Zakat (LAZ) Hadji Kalla untuk memberikan stimulus kepada para tunarungu yang dibantu agar bisa menjadi lebih produktif dan bisa mendapatkan pemasukan yang dikelola secara mandiri yang nantinya diharapkan bisa membuat mereka bisa mandiri dan berdikari secara ekonomi.<br/>
                <br/>Pada tahun 2023, Yayasan Hadji Kalla telah membantu komunitas/lembaga disabilitas khususnya tunarungu di Sulawesi Selatan untuk mandiri secara agama dan ekonomi. Selanjutnya, pada tahun 2024 pemberian bantuan usaha akan dilanjutkan dengan target lebih dari 500 penerima manfaat dapat dijangkau dalam program ini. Selain itu, akan diberikan pula Program Pelatihan Manajemen Usaha dan pendampingan.<br/>
                <br/>Dana program ini berasal dari dana himpunan zakat LAZ Hadji Kalla dan akan terus dikembangkan untuk bisa menyasar lebih banyak kelompok maupun individu tunarungu yang ada di Sulsel, Sulbar, Sulteng dan Sultra.</p>
            </div>
            <hr/>
        </div>
        <Footer/>
    </div>
  )
}

export default BinaTunarungu
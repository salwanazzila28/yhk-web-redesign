import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'
import HumanityHeader from '../../assets/humanityheader.png'
import Dokumentasi from '../../assets/kampunghijau.jpg'
import '../../css/ListProgramPages.css'
import Footer from '../Footer'

const KampungHijau = () => {
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
                <h1>KAMPUNG HIJAU ENERGI</h1> <hr/>
                <hr/>
                </div>
                <div className='foto-program'>
                    <img src={Dokumentasi} alt='Dokumentasi'/>
                </div>
                <div className='text-1'>
                    <h3>Kampung Hijau Energi; </h3>
                    <p>Program ini adalah program intergrasi pengembangan masyarakat berbasis pengetahuan hijau. Pengetahuan hijau banyak berkait dengan pengumpulan dan penyebaran pengetahuan tentang energi terbarukan yang terintegrasi dengan pengelolaan sumber daya alam serta pertanian berkelanjutan.<br/>
                    <br/>Latar belakang dari program ini berdasar pada masalah utama yang dijumpai di wilayah pedesaan di sulawesi selatan yang berkait dengan meningkatnya kebutuhan pupuk di desa yang berkurang (pupuk organik), Kebutuhan energi untuk Bahan bakar rumah tangga bergantung ke gas komersil dan berkait dengan pengetahuan energi terbarukan yang masih kurang di kalangan petani dan warga desa.<br/>
                    <br/>Satu upaya YHK untuk berkontribusi menjawab masalah tersebut adalah dengan mengembangkan program pemberdayaan masyarakat dengan menjadikan pemanfaat program sebagai subyek dalam proses pembangunan di wilayah Komunitas itu sendiri. Metode pembangunan masyarakat ini dikenal dengan nama ABCD (asset based commuity development atau pengembangan masyarakay berbasis potensi komunitas).<br/>
                    <br/>Proses ini menggunakan pendekatan partisipatif serta berbasis hasil (Result driven proses).<br/>
                    <br/>Dengan mengintegrasikan kebutuhan energi desa yang ramah dengan lingkungan dengan manfaat sirkular ekonomi di desa, YHK berharap bahwa manfaat dari program ini bisa menjamin keberlanjutan dampak (sustainable impact) dari semua capaian yang direncanakan.<br/>
                    <br/>Manfaat dari program ini juga diharapkan juga berkontribusi terhadap pencapaian tujuan pembangunan global yang berkait dengan;<br/>
                    <br/>Mengakhiri segala bentuk kemiskinan<br/>
                    <br/>Menghilangkan kelaparan dan mencapai ketahanan pangan dan gizi yang baik serta meningkatkan pertanian berkelanjutan<br/>
                    <br/>Menjamin kehidupan yang sehat dan meningkatkan kesejahteraan seluruh penduduk semua usia<br/>
                    <br/>Mencapai kesejahteraan gender dan memberdayakan kaum perempuan<br/>
                    <br/>Menjamin akses energi yang terjangkau, andal, berkelanjutan, dan moderen untuk semua<br/>
                    <br/>Meningkatkan pertumbuhan ekonomi yang inclusif dan berkelanjutan, kesempatan kerja yang produkstif dan menyeluruh, serta pekerjaan yang layak untuk semua<br/>
                    <br/>Mengambil Langkah dan tindakan darurat yang diperlukan untuk memerangi perubahan iklim dan dampaknya<br/>
                    <br/>Program ini bermaksud (GOAL) untuk :<br/>
                    <br/>Meningkatnya ketahanan energi desa yang terintegrasi dengan pertanian ramah lingkungan warga desa<br/>
                    <br/>Tujuan dari program (PURPOSES) ini adalah :<br/>
                    <br/>kepedulian dan pengetahuan Komunitas akan energi alternatif rumah tangga berbasis pengolahan limbah di wilayah progra<br/>
                    <br/>Meningkatnya ketersediaan pupuk organik pertanian alternatif di wilayah<br/>
                    <br/>kesempatan dalam peningkatan pendapatan alternatif bagi warga desa<br/>
                    <br/>Sasaran (OBJECTIVES) dari program ini adalah:<br/>
                    <br/>Terbangunnya 4 sarana digister biogas<br/>
                    <br/>Terbangunnya 4 kelompok ekonomi Komunitas yang terintegrasi dengan BUMDES<br/>
                    <br/>Terlatihnya 40 orang kader desa tangguh energi (Trainer atau specialist bio-slurry) di empat desa<br/>
                    <br/>Meningkatnya kepedulian dan pengetahuan 200 orang dalam pengembangan desa berbasis energi baru terbarukan<br/>
                    <br/>Terbangunnya 4 Gerai pupuk organik<br/>
                    <br/>Bentuk Intervensi Program (ACTIVITY)<br/>
                    <br/>Penguatan Organisasi kelompok;<br/>
                    <br/>target luaran dari aktivitas ini berfokus pada menjawab sasaran 2 dan 5 (terbentuk dan berkembangnya kelompok komunitas)<br/>
                    <br/>Memberikan edukasi dan pemahaman kolektif akan penggunaan energi baru terbarukan/biogas;<br/>
                    <br/>Target luaran dari aktivitas ini berfokus pada menjawab sasaran 3 dan 4 (Komunitas tutor/pelatih dan warga yang dilatih)<br/>
                    <br/>Kapasitasi pembangunan digister bio gas berbasis kemitraan;<br/>
                    <br/>Target luaran Dari aktivitas ini berfokus pada menjawab sasaran 1 (terbangunannya 4 fasilitas digister biogas)<br/>
                    <br/>Melakukan kapasitasi dan pendampingan Komunitas untuk memproduksi pupuk organik berbasis bioslurry<br/>
                    <br/>Target luaran dari aktivitas ini berfokus Sasaran 5 pada produksi pupuk organik yang berstandar SNI sehingga dapat dipasarkan secara komersil.<br/>
                    <br/>Menguatkan rantai pasok produksi pupuk;<br/>
                    <br/>Target luaran dari aktivitas ini berfokus Sasaran 5 yaitu adanya gerai pupuk organik yang mandiri dikelola oleh kelompok yang melayani kebutuhan pertanian pada produksi pupuk organik yang melayani kebutuhan Komunitas sekitar.<br/>
                    <br/>Monitoring, Evaluasi dan Learning/Pembelajaran<br/>
                    <br/>Untuk evaluasi, penilaian bersama dilakukan berdasarkan dari survey awal base line terhadap pengaruh atau dampak intervensi program dalam menjawab persoalan serta melakukan perubahan yang positif. Evaluasi dilakukan dua tahap yaitu midline dan endline di akhir tahun program<br/>
                    <br/>Sedangkan learning atau pembelajaran adalah proses mengumpulkan praktik praktik cerdas untuk menjadi dokumentasi praktik baik (best practices) yang berbentuk tulisan dan visual yang dapat dijadikan pembalajaran dalam mereplikasi atau melakukan program serupa di desa desa atau lokasi lain.<br/>     
                    <br/>Program ini direncanakan akan dilakukan di lokasi terpilih sesuai dengan hasil survey Rencana Lokasi adalah;<br/>
                    <br/>1. Kabupaten Bone.<br/>
                    <br/>2. Kabupaten Wajo.<br/>
                    <br/>3. Kabupaten Gowa.<br/>
                    <br/>4. Kabupaten Takalar.</p>
                </div>
                <hr/>
            </div>
        <Footer/>
    </div>
  )
}

export default KampungHijau
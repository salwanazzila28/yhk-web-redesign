import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import foto1 from '../assets/foto1.png'
import Dewan1 from '../assets/dewanyusuf.jpg'
import Dewan2 from '../assets/dewan2cw.jpg'
import Dewan3 from '../assets/direktur.png'
import Footer from './Footer';
import '../css/AboutPages.css';

const AboutPages = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
        AOS.init();
    }, []);

  return (
    <div className='about'>
        <div className='about-container'>
            <div className="video-container">
                <iframe
                    src="https://www.youtube.com/embed/SJ9cksMYU1Q?si=aYvXMaC2sdaDY1lL"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </div>
            <div className='about-text'>
                <div className='title-text'>
                    <p>TENTANG KAMI</p>
                </div>
                <div className='slogan'>
                    <h1>Aktif Bersama Membangun Bangsa</h1>
                </div>
                <div className='paragraf'>
                    <p>Yayasan Hadji Kalla tampil sebagai garda terdepan dalam mewujudkan perubahan yang berarti bagi masyarakat. Kami percaya bahwa melalui kolaborasi yang kuat dan dedikasi yang tanpa henti, kita dapat menciptakan masa depan yang lebih baik bagi bangsa ini. <br/>
                    <br/>Bersama-sama, kita adalah agen perubahan yang mampu membawa harapan dan kemajuan kepada banyak orang. </p>
                </div>
                <div className="btn-kontak">
                    <Link to='/kontak' className='button'>Kontak Kami</Link>
                </div>
            </div>
        </div>
        
        <section class="timeline-section">
            <div className='title' data-aos="fade-up">
                <h1>SEJARAH YAYASAN HADJI KALLA</h1>
            </div>
            <div class="timeline-items" data-aos="fade-up">
                <div class="timeline-item">
                    <div class="timeline-dot"></div>
                    <div class="timeline-date"><h2>1981</h2></div>
                    <div class="timeline-content-right">
                        <p>Dengan nama awal Yayasan Pendidikan dan Kesejahteraan Islam Hadji Kalla atau disingkat dengan Yayasan Hadji Kalla Didirikan oleh Bapak Drs. H. Muhammad Jusuf  Kalla di Kota Makassar, Sulawesi Selatan.  Bermula dari keinginan kuat dari sosok almarhum Bapak Hadji Kalla dan istrinya Ibu Hj. Athirah untuk berperan aktif dalam memajukan bangsa Indonesia melalui kegiatan-kegiatan sosial.</p>
                    </div>
                </div>
                <div class="timeline-item" data-aos="fade-up">
                    <div class="timeline-dot"></div>
                    <div class="timeline-date"><h2>1984</h2></div>
                    <div class="timeline-content-left">
                        <p>Mendirikan Sekolah Islam Athirah, di Kota Makassar. Menjadi sekolah swasta dengan jejang dari SD – SMA yang modern pertama dan terbesar di Makassar.</p>
                    </div>
                </div>
                <div class="timeline-item" data-aos="fade-up">
                    <div class="timeline-dot"></div>
                    <div class="timeline-date"><h2>1999</h2></div>
                    <div class="timeline-content-right">
                        <p>Memulai program Beasiswa Kalla, dengan mengirim puluhan siswa lulusan SMP terbaik dari beberapa kota/kabupaten di Sulawesi Selatan untuk melanjutkan pendidikan di level SMA dan seterusnya di perguruan tinggi terbaik di Indonesia.</p>
                    </div>
                </div>
                <div class="timeline-item" data-aos="fade-up">
                    <div class="timeline-dot"></div>
                    <div class="timeline-date"><h2>2013</h2></div>
                    <div class="timeline-content-left">
                        <p>Pengelolaan profesional dengan membentuk organisasi yang lengkap dan ruang lingkup kerja yang sudah dibagi secara tematik. Wilayah kerja menjangkau 4 provinsi di pulau Sulawesi.</p>
                    </div>
                </div>
                <div class="timeline-item" data-aos="fade-up">
                    <div class="timeline-dot"></div>
                    <div class="timeline-date"><h2>2019</h2></div>
                    <div class="timeline-content-right">
                        <p>Menjadi bagian dari komunitas filantropis di Indonesia dengan bergabung di Perkumpulan Filantropi Indonesia dan Dewan Tanggung Jawab Sosial dan Lingkungan Perusahaan (TSLP).</p>
                    </div>
                </div>
                <div class="timeline-item" data-aos="fade-up">
                    <div class="timeline-dot"></div>
                    <div class="timeline-date"><h2>2020</h2></div>
                    <div class="timeline-content-left">
                        <p>Mendapatkan izin dari Kementerian Agama sebagai Lembaga Amil Zakat (LAZ) skala nasional. Program kerja di 3 provinsi selain Sulawesi Selatan ditambah dan diintensifkan.</p>
                    </div>
                </div>
            </div>
        </section>
        <div className='visi-misi'>
            <img src={foto1} alt='foto1'/>
            <div className='col-2'>
            <h2>VISI</h2>
            <span className='line'></span>
            <p> Terdepan dalam Pengembangan Keislaman,  Mutu Pendidikan,  Kesejahteraan, Kesehatan, Lingkungan Hidup dan Pemberdayaan Masyarakat.</p>
            <h2>MISI</h2>
            <span className='line2'></span>
            <ol>
                <li>Meningkatkan Kualitas Akhlak Islami Masyarakat</li>
                <li>Meningkatkan Kualitas dan Prestasi Pendidikan Masyarakat</li>
                <li>Meningkatkan Taraf Ekonomi Masyarakat Menuju Kehidupan Keluarga yang Sejahtera, Sehat dan Bahagia</li>
                <li>Membina Kaum Dhuafa untuk Membangun Usaha Kecil dan Menengah</li>
                <li>Meningkatkan Taraf Kesehatan dan Lingkungan</li>
            </ol>
            </div>
        </div>
        <hr/>
        <div className='location'>
            <div className='location-text'>
                <h2>KANTOR PUSAT</h2>
                <div className='loct'>
                    <p>Wisma Kalla lantai 6, Jalan Doktor Sam Ratulangi No. 8, Kota Makassar</p>
                    <p>Phone: 0411-870111</p>
                </div>
            </div>
            <div className='map-container'>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3973.7161778399472!2d119.41255102439621!3d-5.149310402049393!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dbf1d5653cb9bb1%3A0x7012d9bdf3542cd1!2sWisma%20Kalla%2C%20Jl.%20DR.%20Ratulangi%20No.8%2C%20Kunjung%20Mae%2C%20Kec.%20Mariso%2C%20Kota%20Makassar%2C%20Sulawesi%20Selatan!5e0!3m2!1sid!2sid!4v1712288631279!5m2!1sid!2sid"
                    width="100%"
                    height="450"
                    style={{ border: 10 }}
                    allowfullscreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                    title="Google Maps"
                ></iframe>
            </div>
        </div>
        <hr/>
        <div className='dewan'>
            <div className='title'>
                <h1>DEWAN</h1>
                <span className='line'></span>
            </div>
            <div className='members'>
                <div className='team-mem'>
                    <img src={Dewan1} alt='Drs. H. M. Jusuf Kalla - Ketua Dewan Pembina'/>
                    <h4>Drs. H. M. Jusuf Kalla</h4>
                    <p>Ketua Dewan Pembina</p>
                </div>
                <div className='team-mem'>
                    <img src={Dewan2} alt='Hj. Fatimah Kalla - Ketua Dewan Pengurus'/>
                    <h4>Hj. Fatimah Kalla</h4>
                    <p>Ketua Dewan Pengurus</p>
                </div>
                <div className='team-mem'>
                    <img src={Dewan3} alt='Muhammad Zuhair - Direktur Eksekutif'/>
                    <h4>Muhammad Zuhair</h4>
                    <p>Direktur Eksekutif</p>
                </div>
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default AboutPages
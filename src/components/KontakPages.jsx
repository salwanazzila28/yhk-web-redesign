import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { FaMapMarkerAlt, FaRegEnvelope, FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';
import { FiPhoneCall } from 'react-icons/fi'
import KallaCareFoto from '../assets/kallacarefoto.jpg'
import emailjs from '@emailjs/browser'
import Footer from './Footer'
import '../css//KontakPages.css'

const KontakPages = () => {
  const [values, setValues] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    subject: '',
    role: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.send('service_hhcdcz9', 'template_udjzjmo', values, 'SpfPESQXHUPOlUKBO')
      .then(response => {
        console.log('SUCCESS!', response);
        setValues({
          fullName: '',
          email: '',
          phoneNumber: '',
          subject: '',
          role: '',
          message: ''
        });
        setStatus('SUCCESS');
      }, error => {
        console.log('FAILED...', error);
      });
  }

  useEffect(() => {
    if(status === 'SUCCESS') {
      setTimeout(() => {
        setStatus('');
      }, 3000);
    }
  }, [status]);

  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []); 

  const handleChange = (e) => {
    setValues(values => ({
      ...values,
      [e.target.name]: e.target.value
    }))
  }

  const renderAlert = () => (
    <div className="alert-container">
      <p>Pesan Berhasil Dikirim</p>
    </div>
  )

  return (
    <div class="contact">
      <div className="contact-header">
        <div className="contact-title">
          <h1>Hubungi Kami</h1>
          <p>Kami siap menerima pesan, kolaborasi, dan pertanyaan dari Anda.<br/>
          <br/>Jangan ragu untuk menghubungi kami melalui saluran kontak di bawah ini. </p>
          <div className="sosial-media">
            <p>Sosial Media Kami :</p>
              <div className="media-links">
                <Link to="https://web.facebook.com/YayasanKalla" className="icon-media"><FaFacebookF className="icon"/>  Yayasan Kalla </Link>
                <Link to="https://twitter.com/yayasankalla" className="icon-media"><FaTwitter className="icon"/>  @YayasanKalla </Link>
                <Link to="https://www.instagram.com/yayasankalla/" className="icon-media"><FaInstagram className="icon"/>  @yayasankalla</Link>
                <Link to="www.youtube.com/@yayasanhadjikalla1984" className="icon-media"><FaYoutube className="icon"/>  Yayasan Hadji Kalla</Link>
              </div>
          </div>
        </div>
        <img src={KallaCareFoto} alt="Kalla Care"/>
      </div>
      <div className='contact-info'>
        <div className='details'>
          <FaMapMarkerAlt className="icon" style={{ color: '#d89613' }}/>
          <div class="topic">Kantor Pusat</div>
          <div class="text-one">Wisma Kalla lantai 6</div>
          <div class="text-two">Jl. DR. Ratulangi No.8, Kota Makassar</div>
        </div>
        <div class="details">
          <FiPhoneCall className="icon" style={{ color: '#d89613' }}/>
          <div class="topic">Kontak</div>
          <div class="text-one">0811-4414-030 (WA) </div>
          <div class="text-two">0411-3000103 (Telp) </div>
        </div>
        <div class="details">
          <FaRegEnvelope className="icon" style={{ color: '#d89613' }}/>
          <div class="topic">Email</div>
          <div class="text-one">kalla.care@kalla.co.id</div>
        </div>
      </div>
      <div className="map-message">
        <div className="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3973.7161778399472!2d119.41255102439621!3d-5.149310402049393!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dbf1d5653cb9bb1%3A0x7012d9bdf3542cd1!2sWisma%20Kalla%2C%20Jl.%20DR.%20Ratulangi%20No.8%2C%20Kunjung%20Mae%2C%20Kec.%20Mariso%2C%20Kota%20Makassar%2C%20Sulawesi%20Selatan!5e0!3m2!1sid!2sid!4v1712288631279!5m2!1sid!2sid"
            width="100%"
            height="450"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            title="Google Maps">
          </iframe>
        </div>
        <div className='message'>
          {status && renderAlert()}
          <form onSubmit={handleSubmit}>
            <h2>Kirim Pesan</h2>
            <div className='input-box'>
              <input type="text" name="fullName" placeholder="Nama" value={values.fullName} onChange={handleChange} required />
            </div>
            <div className='input-box'>
              <input type="email" placeholder="Email" name="email" value={values.email} onChange={handleChange} required />
            </div>
            <div className='input-box'>
              <input type="number" placeholder="Nomor WhatsApp" name="phoneNumber" value={values.phoneNumber} onChange={handleChange} required />
            </div>
            <div className='input-box'>
              <input type="text" placeholder="Subject" name="subject" value={values.subject} onChange={handleChange} required />
            </div>
            <div className='option'>
              <select name="role" placeholder="Kategori" value={values.role} onChange={handleChange} required>
                <option value="" disabled> Kategori</option>
                <option value="Educare">Educare</option>
                <option value="Community Development">Community Development</option>
                <option value="Humanity Care">Humanity Care</option>
                <option value="Islamic Care">Islamic Care</option>
                <option value="Lainnya">Lainnya</option>
              </select>
            </div>
            <div className='input-text'>
              <textarea name="message" placeholder="Pesan" rows="4" value={values.message} onChange={handleChange} required></textarea>
            </div>
            <div>
              <button type="submit"> Kirim</button> 
            </div>
            {status && renderAlert()}
          </form>
        </div>
      </div>
    <Footer/>
    </div>
  )
}

export default KontakPages
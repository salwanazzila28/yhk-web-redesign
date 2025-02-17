import React, { useEffect, useState } from "react";
import emailjs from '@emailjs/browser'
import Footer from './Footer'
import '../css/SaranPages.css'

const SaranPages = () => {
  const [values, setValues] = useState({
    fullName: '',
    email: '',
    role: '',
    departure: '',
    city: '',
    province: '',
    phoneNumber: '',
    age: '',
    kritik: '',
    saran: '',
  });
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.send('service_hhcdcz9', 'template_1iyj5yo', values, 'SpfPESQXHUPOlUKBO')
      .then(response => {
        console.log('SUCCESS!', response);
        setValues({
          fullName: '',
          email: '',
          role: '',
          departure: '',
          city: '',
          province: '',
          phoneNumber: '',
          age: '',
          kritik: '',
          saran: '',
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
      <p>Saran Anda Berhasil Dikirim.</p>
      <p>Terimakasih Telah Memberi Saran & Kritik</p>
    </div>
  )

  return (
    <div class="saran">
      <div className="header-saran">
        <div className="body-header">
          <h1>Kotak Saran</h1>
          <p>Pendapat Anda penting! Bagikan pemikiran Anda kepada kami.</p>
        </div>
      </div>
      <div className='form-saran'>
        {status && renderAlert()}
        <form onSubmit={handleSubmit}>
          <h1>Kirim Saran dan Kritik</h1>
          <div className='input-box'>
            <input type="text" name="fullName" placeholder="Nama" value={values.fullName} onChange={handleChange} required />
          </div>
          <div className='input-box'>
            <input type="email" placeholder="Email" name="email" value={values.email} onChange={handleChange} required />
          </div>
          <div className='option'>
            <select name="role" placeholder="Kategori" value={values.role} onChange={handleChange} required>
              <option value="" disabled> Kategori</option>
              <option value="Umum">Umum</option>
              <option value="Educare">Educare</option>
              <option value="Community Development">Community Development</option>
              <option value="Humanity Care">Humanity Care</option>
              <option value="Islamic Care">Islamic Care</option>
              <option value="Educare">UMKM</option>
              <option value="Lainnya">Lainnya</option>
            </select>
          </div>
          <div className='input-box'>
            <input type="text" name="departure" placeholder="Instansi" value={values.departure} onChange={handleChange} required />
          </div>
          <div className='input-box'>
            <input type="text" name="city" placeholder="Kota/Kabupaten" value={values.city} onChange={handleChange} required />
          </div>
          <div className='input-box'>
            <input type="text" name="province" placeholder="Provinsi" value={values.province} onChange={handleChange} required />
          </div>
          <div className='input-box'>
            <input type="number" placeholder="Nomor WhatsApp" name="phoneNumber" value={values.phoneNumber} onChange={handleChange} required />
          </div>
          <div className='input-box'>
            <input type="number" placeholder="Usia" name="age" value={values.age} onChange={handleChange} required />
          </div>
          <div className='input-text'>
            <textarea name="kritik" placeholder="Kritik" rows="4" value={values.kritik} onChange={handleChange} required></textarea>
          </div>
          <div className='input-text'>
            <textarea name="saran" placeholder="Saran" rows="4" value={values.saran} onChange={handleChange} required></textarea>
          </div>
          <div>
            <button type="submit"> Kirim</button> 
          </div>
          {status && renderAlert()}
        </form>
      </div>
    <Footer/>
    </div>
  )
}

export default SaranPages
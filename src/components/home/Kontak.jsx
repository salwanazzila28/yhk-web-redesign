import React from "react";
import { Link } from 'react-router-dom';
import { FaRegEnvelope, FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';
import { FiMapPin, FiPhoneCall } from 'react-icons/fi'
import './Kontak.css'

const Kontak = () => {
  return (
    <div class="contact-home">
      <div className="contact-home-title">
        <h1>HUBUNGI KAMI</h1>
        <hr/>
      </div>
      <div className='details-contact'>
        <div className="map">
            <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3973.7161778399472!2d119.41255102439621!3d-5.149310402049393!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dbf1d5653cb9bb1%3A0x7012d9bdf3542cd1!2sWisma%20Kalla%2C%20Jl.%20DR.%20Ratulangi%20No.8%2C%20Kunjung%20Mae%2C%20Kec.%20Mariso%2C%20Kota%20Makassar%2C%20Sulawesi%20Selatan!5e0!3m2!1sid!2sid!4v1712288631279!5m2!1sid!2sid"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            title="Google Maps">
            </iframe>
        </div>
        <div className='contact-home-info'>
            <div className="details-info">
              <FiMapPin size={40} style={{ color: '#d89613' }} className="icon"/>
              <div className="details-text">
                <p>Wisma Kalla lantai 6</p>
                <p>Jl. DR. Ratulangi No.8, Kota Makassar</p>
              </div> 
            </div>
            <div className="details-info">
              <FiPhoneCall size={40} style={{ color: '#d89613' }} className="icon"/>
              <div className="details-text">
                <p>0811-4414-030 (WA)</p>
                <p>0411-3000103 (Telp) </p>
              </div> 
            </div>
            <div className="details-info">
              <FaRegEnvelope size={40} style={{ color: '#d89613' }} className="icon"/>
              <div className="details-text1">
                <p>kalla.care@kalla.co.id</p>
              </div> 
            </div>
            <div className="sosmed">
              <Link to="https://web.facebook.com/YayasanKalla" className="icon-link"><FaFacebookF /></Link>
              <Link to="https://twitter.com/yayasankalla" className="icon-link"><FaTwitter /></Link>
              <Link to="https://www.instagram.com/yayasankalla/" className="icon-link"><FaInstagram /></Link>
              <Link to="www.youtube.com/@yayasanhadjikalla1984" className="icon-link"><FaYoutube /></Link>
            </div>
            <div className="btn-pesan">
              <Link to='/kontak' className='button'>Kirim Pesan</Link>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Kontak
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';
import EducareLogo from '../../assets/edulogo.png';
import IslamicLogo from '../../assets/islamiclogo.png'
import HumanityLogo from '../../assets/humanitylogo.png'
import CommunityLogo from '../../assets/commulogo.png'
import './Program.css'

const Program = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className='program-home'>
      <div className='program-header' data-aos="fade-up">
        <h1>PROGRAM KAMI</h1>
      </div>
      <div className='program-list' data-aos="fade-up">
        <div className='carpo'>
          <div className='face front'>
            <img src={EducareLogo} alt='EDUCARE' />
            <h3>EDUCARE</h3>
          </div>
          <div className='face back'>
            <h3>EDUCARE</h3>
            <p>Meningkatkan kualitas dan prestasi pendidikan</p>
            <div className='link'>
              <Link to='/educare'>Selengkapnya</Link>
            </div>
          </div>
        </div>

        <div className='carpo'>
          <div className='face front'>
            <img src={CommunityLogo} alt='COMMUNITY DEVELOPMENT'/>
            <h3>COMMUNITY DEVELOPMENT</h3>
          </div>
          <div className='face back'>
            <h3>COMMUNITY DEVELOPMENT</h3>
            <p>Meningkatkan taraf ekonomi masyarakat menuju kehidupan keluarga yang sejahtera, sehat dan bahagia</p>
            <div className='link'>
             <Link to='/community-development'>Selengkapnya</Link>
            </div>
          </div>
        </div>

        <div className='carpo'>
          <div className='face front'>
            <img src={HumanityLogo} alt='HUMANITY AND ENVIRONMENT'/>
            <h3>HUMANITY AND ENVIRONMENT</h3>
          </div>
          <div className='face back'>
            <h3>HUMANITY AND ENVIRONMENT</h3>
            <p>Meningkatkan taraf kesehatan dan lingkungan</p>
            <div className='link'>
              <Link to='/humanity-environment-care'>Selengkapnya</Link>
            </div>
          </div>
        </div>

        <div className='carpo'>
          <div className='face front'>
            <img src={IslamicLogo} alt='ISLAMIC CARE'/>
            <h3>ISLAMIC CARE</h3>
          </div>
          <div className='face back'>
            <h3>ISLAMIC CARE</h3>
            <p>Meningkatkan kualitas akhlak Islami masyarakat</p>
            <div className='link'>
              <Link to='/islamic-care'>Selengkapnya</Link>
            </div>
          </div>
        </div>
    </div>
    </div>
  )
}

export default Program 
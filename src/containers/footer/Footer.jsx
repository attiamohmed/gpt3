import React from 'react';
import './footer.css';
import gpt3Logo from '../../assets/logo.svg'

const Footer = () => {
  return (
    <div className='gpt3__footer section__padding'>
      <div className='gpt3__footer-heading'>
        <h1 className='gradient__text'>Do you want to step in to the future before others</h1>
      </div>
      <div className='gpt3__footer-btn'>
        <p>Get Started Now</p>
      </div>
      <div className='gpt3__footer-links'>
        <div className='gpt3__footer-links_logo'>
          <img src={gpt3Logo} alt='logo' />
          <p>1234 Innovation Drive, Suite 567, San Francisco, CA 94105, USA</p>
        </div>
        <div className='gpt3__footer-links_div'>
          <h4>Links</h4>
          <p>About Us</p>
          <p>Social Media</p>
          <p>Careers</p>
          <p>Support</p>
        </div>
        <div className='gpt3__footer-links_div'>
          <h4>Company</h4>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
          <p>Contact Us</p>
        </div>
        <div className='gpt3__footer-links_div'>
          <h4>Get in touch</h4>
          <p>1234 Innovation Drive, Suite 567, San Francisco, CA 94105, USA</p>
          <p>415-123-4567</p>
          <p>info@attia.net</p>
        </div>
      </div>
      <div className='gpt3__footer-copyright'>
        <p>© 2021 GPT-3. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer

import React from 'react';
import './Footer.css';
import chair from '../chairperson.jpg';
import principal from '../principal.jpg';
import vp from '../viceprincipal.jpg';
import linkedin from '../linkedin.png';
import twitter from '../twitter.png';
import insta from '../instagram.png';

function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-left">
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          <img src={linkedin} alt="LinkedIn" />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <img src={twitter} alt="Twitter" />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <img src={insta} alt="Instagram" />
        </a>
      </div>

      <div className="footer-center">
        <div className="official">
          <img src={chair} alt="Chairperson" />
          <div>
            <h4>Chairperson</h4>
            <p>chair@college.edu</p>
          </div>
        </div>
        <div className="official">
          <img src={principal} alt="Principal" />
          <div>
            <h4>Principal</h4>
            <p>principal@college.edu</p>
          </div>
        </div>
        <div className="official">
          <img src={vp} alt="Vice Principal" />
          <div>
            <h4>Vice Principal</h4>
            <p>vp@college.edu</p>
          </div>
        </div>
      </div>

      <div className="footer-right">
        <p><strong>Phone:</strong> 0123-456789</p>
        <p><strong>Email:</strong> info@college.edu</p>
      </div>
    </footer>
  );
}

export default Footer;

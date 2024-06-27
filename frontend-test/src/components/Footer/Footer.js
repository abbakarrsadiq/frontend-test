import React from 'react';
import './Footer.css';
import logo from './logo.png';
import whatsapp from './whatsapp.png';
import outline from './outline.png';

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer-newsletter">
          <h2>Newsletter</h2>
          <p>
            Get the latest about SINC Partners, our startup Incubator program,
            Portfolio company offerings - straight into your inbox.
          </p>
          <form className="footer-newsletter-form">
            <input type="email" placeholder="Enter your email address" />
            <button type="submit" className="subscribe-button">Subscribe</button>
          </form>
        </div>
        <hr className="footer-hr" />
        <div className="footer-content">
          <div className="footer-section footer-about">
            <div className="footer-logo">
              <img src={logo} alt="SINC Partners" />
            </div>
            <p>
              SINC Partners is a service incubation company connecting experts in
              product development and growth marketing willing to offer their
              services to amazing startups in exchange for minute equity (usually
              0.5% to 2%).
            </p>
          </div>
          <div className="footer-section footer-links">
            <h4>Platforms</h4>
            <ul>
              <li>Kofoundme</li>
              <li>InResidency</li>
              <li>Service Market</li>
              <li>Founders School</li>
              <li>Metty</li>
              <li>Grantty</li>
              <li>Boldtell</li>
              <li>Chekwa</li>
            </ul>
          </div>
          <div className="footer-section footer-links">
            <h4>Initiatives</h4>
            <ul>
              <li>Jabi Plains</li>
              <li>Local Pricing Initiative</li>
              <li>Scholarship Program</li>
              <li>SSMN Pricing</li>
              <li>University STEM</li>
              <li>University InResidency</li>
              <li>1M Nigeria Products</li>
              <li>Founders Festival</li>
            </ul>
          </div>
          <div className="footer-section footer-links">
            <h4>About Us</h4>
            <ul>
              <li>Who We Are</li>
              <li>Our People</li>
              <li>Concept Innovations</li>
              <li>Our Process</li>
              <li>Investors Network</li>
              <li>CSR & Events</li>
              <li>Career</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="footer-section footer-links">
            <h4>More</h4>
            <ul>
              <li>Services</li>
              <li>Equity Jobs</li>
              <li>EIR Program</li>
              <li>Offers</li>
              <li>Innovation News</li>
              <li>FAQ</li>
              <li>Blog & Resources</li>
              <li>Press</li>
            </ul>
          </div>
          <div className="footer-section footer-locations">
            <h4>Locations</h4>
            <ul>
              <li>Abuja, Nigeria</li>
              <li>Lagos, Nigeria</li>
              <li>Philadelphia, USA</li>
            </ul>
            <div className="footer-accreditation">
              <div className="trusted-business">
                <img src={outline} alt="Accredited Business A+" />
                <p>Trusted Business</p>
              </div>
              <div className="chat-with-us">
                <img src={whatsapp} alt="WhatsApp" />
                <p>Chat with US</p>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>
            © 2023 SINC Partners Ltd. All rights reserved
            <span className="footer-bottom-links">
              <a href="/privacy-policy">Privacy Policy</a>
              <a href="/terms-of-service">Terms of Service</a>
              <a href="/security">Security</a>
            </span>
          </p>
          <p>Web In Nigeria 🇳🇬</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;

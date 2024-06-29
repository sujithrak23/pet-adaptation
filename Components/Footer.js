import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="social-media" style={{backgroundColor:'gary'}}>
          <span>Connect with us on social media:</span>
          <a href="https://www.facebook.com" target="_blank" rel="noreferrer" className="social-icon">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noreferrer" className="social-icon">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noreferrer" className="social-icon">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="social-icon">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://www.github.com" target="_blank" rel="noreferrer" className="social-icon">
            <i className="fab fa-github"></i>
          </a>
        </div>
      </div>
      <div className="footer-main">
        <div className="footer-section">
          <h6 className="footer-title">
            <i className="fas fa-paw"></i> Pet Adoption
          </h6>
          <p>
            Bringing joy to families by connecting them with loving pets. Our mission is to ensure every pet finds a caring home.
          </p>
        </div>
        <div className="footer-section">
          <h6 className="footer-title">Services</h6>
          <p><a href="#!">Adoption</a></p>
          <p><a href="#!">Foster Care</a></p>
          <p><a href="#!">Volunteer</a></p>
          <p><a href="#!">Donations</a></p>
        </div>
        <div className="footer-section">
          <h6 className="footer-title">Resources</h6>
          <p><a href="#!">Pet Care Tips</a></p>
          <p><a href="#!">Adoption Process</a></p>
          <p><a href="#!">FAQs</a></p>
          <p><a href="#!">Contact Us</a></p>
        </div>
        <div className="footer-section">
          <h6 className="footer-title">Contact</h6>
          <p><i className="fas fa-home"></i> 123 Pet Street, Petville, PA 12345, USA</p>
          <p><i className="fas fa-envelope"></i> contact@petadoption.com</p>
          <p><i className="fas fa-phone"></i> +1 234 567 890</p>
          <p><i className="fas fa-print"></i> +1 234 567 891</p>
        </div>
      </div>
      <div className="footer-bottom" style={{backgroundColor:'gary'}}>
        © 2024 Pet Adoption
      </div>
    </footer>
  );
}

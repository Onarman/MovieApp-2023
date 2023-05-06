import React from "react";
// import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <ul className="footer-nav">
          <li>
            <a href="#">Ana Sayfa</a>
          </li>
          <li>
            <a href="#">Hakkımızda</a>
          </li>
          <li>
            <a href="#">Hizmetlerimiz</a>
          </li>
          <li>
            <a href="#">İletişim</a>
          </li>
        </ul>
        {/* <div className="footer-logo">
          <a href="#">
            <img src="logo.png" alt="Logo" />
          </a>
        </div> */}
      </div>
      <div className="footer-social">
        <a href="#">
          <i className="fab fa-facebook"></i>
        </a>
        <a href="#">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="#">
          <i className="fab fa-instagram"></i>
        </a>
      </div>
      <div className="footer-bottom">
        <p>Telif Hakkı © 2023</p>
      </div>
    </footer>
  );
};

export default Footer;
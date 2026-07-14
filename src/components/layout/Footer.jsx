import "../../assets/styles/footer.css";
import logo from "../../assets/images/logo/footer-logo.png";
import { Link } from "react-router-dom";

import {
  FaInstagram,
  FaYoutube,
  FaFacebookF,
  FaLinkedin,
  FaWhatsapp,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* Brand */}
        <div className="footer-column">

          <div className="footer-brand">
            <img src={logo} alt="Dazzler Films" />
            <h2></h2>
          </div>

          <p>
            Crafting Stories Through Cinema,
            Photography & Visual Production.
          </p>

        </div>

        {/* Navigation */}
        <div className="footer-column">

          <h3>Quick Links</h3>

          <Link to="/">Home</Link>
          <Link to="/">Our Services</Link>
          <Link to="/">Behind Our Lens</Link>
          <Link to="/about">About Us</Link>

        </div>

        {/* Contact */}

<div className="footer-column">

    <h3>Contact</h3>

    <div className="footer-contact-item">

        <FaMapMarkerAlt className="footer-contact-icon" />

        <div>

            <strong>Mumbai, India</strong>

            <small>Available for travel worldwide</small>

        </div>

    </div>

    <div className="footer-contact-item">

        <FaEnvelope className="footer-contact-icon" />

        <a href="mailto:businesswithdazzler@gmail.com">

            businesswithdazzler@gmail.com

        </a>

    </div>

    <div className="footer-contact-item">

        <FaWhatsapp className="footer-whatsapp-icon" />

        <a
            href="https://wa.me/918827946769"
            target="_blank"
            rel="noreferrer"
        >

            +91 88279 46769

        </a>

    </div>

    <div className="footer-contact-item">

        <FaPhoneAlt className="footer-contact-icon" />

        <a href="tel:+917028750343">

            +91 70287 50343

        </a>

    </div>

</div>

        {/* Legal */}
        <div className="footer-column">

          <h3>Legal</h3>

          <Link to="/terms-and-conditions">
    Terms & Conditions
</Link>

          <Link to="/collaboration-guidelines">
            Collaboration Guidelines
          </Link>

        </div>

        {/* Follow Us */}
        <div className="footer-column">

          <h3>Follow Us</h3>

          <div className="social-icons">

            <a
              href="https://instagram.com/dazzlerfilms"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram />
            </a>

            <a
              href="https://youtube.com/@DazzlerFilms"
              target="_blank"
              rel="noreferrer"
            >
              <FaYoutube />
            </a>

            <a
              href="https://facebook.com/dazzlerfilms"
              target="_blank"
              rel="noreferrer"
            >
              <FaFacebookF />
            </a>

            <a
              href="https://www.linkedin.com/company/dazzlerfilms/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin />
            </a>

          </div>

        </div>

      </div>

      <div className="footer-bottom">
        © 2026 Dazzler Films. All Rights Reserved.
      </div>

    </footer>
  );
}

export default Footer;
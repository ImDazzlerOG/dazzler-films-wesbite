import "../assets/styles/aboutus.css";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import aboutImage from "../assets/images/about/about.jpg";
import { Helmet } from "react-helmet-async";
import {
  FaCalendarAlt,
  FaVideo,
  FaMapMarkerAlt,
  FaPhoneVolume,
  FaEnvelope,
  FaInstagram
} from "react-icons/fa";

import { useState } from "react";



function AboutUs() {

    const [loading, setLoading] = useState(false);
  return (
    <>
    <Helmet>

  <title>About Us | Dazzler Films</title>

  <meta
    name="description"
    content="Learn about Dazzler Films and Dazzler Collectix Media, founded by Deepesh Gajwa. Professional video production, photography, podcast production and creative media services."
  />

  <meta
    name="keywords"
    content="Dazzler Films, Video Production Mumbai, Deepesh Gajwa, Photography, Podcast Production"
  />

  <link
    rel="canonical"
    href="https://dazzlerfilms.in/about"
  />

</Helmet>

<Header />
      <Header />

      {/* ================= ABOUT ================= */}

      <section className="about-section">

        <div className="about-container">

          {/* LEFT */}

          <div className="about-left">

            <span className="vertical-text">
              DAZZLER FILMS | DAZZLER COLLECTIX MEDIA
            </span>

            <div className="image-wrapper">

              <div className="image-glow"></div>

              <img
                src={aboutImage}
                alt="Deepesh Gajwa"
              />

            </div>

          </div>

          {/* RIGHT */}

          <div className="about-right">

            <span className="section-tag">
              ABOUT US
            </span>

            <h1>
              Dazzler Films &
              <br />
              Dazzler Collectix Media
            </h1>

            <h3>
              Founded by Deepesh Gajwa
            </h3>

            <p>
              Dazzler Films was established in 2016 with a passion for creating
              cinematic stories through video production, photography and
              post-production. Over the years, we've worked with brands,
              businesses, creators and individuals to bring ideas to life with
              creativity and professionalism.
            </p>

            <p>
              As our vision grew, we launched Dazzler Collectix Media in 2026
              to provide complete creative solutions under one roof. Today, we
              offer production services, digital marketing, talent management,
              event management and content creation—helping brands grow through
              impactful visual storytelling.
            </p>

            <p>
              <strong>One Vision. Endless Creativity.</strong>
            </p>

            {/* STATS */}

            <div className="stats-grid">

              <div className="stat-box">

                <div className="stat-icon">
                  <FaCalendarAlt />
                </div>

                <h2>2016</h2>

                <span>Founded</span>

              </div>

              <div className="stat-box">

                <div className="stat-icon">
                  <FaVideo />
                </div>

                <h2>100+</h2>

                <span>Projects</span>

              </div>

              <div className="stat-box">

                <div className="stat-icon">
                  <FaMapMarkerAlt />
                </div>

                <h2>Mumbai, India</h2>

                <span>Serving Worldwide</span>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* ================= CONTACT ================= */}

      <section className="contact-section">

        <div className="contact-container">

          {/* LEFT */}

          <div className="contact-left">

            <span className="section-tag">
              GET IN TOUCH
            </span>

            <h2>
              Let's Create Something
              <br />
              Amazing Together.
            </h2>

            <p>
              Whether you're looking for video production,
              photography, podcast production or creative marketing,
              we'd love to hear about your project.
            </p>

            <form
  className="contact-form"
  action="https://api.web3forms.com/submit"
  method="POST"

>

  <input
    type="hidden"
    name="access_key"
    value="79b004d1-64f4-4551-bcbe-e81ce5135621"
  />

  <input
    type="hidden"
    name="subject"
    value="New Inquiry from Dazzler Films Website"
  />

  <input
    type="hidden"
    name="from_name"
    value="Dazzler Films Website"
  />

  {/* Anti Spam */}

  <input
    type="checkbox"
    name="botcheck"
    style={{ display: "none" }}
  />

  <input
    type="text"
    name="name"
    placeholder="Your Name"
    required
  />

  <input
    type="email"
    name="email"
    placeholder="Email Address"
    required
  />

  <input
    type="tel"
    name="phone"
    placeholder="Phone Number"
  />

  <textarea
    rows="6"
    name="message"
    placeholder="Tell us about your project..."
    required
  ></textarea>

  <button
    type="submit"
    className="contact-btn"
  >
    Send Inquiry
  </button>

</form>
          </div>

          {/* RIGHT */}

          <div className="contact-right">

            {/* PHONE */}

            <div className="contact-card">

              <div className="contact-icon">
                <FaPhoneVolume />
              </div>

              <div>

                <h3>Phone</h3>

                <p>
                  <a href="tel:+918928664710">
                    +91 8928664710
                  </a>
                </p>

              </div>

            </div>

            {/* EMAIL */}

            <div className="contact-card">

              <div className="contact-icon">
                <FaEnvelope />
              </div>

              <div>

                <h3>Email</h3>

                <p>
                  <a href="mailto:businesswithdazzler@gmail.com">
                    businesswithdazzler@gmail.com
                  </a>
                </p>

              </div>

            </div>

            {/* LOCATION */}

            <div className="contact-card">

              <div className="contact-icon">
                <FaMapMarkerAlt />
              </div>

              <div>

                <h3>Location</h3>

                <p>
                  Mumbai, Maharashtra, India
                </p>

              </div>

            </div>

            {/* INSTAGRAM */}

            <div className="contact-card">

              <div className="contact-icon">
                <FaInstagram />
              </div>

              <div>

                <h3>Instagram</h3>

                <p>
                  <a
                    href="https://instagram.com/dazzlerfilms"
                    target="_blank"
                    rel="noreferrer"
                  >
                    @dazzlerfilms
                  </a>
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>

{/* ================= MAP ================= */}

<section className="map-section">

  
    <div className="map-wrapper">

        <iframe
  title="Dazzler Films Location"
  src="https://www.google.com/maps?q=Dazzler+Films,+Mumbai&output=embed"
  width="100%"
  height="520"
  style={{ border: 0 }}
  allowFullScreen
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
></iframe>

    </div>

</section>
      <Footer />

    </>
  );
}

export default AboutUs;
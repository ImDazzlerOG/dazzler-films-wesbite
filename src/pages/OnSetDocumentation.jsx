import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { FaPlay, FaTimes } from "react-icons/fa";

import "../assets/styles/onsetdocumentation.css";

import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import CinematicBG from "../components/CinematicBackground";


import {
  instagramReel,
  
} from "../data/onSetDocumentationData";

const OnSetDocumentation = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);

  return (
    <>
      <Helmet>
        <title>On Set Documentation (BTS) | Dazzler Films</title>

        <meta
          name="description"
          content="Explore behind-the-scenes photography and on-set documentation captured by Dazzler Films across commercial productions, fashion campaigns, films and creative projects."
        />

        <link
          rel="canonical"
          href="https://dazzlerfilms.in/on-set-documentation"
        />
      </Helmet>

      <Header />

      <main className="onset-page">
        <CinematicBG />

        {/* Hero */}
        <section className="onset-hero">
          <div className="onset-overlay">
            <h1>On Set Documentation (BTS)</h1>

            <p>
              Capturing authentic behind-the-scenes moments across commercial
              productions, fashion campaigns, films and creative projects
              through professional on-set photography and documentation.
            </p>
          </div>
        </section>

        {/* Featured Reel */}
        <section className="onset-section">
        

          <div className="featured-reel">
            <div
              className="featured-card"
              onClick={() => setSelectedVideo(instagramReel.video)}
            >
              <img
                src={instagramReel.thumbnail}
                alt={instagramReel.title}
                className="featured-thumb"
                loading="lazy"
              />

              <div className="play-overlay">
                <FaPlay />
              </div>

              <div className="featured-info">
                <h3>{instagramReel.title}</h3>
              </div>
            </div>
          </div>
        </section>

        <div className="content-divider"></div>

      {/* Disclaimer */}
<section className="onset-note">
  <p>
    <strong>Note:</strong> The behind-the-scenes video featured on this
    page was captured by Dazzler Films during a production for a client.
    It showcases our on-set documentation work and does not imply
    ownership of the featured production.
  </p>
</section>

</main>



{/* Video Modal */}
{selectedVideo && (
  <div
    className="video-modal"
    onClick={() => setSelectedVideo(null)}
  >
    <div
      className="video-content"
      onClick={(e) => e.stopPropagation()}
    >
      <button
        className="close-btn"
        onClick={() => setSelectedVideo(null)}
      >
        <FaTimes />
      </button>

      <iframe
        src={selectedVideo}
        title="Instagram Reel"
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        allowFullScreen
      />
    </div>
  </div>
)}

<Footer />
    </>
  );
};

export default OnSetDocumentation;
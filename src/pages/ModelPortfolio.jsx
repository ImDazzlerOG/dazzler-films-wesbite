import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { FaPlay, FaTimes } from "react-icons/fa";

import "../assets/styles/modelportfolio.css";

import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import CinematicBG from "../components/CinematicBackground";
import EventGallery from "../components/EventGallery";

import {
  youtubeVideos,
  galleryImages,
} from "../data/modelPortfolioData";

function ModelPortfolio() {
  const [activeVideo, setActiveVideo] = useState(null);

  const closePlayer = () => {
    setActiveVideo(null);
  };

  return (
    <>
      <Helmet>
        <title>Model & Portfolio | Dazzler Films</title>

        <meta
          name="description"
          content="Professional model portfolios, fashion photography and cinematic visual storytelling by Dazzler Films."
        />

        <link
          rel="canonical"
          href="https://dazzlerfilms.in/model-portfolio"
        />
      </Helmet>

      <Header />

      <CinematicBG />

      {/* HERO */}

      <section className="models-hero">
        <div className="models-overlay">
          <h1>Fashion Cinematics</h1>

          <p>
            Showcasing professional portfolios, fashion campaigns and
            cinematic visual storytelling through creative photography
            and films.
          </p>
        </div>
      </section>

      {/* YOUTUBE SHORTS */}

      <section className="models-section">
        <div className="models-container">
          {youtubeVideos.map((video) => (
            <div
              key={video.id}
              className="models-card"
              onClick={() => setActiveVideo(video)}
            >
              <div className="models-thumb">
                <img
                  src={`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`}
                  alt={video.title}
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = `https://img.youtube.com/vi/${video.id}/hqdefault.jpg`;
                  }}
                />

                <div className="play-button">
                  <FaPlay />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="content-divider"></div>

      {/* GALLERY */}

      <section className="gallery-title">
        <h2>Fashion Photo Gallery</h2>
      </section>

      <EventGallery images={galleryImages} />

      {/* VIDEO MODAL */}

      {activeVideo && (
        <div
          className="video-modal"
          onClick={closePlayer}
        >
          <div
            className="video-wrapper"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="close-video"
              onClick={closePlayer}
            >
              <FaTimes />
            </button>

            <iframe
              src={`https://www.youtube.com/embed/${activeVideo.id}?autoplay=1&rel=0`}
              title={activeVideo.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </div>
      )}

      <Footer />
    </>
  );
}

export default ModelPortfolio;
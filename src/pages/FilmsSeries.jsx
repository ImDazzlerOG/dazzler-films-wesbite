import "../assets/styles/filmsseries.css";

import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import CinematicBackground from "../components/CinematicBackground";

import { Helmet } from "react-helmet-async";
import { useState } from "react";
import { FaPlay, FaTimes } from "react-icons/fa";

import {
  youtubeVideos,
  instagramReels,
} from "../data/filmsSeriesData";

function FilmsSeries() {
  const [activeVideo, setActiveVideo] = useState(null);

  const closePlayer = () => {
    setActiveVideo(null);
  };

  return (
    <>
      <Helmet>
        <title>Films & Series | Dazzler Films</title>

        <meta
          name="description"
          content="Explore films, web series and cinematic storytelling by Dazzler Films."
        />

        <link
          rel="canonical"
          href="https://dazzlerfilms.in/films-series"
        />
      </Helmet>

      <Header />

      <CinematicBackground />

      {/* ================= HERO ================= */}

      <section className="films-hero">
        <div className="films-overlay">
          <h1>Films & Series</h1>

          <p>
            From cinematic storytelling to branded films and web series,
            explore our work across various platforms.
          </p>
        </div>
      </section>

      {/* ================= OTT SERIES PROMO ================= */}

      <section className="instagram-section">
        

        <div className="reels-grid">
          {instagramReels.map((reel) => (
            <a
              key={reel.id}
              href={reel.url}
              target="_blank"
              rel="noopener noreferrer"
              className="reel-card"
            >
              <img
                src={reel.thumbnail}
                alt={reel.title}
              />

              <div className="reel-overlay">
                <FaPlay />

                <span>Watch on Instagram</span>
              </div>
            </a>
          ))}
        </div>
      </section>

      <div className="content-divider"></div>

      {/* ================= YOUTUBE ================= */}

      <section className="films-section">
        

        <div className="films-container">
          {youtubeVideos.map((video) => (
            <div
              key={video.id}
              className="film-card"
              onClick={() => setActiveVideo(video.id)}
            >
              <div className="film-thumb">
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

      {/* ================= VIDEO MODAL ================= */}

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
              src={`https://www.youtube.com/embed/${activeVideo}?autoplay=1&rel=0`}
              title={
                youtubeVideos.find((v) => v.id === activeVideo)?.title ||
                "Films & Series"
              }
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

export default FilmsSeries;
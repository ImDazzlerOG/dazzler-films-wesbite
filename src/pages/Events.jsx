import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { FaPlay, FaTimes } from "react-icons/fa";

import "../assets/styles/events.css";

import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import CinematicBG from "../components/CinematicBackground";

import InstagramReelCard from "../components/InstagramReelCard";
import EventGallery from "../components/EventGallery";

import {
  youtubeVideos,
  instagramReels,
  galleryImages,
} from "../data/eventsData";

function Events() {
  const [activeVideo, setActiveVideo] = useState(null);

  const closePlayer = () => {
    setActiveVideo(null);
  };

  return (
    <>
      <Helmet>
        <title>Events | Dazzler Films</title>

        <meta
          name="description"
          content="Professional event coverage by Dazzler Films including concerts, corporate events, live shows and celebrations."
        />

        <link
          rel="canonical"
          href="https://dazzlerfilms.in/events"
        />
      </Helmet>

      <Header />

      <CinematicBG />

      {/* HERO */}

      <section className="events-hero">
        <div className="events-overlay">
          <h1>Events Cinematics</h1>

          <p>
            Capturing unforgettable moments through cinematic storytelling,
            professional event coverage and creative filmmaking.
          </p>
        </div>
      </section>

      {/* YOUTUBE */}

      <section className="events-section">
        <div className="events-container">
          {youtubeVideos.map((video) => (
            <div
              key={video.id}
              className="events-card"
              onClick={() => setActiveVideo(video)}
            >
              <div className="events-thumb">
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

      {/* INSTAGRAM */}

      <section className="events-section">
        <div className="instagram-grid">
          {instagramReels.map((reel) => (
            <InstagramReelCard
              key={reel.id}
              reel={reel}
            />
          ))}
        </div>
      </section>

      <div className="content-divider"></div>

      {/* GALLERY */}

      <section className="gallery-title">
        <h2>Events Photos</h2>
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

export default Events;
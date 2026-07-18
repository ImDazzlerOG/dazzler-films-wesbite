import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { FaPlay, FaTimes } from "react-icons/fa";

import "../assets/styles/products.css";

import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import CinematicBG from "../components/CinematicBackground";
import EventGallery from "../components/EventGallery";

import {
  youtubeVideos,
  galleryImages,
} from "../data/productsData";

function Products() {
  const [activeVideo, setActiveVideo] = useState(null);

  const closePlayer = () => {
    setActiveVideo(null);
  };

  return (
    <>
      <Helmet>
        <title>Product Shoots | Dazzler Films</title>

        <meta
          name="description"
          content="Premium product photography and cinematic commercial films by Dazzler Films."
        />

        <link
          rel="canonical"
          href="https://dazzlerfilms.in/products"
        />
      </Helmet>

      <Header />

      <CinematicBG />

      {/* HERO */}

      <section className="products-hero">
        <div className="products-overlay">
          <h1>Product & Brand Cinematics</h1>

          <p>
            Premium product photography and cinematic commercial films crafted
            to elevate your brand through stunning visuals and storytelling.
          </p>
        </div>
      </section>

      {/* YOUTUBE VIDEOS */}

      <section className="products-section">
        <div className="products-container">
          {youtubeVideos.map((video) => (
            <div
              key={video.id}
              className="products-card"
              onClick={() => setActiveVideo(video)}
            >
              <div className="products-thumb">
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
        <h2>Products & Brand Photo Gallery</h2>
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

export default Products;
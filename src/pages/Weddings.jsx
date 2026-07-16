import "../assets/styles/weddings.css";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import { Helmet } from "react-helmet-async";
import { useState } from "react";
import { FaPlay, FaTimes } from "react-icons/fa";
import CinematicBackground from "../components/CinematicBackground";

import WeddingPhotoCard from "../components/WeddingPhotoCard";
import { weddingPhotos } from "../data/weddingData";
import "../assets/styles/wedding-gallery.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const videos = [
  {
    id: "Z6n0QlGzmNk",
    title: "Pre Wedding Film",
  },
  {
    id: "cS8sI8GZVhE",
    title: "Wedding Highlights",
  },
  {
    id: "4cLvwDin6zI",
    title: "Wedding Film",
  },
  {
    id: "qwHlS2uj1OY",
    title: "Wedding Story",
  },
  {
    id: "MEuAAnBRIHI",
    title: "Wedding Teaser",
  },
  {
    id: "uy0DnAiiMtY",
    title: "Wedding Highlights",
  },
  {
    id: "O3J0ZEYTAxs",
    title: "Wedding Film",
  },
  {
    id: "3lIAmk4XFiI",
    title: "Pre Wedding",
  },
];

function Weddings() {
  const [activeVideo, setActiveVideo] = useState(null);

  return (
    <>
      <Helmet>
        <title>Wedding Films | Dazzler Films</title>

        <meta
          name="description"
          content="Beautiful cinematic wedding films crafted by Dazzler Films."
        />

        <link
          rel="canonical"
          href="https://dazzlerfilms.in/weddings"
        />
      </Helmet>

      <Header />

      <CinematicBackground />

      <section className="wedding-hero">
        <div className="wedding-overlay">
          <h1>Wedding Films</h1>

          <p>
            Timeless cinematic wedding films that preserve every emotion,
            celebration and unforgettable memory.
          </p>
        </div>
      </section>

      <section className="wedding-section">
        <div className="wedding-container">
          {videos.map((video) => (
            <div
              key={video.id}
              className="wedding-card"
              onClick={() => setActiveVideo(video.id)}
            >
              <div className="wedding-thumb">
                <img
                  src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
                  alt={video.title}
                />

                <div className="play-button">
                  <FaPlay />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {activeVideo && (
        <div
          className="video-modal"
          onClick={() => setActiveVideo(null)}
        >
          <div
            className="video-wrapper"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="close-video"
              onClick={() => setActiveVideo(null)}
            >
              <FaTimes />
            </button>

            <iframe
              src={`https://www.youtube.com/embed/${activeVideo}?autoplay=1&rel=0`}
              title="Wedding Film"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </div>
      )}
<section className="wedding-gallery-section">

    <div className="social-heading">
        <span>WEDDING PHOTOGRAPHY</span>
        <h2>Photo Gallery</h2>
    </div>

    <div className="wedding-gallery">

        {weddingPhotos.map((photo) => (

            <WeddingPhotoCard
                key={photo.id}
                image={photo.image}
            />

        ))}

    </div>

</section>

      <Footer />
    </>
  );
}

export default Weddings;
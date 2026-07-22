import "../assets/styles/featuredwork.css";

import { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const videos = [
  {
    category: "Podcast",
    title: "Rahul Dev Exclusive Interview",
    url: "https://youtu.be/lPFpXjptmX0",
  },
  {
    category: "Live Show",
    title: "Unerase Poetry Live",
    url: "https://youtu.be/igFLvQWWiXs",
  },
  {
    category: "Event Coverage",
    title: "Experience Abu Dhabi | Drone Light Show for Diwali",
    url: "https://youtu.be/10_11Zp3rC8",
  },
  {
    category: "Music Video",
    title: "Bijli Si Chaal | Music Video",
    url: "https://youtu.be/JgCDqIOocNA",
  },
  {
    category: "Portfolio",
    title: "Model Portfolio Shoot",
    url: "https://youtu.be/1Wc-rOfBWME",
  },
  {
    category: "Products",
    title: "Bunch Promo | Product Shoot",
    url: "https://youtu.be/znp9cUVweog",
  },
];

function FeaturedWork() {
  const [selectedVideo, setSelectedVideo] = useState(null);

  /* ===========================================
     GET VIDEO ID
  =========================================== */

  const getVideoId = (url) => {
    const regExp =
      /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;

    const match = url.match(regExp);

    return match && match[2].length === 11 ? match[2] : "";
  };

  /* ===========================================
     THUMBNAIL
  =========================================== */

  const getThumbnail = (url) => {
    return `https://img.youtube.com/vi/${getVideoId(
      url
    )}/maxresdefault.jpg`;
  };

  /* ===========================================
     EMBED URL
  =========================================== */

  const getEmbedUrl = (url) => {
    return `https://www.youtube.com/embed/${getVideoId(
      url
    )}?autoplay=1&rel=0`;
  };

  return (
    <section className="featured-section">
      <div className="featured-heading">
        <h2>Featured Work</h2>

        <p>Watch some of our latest cinematic productions.</p>
      </div>

      <div className="featured-slider">
        <Swiper
          modules={[Navigation, Autoplay]}
          navigation={true}
          loop={true}
          speed={1200}
          spaceBetween={15}
          slidesPerView={2.5}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          breakpoints={{
  0: {
    slidesPerView: 1,
    spaceBetween: 20,
  },
  768: {
    slidesPerView: 1.5,
    spaceBetween: 20,
  },
  1024: {
    slidesPerView: 2.2,
    spaceBetween: 20,
  },
  1400: {
    slidesPerView: 2.6,
    spaceBetween: 20,
  },
}}
        >
          {videos.map((video, index) => (
            <SwiperSlide key={index}>
              <div
                className="featured-card"
                onClick={() => setSelectedVideo(video.url)}
              >
                <div className="featured-thumbnail">
                  <img
                    src={getThumbnail(video.url)}
                    alt={video.title}
                  />

                  <div className="featured-overlay">
                    <div className="play-button">▶</div>
                  </div>
                </div>

                <div className="featured-content">
                  <span>{video.category}</span>

                  <h3>{video.title}</h3>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* ======================================
          VIDEO MODAL
      ====================================== */}

      {selectedVideo && (
        <div
          className="video-modal"
          onClick={() => setSelectedVideo(null)}
        >
          <div
            className="video-wrapper"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="close-video"
              onClick={() => setSelectedVideo(null)}
            >
              ✕
            </button>

            <iframe
              src={getEmbedUrl(selectedVideo)}
              title="Featured Work"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </section>
  );
}

export default FeaturedWork;
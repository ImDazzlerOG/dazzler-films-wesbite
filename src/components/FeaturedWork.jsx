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

  const getVideoId = (url) => {
    const regExp =
      /^.*(?:youtu\.be\/|v\/|embed\/|watch\?v=|&v=)([^#&?]{11}).*/;

    const match = url.match(regExp);

    return match ? match[1] : "";
  };

  const getThumbnail = (url) => {
    return `https://img.youtube.com/vi/${getVideoId(
      url
    )}/maxresdefault.jpg`;
  };

  const getEmbedUrl = (url) => {
    return `https://www.youtube.com/embed/${getVideoId(
      url
    )}?autoplay=1&rel=0`;
  };

  return (
    <section className="featured-section">

      <div className="featured-heading">

        <h2>Featured Work</h2>

        <p>
          Watch some of our latest cinematic productions.
        </p>

      </div>

      <div className="featured-slider">

        <Swiper
          modules={[Navigation, Autoplay]}
          navigation={true}
          loop={true}
          speed={1200}
          spaceBetween={30}
          slidesPerView={3}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
  }}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1200: {
              slidesPerView: 3,
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

                    <div className="play-button">
                      ▶
                    </div>

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
              frameBorder="0"
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
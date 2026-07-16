import "../assets/styles/podcast.css";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import { FaPlay, FaTimes } from "react-icons/fa";
import { Helmet } from "react-helmet-async";
import { useState } from "react";
import CinematicBG from "../components/CinematicBackground";

const videos = [
  { id: "YKYFL1OqMcs", title: "Podcast 01" },
  { id: "W7xcKjkjmHI", title: "Podcast 02" },
  { id: "NxW29CbFIVA", title: "Podcast 03" },
  { id: "ZPiXhI9HVn8", title: "Podcast 04" },
  { id: "lPFpXjptmX0", title: "Podcast 05" },
  { id: "T0L0L0wov8U", title: "Podcast 06" },
  { id: "4iytWSjWHHc", title: "Podcast 07" },
  { id: "RWeYiCu2EKA", title: "Podcast 08" },
  { id: "t2T1OneXgRg", title: "Podcast 09" },
  { id: "TBA9XNGfFmI", title: "Podcast 10" },
  { id: "iaahuSZr0Ok", title: "Podcast 11" },
  { id: "s7KBim_9vsA", title: "Podcast 12" },
  { id: "5ZXPiXUT8Kw", title: "Podcast 13" },
  { id: "TFx0alxPZN4", title: "Podcast 14" },
  { id: "iBhMotL5qGo", title: "Podcast 15" },
  { id: "pHAba0_lmgA", title: "Podcast 16" },
  { id: "D0iqozK1lGk", title: "Podcast 17" },
  { id: "gcrFQjcfQmI", title: "Podcast 18" },
  { id: "5Z54f7lekyM", title: "Podcast 19" },
  { id: "ZzyKaj2Fv0w", title: "Podcast 20" },
  { id: "gRevzSJbAJo", title: "Podcast 21" },
  { id: "IAYHFXoh03o", title: "Podcast 22" },
  { id: "mly4xoA7dO8", title: "Podcast 23" },
  { id: "a_42eYenxVE", title: "Podcast 24" },
  { id: "ayewUbIcy4k", title: "Podcast 25" },
  { id: "mujK1wIXDnM", title: "Podcast 26" },
  { id: "U8POb8NoRPE", title: "Podcast 27" },
  { id: "-CugTx3Vndk", title: "Podcast 28" },
  { id: "foeaN-1nXRQ", title: "Podcast 29" },
  { id: "JVVm7WHv0mo", title: "Podcast 30" },
  { id: "lslN5Dlom7k", title: "Podcast 31" },
];

function Podcast() {
  const [activeVideo, setActiveVideo] = useState(null);

  const closePlayer = () => {
    setActiveVideo(null);
  };

  return (
    <>
      <Helmet>
        <title>Podcast & Interviews | Dazzler Films</title>

        <meta
          name="description"
          content="Watch podcasts, interviews and behind-the-scenes conversations from Dazzler Films."
        />

        <link
          rel="canonical"
          href="https://dazzlerfilms.in/podcast"
        />
      </Helmet>

      <Header />

      <CinematicBG />

      <section className="podcast-hero">
        <div className="podcast-overlay">
          <h1>Podcast & Interviews</h1>

          <p>
            Explore our latest podcasts, interviews and creative conversations.
          </p>
        </div>
      </section>

      <section className="podcast-section">
        <div className="podcast-container">
          {videos.map((video) => (
            <div
              key={video.id}
              className="podcast-card"
              onClick={() => setActiveVideo(video.id)}
            >
              <div className="podcast-thumb">
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

      {activeVideo && (
        <div className="video-modal" onClick={closePlayer}>
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
                videos.find((v) => v.id === activeVideo)?.title ||
                "Podcast Video"
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

export default Podcast;
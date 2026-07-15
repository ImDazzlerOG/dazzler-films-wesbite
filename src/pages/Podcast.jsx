import "../assets/styles/podcast.css";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import { FaPlay, FaTimes } from "react-icons/fa";
import { Helmet } from "react-helmet-async";
import { useState } from "react";
import CinematicBG from "../components/CinematicBackground";
const videos = [
  {
    id: "YKYFL1OqMcs",
  },
  {
    id: "W7xcKjkjmHI",
  },
  {
    id: "NxW29CbFIVA",
  },
  {
    id: "ZPiXhI9HVn8",
  },
  {
    id: "lPFpXjptmX0",
  },
  {
    id: "T0L0L0wov8U",
  },
  {
    id: "4iytWSjWHHc",
  },
  {
    id: "RWeYiCu2EKA",
  },
  {
    id: "t2T1OneXgRg",
  },
  {
    id: "TBA9XNGfFmI",
  },
  {
    id: "iaahuSZr0Ok",
  },
  {
    id: "s7KBim_9vsA",
  },
  {
    id: "5ZXPiXUT8Kw",
  },
  {
    id: "TFx0alxPZN4",
  },
  {
    id: "iBhMotL5qGo",
  },
  {
    id: "pHAba0_lmgA",
  },
  {
    id: "D0iqozK1lGk",
  },
  {
    id: "gcrFQjcfQmI",
  },
  {
    id: "5Z54f7lekyM",
  },
  {
    id: "ZzyKaj2Fv0w",
  },
  {
    id: "gRevzSJbAJo",
  },
  {
    id: "IAYHFXoh03o",
  },
  {
    id: "mly4xoA7dO8",
  },
  {
    id: "a_42eYenxVE",
  },
  {
    id: "ayewUbIcy4k",
  },
  {
    id: "mujK1wIXDnM",
  },
  {
    id: "U8POb8NoRPE",
  },
  {
    id: "-CugTx3Vndk",
  },
  {
    id: "foeaN-1nXRQ",
  },
  {
    id: "JVVm7WHv0mo",
  },
  {
    id: "lslN5Dlom7k",
  },
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
                  src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
                  alt="Podcast"
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
              title="Podcast Video"
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
import "../assets/styles/liveshows.css";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import { Helmet } from "react-helmet-async";
import { useState } from "react";
import { FaPlay, FaTimes } from "react-icons/fa";
import CinematicBackground from "../components/CinematicBackground";

const videos = [
  {
    id: "iHBcgNxIowA",
    title: "Poetry Show",
  },
  {
    id: "zuZHy3NOOlc",
    title: "Unerase Poetry",
  },
  {
    id: "SLYwUF4U5kI",
    title: "Unerase Poetry",
  },
  {
    id: "pFiwe-GDKE4",
    title: "Unerase Poetry",
  },
  {
    id: "B_dEQCfweAs",
    title: "Unerase Poetry",
  },
  {
    id: "dzMf-S9Q2fM",
    title: "Unerase Poetry",
  },
  {
    id: "igFLvQWWiXs",
    title: "Unerase Poetry",
  },
  {
    id: "3caCpeSFdlM",
    title: "Unerase Poetry",
  },
  {
    id: "UyILB3X8eUo",
    title: "Unerase Poetry",
  },
  {
    id: "xdl9O9oZ8Vs",
    title: "Angry Young Men",
  },
  {
    id: "aeqrAzg8tvc",
    title: "Unerase Poetry",
  },
  {
    id: "6XVTG21r_Tg",
    title: "Prime Video - Maitri",
  },
  {
    id: "dmpOd5RyS60",
    title: "Prime Video - Maitri",
  },
];

function LiveShows() {
  const [activeVideo, setActiveVideo] = useState(null);

  const closePlayer = () => {
    setActiveVideo(null);
  };

  return (
    <>
      <Helmet>
        <title>Live Shows | Dazzler Films</title>

        <meta
          name="description"
          content="Explore cinematic live shows, concerts, festivals and event productions by Dazzler Films."
        />

        <link
          rel="canonical"
          href="https://dazzlerfilms.in/live-shows"
        />
      </Helmet>

      <Header />

      <CinematicBackground />

      <section className="live-hero">
        <div className="live-overlay">
          <h1>Live Shows</h1>

          <p>
            Capturing the energy, atmosphere and unforgettable moments of
            concerts, festivals and live performances.
          </p>
        </div>
      </section>

      <section className="live-section">
        <div className="live-container">
          {videos.map((video) => (
            <div
              key={video.id}
              className="live-card"
              onClick={() => setActiveVideo(video.id)}
            >
              <div className="live-thumb">
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
              title="Live Show"
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

export default LiveShows;
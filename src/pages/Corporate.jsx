import "../assets/styles/corporate.css";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import { Helmet } from "react-helmet-async";
import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import CinematicBackground from "../components/CinematicBackground";

const videos = [
  {
    id: "wj_Zu3RPFhA",
    title: "Corporate Film 01",
  },
  {
    id: "3UJTcfn4azE",
    title: "Corporate Film 02",
  },
  {
    id: "ySXedGJ-5DU",
    title: "Corporate Film 03",
  },
];

function Corporate() {
  const [activeVideo, setActiveVideo] = useState(null);

  const closePlayer = () => {
    setActiveVideo(null);
  };

  return (
    <>
      <Helmet>
        <title>Corporate Films | Dazzler Films</title>

        <meta
          name="description"
          content="Professional corporate films, brand stories and business videos by Dazzler Films."
        />

        <link
          rel="canonical"
          href="https://dazzlerfilms.in/corporate"
        />
      </Helmet>

      <Header />

      <CinematicBackground />

      <section className="corporate-hero">
        <div className="corporate-overlay">
          <h1>Corporate Films</h1>

          <p>
            Premium corporate films crafted to showcase your brand, culture,
            products and vision through cinematic storytelling.
          </p>
        </div>
      </section>

      <section className="corporate-section">
        <div className="corporate-container">
          {videos.map((video) => (
            <div
              key={video.id}
              className="corporate-card"
              onClick={() => setActiveVideo(video.id)}
            >
              <div className="corporate-thumb">
                <img
                  src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
                  alt={video.title}
                />
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
              title="Corporate Film"
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

export default Corporate;
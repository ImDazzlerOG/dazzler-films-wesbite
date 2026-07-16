import "../assets/styles/industrial.css";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import { Helmet } from "react-helmet-async";
import { useState } from "react";
import { FaPlay, FaTimes } from "react-icons/fa";
import CinematicBackground from "../components/CinematicBackground";
import IndustrialGallery from "../components/IndustrialGallery";

const featuredVideo = {
  id: "E9yPsoDf9SU", // Replace with your industrial video ID
  title: "Industrial Cinematics",
};

function Industrial() {
  const [activeVideo, setActiveVideo] = useState(null);

  const closePlayer = () => {
    setActiveVideo(null);
  };

  return (
    <>
      <Helmet>
        <title>Industrial Cinematics | Dazzler Films</title>

        <meta
          name="description"
          content="Explore cinematic industrial films, factory documentation, manufacturing showcases and corporate productions by Dazzler Films."
        />

        <link
          rel="canonical"
          href="https://dazzlerfilms.in/industrial"
        />
      </Helmet>

      <Header />

      <CinematicBackground />

      <main className="industrial-page">

        {/* Hero */}

        <section className="industrial-video-section">

          <div className="container">

            <div className="section-title">
              <h1>Industrial Cinematics</h1>
            </div>

            <div
              className="featured-video"
              onClick={() => setActiveVideo(featuredVideo.id)}
            >

              <img
                src={`https://img.youtube.com/vi/${featuredVideo.id}/maxresdefault.jpg`}
                alt={featuredVideo.title}
              />

              <div className="featured-play">
                <FaPlay />
              </div>

            </div>

          </div>

        </section>

        {/* Gallery */}

        <section className="industrial-gallery">

          <div className="container">

            <div className="section-title">
              <h2>Industrial Portfolio</h2>
            </div>

            <IndustrialGallery />

          </div>

        </section>

      </main>

      {/* Video Modal */}

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
              title="Industrial Video"
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

export default Industrial;
import "../assets/styles/behindourlens.css";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import { FaPlay } from "react-icons/fa";
import { useState } from "react";

const videos = [
  {
    id: "VAfTWnFDzLA",
    title: "Day in My Life as a Cinematographer",
  },
  {
    id: "o0qyxRqjKH4",
    title: "2025 Recap | One Step Closer",
  },
  {
    id: "u8cojrrXseQ",
    title: "Camera On Me vs Me Behind Camera",
  },
  {
    id: "JXuZhFxgWdM",
    title: "BTS of Ad Shoot With Tripti Dimri",
  },
  {
    id: "eypvyz1ropg",
    title: "BTS of Bluetick Promotion Shoot",
  },
  {
    id: "YcERHHHYUy4",
    title: "BTS Of Model Shoot",
  },
];

function BehindOurLens() {
  const [currentVideo, setCurrentVideo] = useState(videos[0].id);

  return (
    <>
      <Header />

      <section className="lens-page">

        <div className="lens-container">

          {/* Heading */}

          <div className="lens-heading">

        

            <h1>Behind Our Lens</h1>

          </div>

          {/* Featured Player */}

          <div className="featured-video">

            <iframe
              src={`https://www.youtube.com/embed/${currentVideo}?rel=0&modestbranding=1`}
              title="Dazzler Films YouTube Player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>

          </div>

          {/* Video Grid */}

          <div className="video-grid">

            {videos.map((video) => (

              <div
                key={video.id}
                className={`video-card ${
                  currentVideo === video.id ? "active" : ""
                }`}
                onClick={() => setCurrentVideo(video.id)}
              >

                <div className="thumbnail">

                  <img
                    src={`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`}
                    alt={video.title}
                  />

                  <div className="play-overlay">

                    <FaPlay />

                  </div>

                </div>

                <div className="video-content">

                  <h3>{video.title}</h3>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>

      <Footer />
    </>
  );
}

export default BehindOurLens;
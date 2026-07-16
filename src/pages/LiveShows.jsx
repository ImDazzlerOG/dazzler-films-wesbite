import "../assets/styles/liveshows.css";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import { Helmet } from "react-helmet-async";
import { useState, useRef } from "react";
import CinematicBackground from "../components/CinematicBackground";

const videos = [
  {
    id: "iHBcgNxIowA",
    title: "Poetry show",
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
    title:"Angry Young Men Ft. Salman K, Farah K, Salim K, Javed A, Farhan A",
  },
   {
    id: "aeqrAzg8tvc",
    title: "Unerase Poetry",
  },
   {
    id: "6XVTG21r_Tg",
    title: "Maitri: Female First Collective by Prime Video",
  },
     {
    id: "dmpOd5RyS60",
    title: "Maitri: Female First Collective by Prime Video",
  },
];

function LiveShows() {
  const [currentVideo, setCurrentVideo] = useState(videos[0]);

  const playerRef = useRef(null);

  const playVideo = (video) => {
    setCurrentVideo(video);

    playerRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  };

  return (
    <>
      <Helmet>
        <title>Live Shows | Dazzler Films</title>

        <meta
          name="description"
          content="Explore cinematic live show, concert, festival and event productions by Dazzler Films."
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
            Capturing the energy, atmosphere, and unforgettable moments of
            concerts, festivals, and live performances.
          </p>
        </div>
      </section>

      <section className="live-section">
        <div
          className="live-player"
          ref={playerRef}
        >
          <iframe
            src={`https://www.youtube.com/embed/${currentVideo.id}?rel=0`}
            title={currentVideo.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>

        <div className="live-grid">
          {videos.map((video) => (
            <div
              key={video.id}
              className={`live-card ${
                currentVideo.id === video.id ? "active" : ""
              }`}
              onClick={() => playVideo(video)}
            >
              <img
                src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
                alt={video.title}
              />
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
}

export default LiveShows;
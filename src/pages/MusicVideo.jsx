import "../assets/styles/musicvideo.css";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

import { Helmet } from "react-helmet-async";
import { useState, useRef } from "react";
import CinematicBackground from "../components/CinematicBackground";

const videos = [
  {
    id: "spPvoRKQyy8",
    title: "Music Video 01",
  },
  {
    id: "JgCDqIOocNA",
    title: "Music Video 02",
  },
  {
    id: "-sAzCzH0Kmg",
    title: "Music Video 03",
  },
  
];

function MusicVideo() {

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

        <title>Music Videos | Dazzler Films</title>

        <meta
          name="description"
          content="Watch cinematic music videos produced by Dazzler Films."
        />

        <link
          rel="canonical"
          href="https://dazzlerfilms.in/music-video"
        />

      </Helmet>

      <Header />

      <CinematicBackground />

      <section className="music-hero">

        <div className="music-overlay">

          <h1>Music Videos</h1>

          <p>
            Experience cinematic storytelling through our latest music videos.
          </p>

        </div>

      </section>

      <section className="music-section">

        <div
          className="music-player"
          ref={playerRef}
        >

          <iframe
            src={`https://www.youtube.com/embed/${currentVideo.id}?rel=0`}
            title={currentVideo.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />

        </div>

        

        <div className="music-grid">

          {videos.map((video) => (

            <div
              key={video.id}
              className={`music-card ${
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

export default MusicVideo;
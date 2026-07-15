import "../assets/styles/behindourlens.css";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import { FaPlay } from "react-icons/fa";
import { useState } from "react";
import { Helmet } from "react-helmet-async";

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
    <Helmet>
    
      <title>
        Dazzler Films | Creative Media Production House
      </title>
    
      <meta
        name="description"
        content="Dazzler Films is a creative media company based in Mumbai offering professional video production, photography, podcast production, post-production, digital marketing and creative solutions across India."
      />
    
      <meta
        name="keywords"
        content="Video Production Mumbai, Photography Mumbai, Podcast Production, Corporate Films, Commercial Shoots, Cinematographer Mumbai, Dazzler Films"
      />
    
      <meta
        property="og:title"
        content="Dazzler Films | Creative Media Production Company"
      />
    
      <meta
        property="og:description"
        content="Professional Video Production, Photography, Podcast Production & Creative Media Services."
      />
    
      <meta
        property="og:image"
        content="https://dazzlerfilms.in/og-image.jpg"
      />
    
      <meta
        property="og:url"
        content="https://dazzlerfilms.in/"
      />
    
      <meta
        property="og:type"
        content="website"
      />
    
      <link
        rel="canonical"
        href="https://dazzlerfilms.in/"
      />
      </Helmet> 
      
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
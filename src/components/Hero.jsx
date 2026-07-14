import "../assets/styles/hero.css";
import WhatWeDo from "../components/WhatWeDo";
import OurServices from "./OurPortfolio";

function Hero() {
  return (
    <section className="hero">

      <iframe
        className="hero-video"
        src="https://player.vimeo.com/video/1022425665?background=1&autoplay=1&loop=1&muted=1&controls=0&autopause=0"
        frameBorder="0"
        allow="autoplay; fullscreen"
        title="Dazzler Films Hero"
      />

      <div className="hero-overlay"></div>

      <div className="hero-content">

            <h1></h1>

            <p>
                
            </p>

        </div>

    </section>
  );
}

export default Hero;
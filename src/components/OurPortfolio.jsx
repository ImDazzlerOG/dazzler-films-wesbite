import "../assets/styles/ourportfolio.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Link } from "react-router-dom";

// Images
import portfolio from "../assets/images/our-portfolio/portfolio.webp";
import films from "../assets/images/our-portfolio/films-and-series.webp";
import music from "../assets/images/our-portfolio/Music-Video.webp";
import podcast from "../assets/images/our-portfolio/Podcast.webp";
import corporate from "../assets/images/our-portfolio/corporate.webp";
import events from "../assets/images/our-portfolio/Events.webp";
import industrial from "../assets/images/our-portfolio/Industrial.webp";
import live from "../assets/images/our-portfolio/Live-show.webp";
import product from "../assets/images/our-portfolio/Products.webp";
import social from "../assets/images/our-portfolio/Social-Media.webp";
import wedding from "../assets/images/our-portfolio/weddings.webp";

const portfolioItems = [
  {
    title: "Models & Portfolio",
    image: portfolio,
    link: "/model-portfolio",
  },
  {
    title: "Films & Series",
    image: films,
    link: "/films-series",
  },
  {
    title: "Music Video",
    image: music,
    link: "/music-video",
  },
  {
    title: "Interview & Podcast",
    image: podcast,
    link: "/podcast",
  },
  {
    title: "Corporate",
    image: corporate,
    link: "/corporate",
  },
  {
    title: "Events",
    image: events,
    link: "/events",
  },
  {
    title: "Industrial",
    image: industrial,
    link: "/industrial",
  },
  {
    title: "Live Shows",
    image: live,
    link: "/live-show",
  },
  {
    title: "Product & Brand",
    image: product,
    link: "/product-brand",
  },
  {
    title: "Social Media Content",
    image: social,
    link: "/social-media-content",
  },
  {
    title: "Wedding & Pre-Weddings",
    image: wedding,
    link: "/weddings",
  },
];

function OurPortfolio() {
  return (
    <section className="portfolio-section">

      <div className="portfolio-heading">

        <h2>Our Portfolio</h2>

        <p>
          A glimpse into the stories we've brought to life.
        </p>

      </div>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}

        navigation={true}

        pagination={{
          clickable: true,
        }}

        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}

        loop={true}

        speed={800}

        spaceBetween={30}

        breakpoints={{
          0: {
            slidesPerView: 1,
          },

          600: {
            slidesPerView: 2,
          },

          992: {
            slidesPerView: 3,
          },

          1400: {
            slidesPerView: 4,
          },
        }}
      >
        {portfolioItems.map((item, index) => (
          <SwiperSlide key={index}>

            <Link
              to={item.link}
              className="portfolio-card"
            >

              <div className="portfolio-image">

                <img
                  src={item.image}
                  alt={item.title}
                />

              </div>

              <div className="portfolio-content">

                <h3>{item.title}</h3>

                <span></span>

              </div>

            </Link>

          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
    
export default OurPortfolio;
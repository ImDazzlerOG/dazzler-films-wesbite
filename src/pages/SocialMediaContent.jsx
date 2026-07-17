import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import CinematicBackground from "../components/CinematicBackground";

import SalonInstaEmbed from "../components/SalonInstaEmbed";
import GraphicDesignCard from "../components/GraphicDesignCard";
import { 
    salonReels,
    nailArtReels,
    otherReels,
    graphicDesigns,
 } from "../data/socialMediaData";

import "../assets/styles/socialmediacontent.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";



function SocialMediaContent() {

  return (

    <>

      <Header />


      {/* Salon INSTAGRAM */}

      <section className="instagram-section first-section">

        <div className="social-heading">

        <span>SOCIAL MEDIA CONTENT</span>

        <h2>Salon & Spa Content</h2>


    </div>
        <Swiper

          modules={[Navigation, Pagination]}

          navigation

          pagination={{
            clickable: true,
          }}
          
          
          loop={true}

          spaceBetween={25}

          speed={700}

          breakpoints={{

            0: {
              slidesPerView: 1,
            },

            700: {
              slidesPerView: 2,
            },

            1024: {
              slidesPerView: 3,
            },

            1400: {
              slidesPerView: 4,
            },

          }}

        >

          {salonReels.map((reel) => (

            <SwiperSlide key={reel.id}>

              <SalonInstaEmbed url={reel.url} />

            </SwiperSlide>

          ))}

        </Swiper>

      </section>

    <div className="content-divider"></div>

{/* ================= NAIL ART INSTAGRAM ================= */}

<section className="instagram-section">

  <div className="social-heading">

    <h2>Nail Art Content</h2>



  </div>

  <Swiper

    modules={[Navigation, Pagination]}

    navigation

    pagination={{
      clickable: true,
    }}

    loop={true}

    spaceBetween={25}

    speed={700}

    breakpoints={{

      0: {
        slidesPerView: 1,
      },

      700: {
        slidesPerView: 2,
      },

      1024: {
        slidesPerView: 3,
      },

      1400: {
        slidesPerView: 4,
      },

    }}

  >

    {nailArtReels.map((reel) => (

      <SwiperSlide key={reel.id}>

        <SalonInstaEmbed url={reel.url} />

      </SwiperSlide>

    ))}

  </Swiper>

</section>

{/* ================= OTHER CONTENT ================= */}

<div className="content-divider"></div>

<section className="instagram-section">

  <div className="social-heading">

    <h2>Other Content</h2>

  </div>

  <Swiper

    modules={[Navigation, Pagination]}

    navigation

    pagination={{
      clickable: true,
    }}

    loop={false}

    spaceBetween={25}

    speed={700}

    breakpoints={{

      0: {
        slidesPerView: 1,
      },

      700: {
        slidesPerView: 1,
      },

      1024: {
        slidesPerView: 1,
      },

      1400: {
        slidesPerView: 1,
      },

    }}

  >

    {otherReels.map((reel) => (

      <SwiperSlide key={reel.id}>

        <SalonInstaEmbed
          url={reel.url}
        />

      </SwiperSlide>

    ))}

  </Swiper>

</section>

{/* ================= YOUTUBE SHORTS ================= */}

<div className="content-divider"></div>

<section className="youtube-section">

  <div className="social-heading">

    <h2>Influencer Content</h2>

  
  </div>

  <div className="youtube-wrapper">

    <iframe
      src="https://www.youtube.com/embed/I-kIF6t0ZYY"
      title="Preyal Shah x Vedaglance"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
    ></iframe>

  </div>

</section>

{/* ================= GRAPHIC DESIGNING WORK ================= */}

<div className="content-divider"></div>

<section className="instagram-section">

    <div className="social-heading">

        <h2>Graphic Designing Work</h2>

    </div>

    <Swiper

        modules={[Navigation, Pagination]}

        navigation

        pagination={{
            clickable: true,
        }}

        loop={true}

        spaceBetween={25}

        speed={700}

        breakpoints={{

            0:{
                slidesPerView:1,
            },

            700:{
                slidesPerView:2,
            },

            1024:{
                slidesPerView:3,
            },

            1400:{
                slidesPerView:4,
            },

        }}

    >

        {graphicDesigns.map((design)=>(

            <SwiperSlide key={design.id}>

                <GraphicDesignCard
                    image={design.image}
                />

            </SwiperSlide>

        ))}

    </Swiper>

</section>

      <Footer />

    </>

  );

}

export default SocialMediaContent;
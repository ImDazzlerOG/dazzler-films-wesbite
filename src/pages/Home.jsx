import Header from "../components/layout/Header";
import Hero from "../components/Hero";
import WhatWeDo from "../components/WhatWeDo";
import FeaturedWork from "../components/FeaturedWork";
import OurPortfolio from "../components/OurPortfolio";
import Clients from "../components/Clients";
import GoogleReviews from "../components/GoogleReviews";
import Footer from "../components/layout/Footer";
import { Helmet } from "react-helmet-async";

function Home() {
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
      <Hero />
      <WhatWeDo />
      <FeaturedWork />
      <OurPortfolio />
      <Clients />
      <GoogleReviews />
      <Footer />
    </>
  );
}

export default Home;
import Header from "../components/layout/Header";
import Hero from "../components/Hero";
import WhatWeDo from "../components/WhatWeDo";
import FeaturedWork from "../components/FeaturedWork";
import OurPortfolio from "../components/OurPortfolio";
import Clients from "../components/Clients";
import GoogleReviews from "../components/GoogleReviews";
import Footer from "../components/layout/Footer";

function Home() {
  return (
    <>
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
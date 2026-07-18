import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import PortfolioPage from "./pages/portfoliopage";
import Terms from "./pages/Terms";
import Collaboration from "./pages/CollaborationGuidelines";
import CursorGlow from "./components/ui/CursorGlow";
import ScrollToTop from "./components/ScrollToTop";
import BehindOurLens from "./pages/BehindOurLens";
import SocialMediaContent from "./pages/SocialMediaContent";
import Podcast from "./pages/Podcast";
import MusicVideo from "./pages/MusicVideo";
import LiveShows from "./pages/LiveShows";
import Corporate from "./pages/Corporate";
import Weddings from "./pages/Weddings";
import Industrial from "./pages/Industrial";
import FilmsSeries from "./pages/FilmsSeries";
import Events from "./pages/Events";
import Fashion from "./pages/Fashion";
import Products from "./pages/Products";


function App() {
  return (
    <>
      <CursorGlow />

      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/about" element={<AboutUs />} />

        <Route path="/our-portfolio" element={<PortfolioPage />} />

        <Route path="/behind-our-lens" element={<BehindOurLens />} />

        <Route path="/social-media-content" element={<SocialMediaContent />} />

        <Route path="/events" element={<Events />} />

        <Route path="/music-video" element={<MusicVideo />} />
        
        <Route path="/weddings" element={<Weddings />} />
        
        <Route path="/films-series" element={<FilmsSeries />} />

        <Route path="/live-shows" element={<LiveShows />} />

        <Route path="/podcast" element={<Podcast />} />

        <Route path="/industrial" element={<Industrial />} />
        
        <Route path="/fashion" element={<Fashion />} />

        <Route path="/corporate" element={<Corporate />} />

        <Route path="/terms-and-conditions" element={<Terms />} />

        <Route path="/products" element={<Products />} />

        <Route path="/collaboration-guidelines" element={<Collaboration />} />
      </Routes>
    </>
  );
}

export default App;
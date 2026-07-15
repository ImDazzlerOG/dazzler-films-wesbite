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
        
        <Route path="/podcast" element={<Podcast />} />

        <Route path="/terms-and-conditions" element={<Terms />} />

        <Route path="/collaboration-guidelines" element={<Collaboration />} />

      </Routes>

    </>

  );

}

export default App;
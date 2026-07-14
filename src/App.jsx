import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Podcast from "./pages/Podcast";
import Terms from "./pages/Terms";
import CursorGlow from "./components/ui/CursorGlow";

function App() {

  return (

    <>

      <CursorGlow />

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/about" element={<AboutUs />} />

        <Route path="/podcast" element={<Podcast />} />
        
        <Route path="/terms-and-conditions" element={<Terms />} />

      </Routes>

    </>

  );

}

export default App;
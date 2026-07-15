import "../assets/styles/whatwedo.css";
import CinematicBackground from "../components/CinematicBackground";

function WhatWeDo() {
  return (
    <section className="whatwedo">
      <CinematicBackground />
      <div className="section-heading">

        <span>WHAT WE DO</span>

        <h2>Crafting Visual Experiences</h2>

        <p>
          From concept development to final delivery,
          Dazzler Films brings stories to life through
          cinematic production, professional photography
          and seamless production management.
        </p>

      </div>

      <div className="services-grid">

        {/* VIDEO PRODUCTION */}

        <div className="service-card video">

          <div className="overlay"></div>

          <div className="content">

            <h3>Video Production</h3>

            <p>
              Commercial Films, Brand Videos,
              Podcasts, Interviews, Music Videos,
              Event Coverage, Editing, Color Grading
              & Complete Post Production.
            </p>

          </div>

        </div>

        {/* PHOTOGRAPHY */}

        <div className="service-card photo">

          <div className="overlay"></div>

          <div className="content">

            <h3>Photography</h3>

            <p>
              Fashion, Product, Corporate,
              Lifestyle, Event and Commercial
              Photography with a cinematic approach.
            </p>

          </div>

        </div>

        {/* PRODUCTION MANAGEMENT */}

        <div className="service-card production">

          <div className="overlay"></div>

          <div className="content">

            <h3>Production Management</h3>

            <p>
              Pre-Production Planning,
              Crew Management, Equipment,
              Location Coordination and
              Complete Shoot Execution.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}

export default WhatWeDo;
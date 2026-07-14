import "../assets/styles/whatwedo.css";

function WhatWeDo() {
  return (
    <section className="whatwedo">

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

        {/* Card 1 */}

        <div className="service-card video">

          <div className="overlay"></div>

          <div className="content">

            <h3>Video Production</h3>

            <p>
              End-to-end production including
              shooting, editing, color grading,
              podcasts, commercials and events.
            </p>

          </div>

        </div>

        {/* Card 2 */}

        <div className="service-card photo">

          <div className="overlay"></div>

          <div className="content">

            <h3>Photography</h3>

            <p>
              Product, fashion, corporate,
              event and lifestyle photography
              tailored for every brand.
            </p>

          </div>

        </div>

        {/* Card 3 */}

        <div className="service-card production">

          <div className="overlay"></div>

          <div className="content">

            <h3>Production Management</h3>

            <p>
              Planning, crew, equipment,
              locations and complete
              production execution.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}

export default WhatWeDo;
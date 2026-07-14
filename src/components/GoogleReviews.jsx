import { useEffect } from "react";
import "../assets/styles/googlereviews.css";

function GoogleReviews() {

  useEffect(() => {

    if (!document.querySelector('script[src="https://elfsightcdn.com/platform.js"]')) {

      const script = document.createElement("script");

      script.src = "https://elfsightcdn.com/platform.js";

      script.async = true;

      document.body.appendChild(script);

    }

  }, []);

  return (

    <section className="reviews-section">

      <div className="reviews-container">

        <div className="reviews-heading">

          <h2>What Our Clients Say</h2>

          <p>
            Trusted by brands, businesses and creators across India.
          </p>

        </div>

        <div
          className="elfsight-app-f1e6542b-f543-47d2-8352-59253d820fe2"
          data-elfsight-app-lazy
        ></div>

      </div>

    </section>

  );

}

export default GoogleReviews;
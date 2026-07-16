import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import { useEffect } from "react";

function WeddingPhotoCard({ image }) {

  useEffect(() => {
    Fancybox.bind("[data-fancybox='wedding']", {
      animated: true,
      dragToClose: true,
      Toolbar: {
        display: [
          "close",
          "zoom",
          "fullscreen",
          "slideshow",
        ],
      },
    });

    return () => Fancybox.destroy();
  }, []);

  return (
    <a
      href={image}
      data-fancybox="wedding"
      className="wedding-photo-card"
    >
      <img
        src={image}
        alt="Wedding Photo"
        loading="lazy"
      />
    </a>
  );
}

export default WeddingPhotoCard;
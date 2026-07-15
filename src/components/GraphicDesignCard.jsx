import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import { useEffect } from "react";

function GraphicDesignCard({ image }) {

  useEffect(() => {
    Fancybox.bind("[data-fancybox='graphics']", {
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
      data-fancybox="graphics"
      className="graphic-card"
    >
      <img
        src={image}
        alt="Graphic Design"
        loading="lazy"
      />
    </a>
  );
}

export default GraphicDesignCard;
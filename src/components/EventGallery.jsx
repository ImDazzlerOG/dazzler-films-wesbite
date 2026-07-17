import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import { useEffect } from "react";

import "../assets/styles/eventgallery.css";

function EventGallery({ images }) {

    useEffect(() => {
        Fancybox.bind("[data-fancybox='events']", {
            animated: true,
            dragToClose: true,
            Toolbar: {
                display: [
                    "close",
                    "zoom",
                    "fullscreen",
                    "slideshow",
                    "thumbs",
                ],
            },
        });

        return () => Fancybox.destroy();
    }, []);

    return (
        <section className="event-gallery">

            <div className="event-gallery-grid">

                {images.map((image, index) => (
                    <a
                        key={index}
                        href={image}
                        data-fancybox="events"
                        className="event-gallery-item"
                    >
                        <img
                            src={image}
                            alt={`Event ${index + 1}`}
                            loading="lazy"
                        />
                    </a>
                ))}

            </div>

        </section>
    );
}

export default EventGallery;
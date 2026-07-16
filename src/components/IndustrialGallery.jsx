import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import { useEffect } from "react";
import "../assets/styles/industrialgallery.css";

// Images
import img1 from "../assets/images/industrial/1.webp";
import img2 from "../assets/images/industrial/2.webp";
import img3 from "../assets/images/industrial/3.webp";
import img4 from "../assets/images/industrial/4.webp";

const images = [
    img1,
    img2,
    img3,
    img4,
];

export default function IndustrialGallery() {

    useEffect(() => {

        Fancybox.bind("[data-fancybox='industrial']", {
            animated: true,
            dragToClose: true,
            Toolbar: {
                display: [
                    "zoom",
                    "fullscreen",
                    "slideshow",
                    "download",
                    "close",
                ],
            },
        });

        return () => {
            Fancybox.unbind("[data-fancybox='industrial']");
            Fancybox.close();
        };

    }, []);

    return (

        <div className="industrial-grid">

            {images.map((image, index) => (

                <a
                    key={index}
                    href={image}
                    data-fancybox="industrial"
                    className="industrial-card"
                >

                    <img
                        src={image}
                        alt={`Industrial ${index + 1}`}
                        loading="lazy"
                    />

                </a>

            ))}

        </div>

    );
}
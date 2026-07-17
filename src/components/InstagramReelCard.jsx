import { FaInstagram, FaPlay } from "react-icons/fa";
import "../assets/styles/instagramreelcard.css";

function InstagramReelCard({ reel }) {
    return (
        <a
            href={reel.url}
            target="_blank"
            rel="noopener noreferrer"
            className="instagram-card"
        >
            <div className="instagram-card-image">

                <img
                    src={reel.thumbnail}
                    alt={reel.title}
                    loading="lazy"
                />

                <div className="instagram-overlay">
                    <div className="instagram-play">
                        <FaPlay />
                    </div>
                </div>

                <div className="instagram-badge">
                    <FaInstagram />
                </div>

            </div>
        </a>
    );
}

export default InstagramReelCard;
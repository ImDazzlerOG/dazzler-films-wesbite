import { useEffect, useRef } from "react";

function SalonInstaEmbed({ url }) {
  const embedRef = useRef(null);

  useEffect(() => {
    // Remove any previous Instagram script
    const oldScript = document.querySelector(
      'script[src="https://www.instagram.com/embed.js"]'
    );

    if (oldScript) {
      oldScript.remove();
    }

    // Load Instagram Embed Script
    const script = document.createElement("script");
    script.src = "https://www.instagram.com/embed.js";
    script.async = true;

    script.onload = () => {
      if (window.instgrm) {
        window.instgrm.Embeds.process();
      }
    };

    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, [url]);

  return (
    <div className="salon-instagram-card">
      <blockquote
        ref={embedRef}
        className="instagram-media"
        data-instgrm-permalink={url}
        data-instgrm-version="14"
        style={{
          background: "#fff",
          border: "none",
          borderRadius: "18px",
          margin: 0,
          width: "100%",
          minWidth: "100%",
          maxWidth: "100%",
        }}
      ></blockquote>
    </div>
  );
}

export default SalonInstaEmbed;
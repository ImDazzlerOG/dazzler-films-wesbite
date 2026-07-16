import { useEffect } from "react";

function SalonInstaEmbed({ url }) {

  useEffect(() => {

    if (window.instgrm) {

      window.instgrm.Embeds.process();

      return;

    }

    const script = document.createElement("script");

    script.src = "https://www.instagram.com/embed.js";

    script.async = true;

    script.onload = () => {

      window.instgrm?.Embeds.process();

    };

    document.body.appendChild(script);

  }, [url]);

  return (

    <div className="instagram-card">

      <blockquote
        className="instagram-media"
        data-instgrm-permalink={url}
        data-instgrm-version="14"
        style={{
          background:"#FFF",
          border:0,
          borderRadius:"18px",
          margin:"0 auto",
          width:"100%",
          maxWidth:"420px",
        }}
      />

    </div>

  );

}

export default SalonInstaEmbed;
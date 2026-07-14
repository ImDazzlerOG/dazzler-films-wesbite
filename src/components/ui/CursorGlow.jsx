import { useEffect } from "react";

function CursorGlow() {

  useEffect(() => {

    const glow = document.querySelector(".cursor-glow");

    const move = (e) => {

      glow.style.setProperty("--x", e.clientX + "px");
      glow.style.setProperty("--y", e.clientY + "px");

    };

    window.addEventListener("mousemove", move);

    return () => window.removeEventListener("mousemove", move);

  }, []);

  return <div className="cursor-glow"></div>;

}

export default CursorGlow;
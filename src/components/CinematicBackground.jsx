import { useEffect, useRef } from "react";

const CinematicBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let particles = [];
    let animationFrame;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    resize();
    window.addEventListener("resize", resize);

    class Particle {
      constructor() {
        this.reset();
      }

      reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;

        this.radius = Math.random() * 3 + 0.3;

        this.speedX = (Math.random() - 0.5) * 0.08;
        this.speedY = (Math.random() - 0.12);

        this.opacity = Math.random() * 0.18 + 0.03;

        this.blue = Math.random() > 0.85;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (
          this.x < -20 ||
          this.x > canvas.width + 20 ||
          this.y < -20 ||
          this.y > canvas.height + 20
        ) {
          this.reset();
        }
      }

      draw() {
  ctx.beginPath();

  ctx.shadowBlur = this.radius * 6;

  ctx.shadowColor = this.blue
    ? "rgba(29,140,255,0.4)"
    : "rgba(255,255,255,0.25)";

  ctx.fillStyle = this.blue
    ? `rgba(29,140,255,${this.opacity})`
    : `rgba(255,255,255,${this.opacity})`;

  ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);

  ctx.fill();

  ctx.shadowBlur = 0;
}
    }
    for (let i = 0; i < 120; i++) {
      particles.push(new Particle());
    }

    function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Background haze
  const haze = ctx.createRadialGradient(
    canvas.width * 0.25,
    canvas.height * 0.4,
    0,
    canvas.width * 0.25,
    canvas.height * 0.4,
    canvas.width * 0.8
  );

  haze.addColorStop(0, "rgba(0,140,255,0.05)");
  haze.addColorStop(1, "rgba(0,0,0,0)");

  ctx.fillStyle = haze;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Moving light beam
  const beamX =
    canvas.width / 2 +
    Math.sin(Date.now() * 0.00015) * 250;

  const beam = ctx.createRadialGradient(
    beamX,
    canvas.height * 0.2,
    0,
    beamX,
    canvas.height * 0.2,
    500
  );

  beam.addColorStop(0, "rgba(29,140,255,0.08)");
  beam.addColorStop(1, "rgba(29,140,255,0)");

  ctx.fillStyle = beam;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Floating dust
  particles.forEach((p) => {
    p.update();
    p.draw();
  });

  animationFrame = requestAnimationFrame(animate);
}

    animate();

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <canvas className="cinematic-bg" ref={canvasRef} />;
};

export default CinematicBackground;
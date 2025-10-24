// Subtle star twinkle effect
document.addEventListener("DOMContentLoaded", () => {
  const starCanvas = document.createElement("canvas");
  starCanvas.width = window.innerWidth;
  starCanvas.height = window.innerHeight;
  starCanvas.style.position = "fixed";
  starCanvas.style.top = "0";
  starCanvas.style.left = "0";
  starCanvas.style.zIndex = "-2";
  document.body.appendChild(starCanvas);

  const ctx = starCanvas.getContext("2d");
  const stars = Array.from({length: 200}, () => ({
    x: Math.random() * starCanvas.width,
    y: Math.random() * starCanvas.height,
    r: Math.random() * 1.2,
    o: Math.random()
  }));

  function animate() {
    ctx.clearRect(0, 0, starCanvas.width, starCanvas.height);
    for (let s of stars) {
      s.o += (Math.random() - 0.5) * 0.05;
      s.o = Math.min(Math.max(s.o, 0.1), 1);
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255,255,255,${s.o})`;
      ctx.fill();
    }
    requestAnimationFrame(animate);
  }
  animate();
});

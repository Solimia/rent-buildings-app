import React, { useEffect, useRef } from "react";
import "./page2.css";

export default function App() {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    // 🌧️ Ефект дощу
    const canvas = canvasRef.current;
    const c = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    function randomNum(max, min) {
      return Math.floor(Math.random() * max) + min;
    }

    function RainDrops(x, y, endy, velocity, opacity) {
      this.x = x;
      this.y = y;
      this.endy = endy;
      this.velocity = velocity;
      this.opacity = opacity;

      this.draw = function () {
        c.beginPath();
        c.moveTo(this.x, this.y);
        c.lineTo(this.x, this.y - this.endy);
        c.lineWidth = 1;
        c.strokeStyle = `rgba(255,255,255,${this.opacity})`;
        c.stroke();
      };

      this.update = function () {
        const rainEnd = window.innerHeight + 100;
        this.y = this.y >= rainEnd ? this.endy - 100 : this.y + this.velocity;
        this.draw();
      };
    }

    const rainArray = [];
    for (let i = 0; i < 140; i++) {
      const rainXLocation = Math.floor(Math.random() * window.innerWidth) + 1;
      const rainYLocation = Math.random() * -500;
      const randomRainHeight = randomNum(10, 2);
      const randomSpeed = randomNum(20, 0.2);
      const randomOpacity = Math.random() * 0.55;
      rainArray.push(
        new RainDrops(
          rainXLocation,
          rainYLocation,
          randomRainHeight,
          randomSpeed,
          randomOpacity
        )
      );
    }

    function animateRain() {
      requestAnimationFrame(animateRain);
      c.clearRect(0, 0, window.innerWidth, window.innerHeight);
      rainArray.forEach((r) => r.update());
    }
    animateRain();

    // 🎥 Ефект руху при русі миші
    const handleMouseMove = (e) => {
      document.documentElement.style.setProperty(
        "--move-x",
        `${(e.clientX - window.innerWidth / 2) * -0.005}deg`
      );
      document.documentElement.style.setProperty(
        "--move-y",
        `${(e.clientY - window.innerHeight / 2) * 0.01}deg`
      );
    };
    document.addEventListener("mousemove", handleMouseMove);

    // 📜 Ефект паралаксу при скролі
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const layers = containerRef.current?.querySelectorAll(".layers__item");
      layers?.forEach((layer, i) => {
        const depth = (i + 1) * 20; // різна глибина для кожного шару
        layer.style.transform = `translateY(${scrollY / depth}px) translateZ(${(i - 2) * 100
          }px) scale(${1 - i * 0.05})`;
      });
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="layers">
      <div className="logo" style={{ backgroundImage: "url(../assets/img/Home-logo.png)" }} />
      <div className="layers__container" ref={containerRef}>
        <div className="layers__item layer-1"></div>
        <div className="layers__item layer-2"></div>
        <div className="layers__item layer-3">
          <div className="hero-content">
            <h1>
              Homes <span></span>
            </h1>
            <div className="hero-content__p">

            </div>
            <button className="button-start">view options</button>
          </div>
        </div>
        <div className="layers__item layer-4">
          <canvas ref={canvasRef} className="rain"></canvas>
        </div>
        <div className="layers__item layer-5" ></div>
        <div className="layers__item layer-6" ></div>
      </div>
    </section>
  );
}


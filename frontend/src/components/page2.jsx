import React, { useEffect, useRef } from "react";
import "./page2.css";

export default function App() {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const c = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // 🔐 Безпечний генератор псевдовипадкових чисел
    function secureRandom() {
      const array = new Uint32Array(1);
      crypto.getRandomValues(array);
      return array[0] / (0xffffffff + 1); // результат у діапазоні [0, 1)
    }

    function randomNum(max, min) {
      return Math.floor(secureRandom() * (max - min + 1)) + min;
    }

    // 🌧️ Створюємо дощ без this
    function createRainDrop(x, y, endy, velocity, opacity) {
      let posY = y;

      const draw = () => {
        c.beginPath();
        c.moveTo(x, posY);
        c.lineTo(x, posY - endy);
        c.lineWidth = 1;
        c.strokeStyle = `rgba(255,255,255,${opacity})`;
        c.stroke();
      };

      const update = () => {
        const rainEnd = window.innerHeight + 100;
        posY = posY >= rainEnd ? endy - 100 : posY + velocity;
        draw();
      };

      return { update };
    }

    // 🌧️ Створення масиву дощу
    const rainArray = [];
    for (let i = 0; i < 140; i++) {
      const rainXLocation = randomNum(window.innerWidth, 1);
      const rainYLocation = secureRandom() * -500;
      const randomRainHeight = randomNum(10, 2);
      const randomSpeed = secureRandom() * (20 - 0.2) + 0.2;
      const randomOpacity = secureRandom() * 0.55;

      rainArray.push(
        createRainDrop(
          rainXLocation,
          rainYLocation,
          randomRainHeight,
          randomSpeed,
          randomOpacity
        )
      );
    }

    // 🌧️ Анімація дощу
    function animateRain() {
      requestAnimationFrame(animateRain);
      c.clearRect(0, 0, window.innerWidth, window.innerHeight);

      for (const r of rainArray) {
        r.update();
      }
    }
    animateRain();

    // 🎥 Рух при миші
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

    // 📜 Паралакс при скролі
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const layers = containerRef.current?.querySelectorAll(".layers__item");

      for (const [i, layer] of Array.from(layers || []).entries()) {
        const depth = (i + 1) * 20;
        layer.style.transform = `translateY(${scrollY / depth}px) translateZ(${
          (i - 2) * 100
        }px) scale(${1 - i * 0.05})`;
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="layers" style={{ width: "100vw" }}>
      <div
        className="logo"
        style={{ backgroundImage: "url(../assets/img/Home-logo.png)" }}
      />
      <div className="layers__container" ref={containerRef}>
        <div className="layers__item layer-1"></div>
        <div className="layers__item layer-2"></div>
        <div className="layers__item layer-3">
          <div className="hero-content">
            <h1>
              Homes 
            </h1>
            <div className="hero-content__p"></div>
            <button className="button-start">view options</button>
          </div>
        </div>
        <div className="layers__item layer-4">
          <canvas ref={canvasRef} className="rain"></canvas>
        </div>
        <div className="layers__item layer-5"></div>
        <div className="layers__item layer-6"></div>
      </div>
    </section>
  );
}

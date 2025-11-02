import React, { useEffect } from "react";
import "./Page.css";
import logo from "../assets/img/Home-logo.png";

export default function Page() {
  useEffect(() => {
    document.querySelectorAll(".header-content h1").forEach((e) => {
      e.innerHTML = e.textContent
        .replace(/ (-|#|@){1}/g, (s) => s[1] + s[0])
        .replace(/(\S*)/g, (m) => {
          return m.replace(/\S(-|#|@)?/g, '<span class="letter">$&</span>');
        });

      e.querySelectorAll(".letter").forEach(function (l, i) {
        l.setAttribute(
          "style",
          `z-index: -${i}; transition-duration: ${i / 5 + 1}s`
        );
      });
    });
  }, []);

  return (
    <div className="home">

      {/* --- Розмите верхнє меню --- */}
      <header className="navbar">
        <div className="logo">ОрендаБудинків</div>
        <nav className="nav-links">
          <a href="#">Переглянути деталі</a>
          <a href="#">Увійти</a>
          <a href="#">Реєстрація</a>
        </nav>
      </header>
      {/* --- Кінець меню --- */}

      <header className="hero">
        <div className="overlay">
          <h1 className="title">  </h1>
          <p className="subtitle">
            Знайди свій ідеальний дім для життя чи відпочинку
          </p>
          <button className="cta">Переглянути пропозиції</button>
      <header className="hero">
        <div className="overlay">
          <h1 className="title">Houses for rent</h1>
          <p className="subtitle">Comfort, style, and space — choose a home that feels like yours.</p>
          <button className="cta">View listings</button>
        </div>

      </div>
      <div className='FirstCol'>
        <div className='Layer1'></div>
        <div className='Layer2'></div>
        <div className='Layer3'></div>

      </div>

    </>
  );
}


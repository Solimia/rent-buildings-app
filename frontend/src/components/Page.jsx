import React from "react";
import "./Page.css";

export default function Page() {
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
      </header>

      <footer className="footer">
        <p>© 2025 ОрендаБудинків. Всі права захищені.</p>
      </footer>
    </div>
  );
}


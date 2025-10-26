import React from "react";
import "./Page.css";

export default function Page() {
  return (
    <div className="home">
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

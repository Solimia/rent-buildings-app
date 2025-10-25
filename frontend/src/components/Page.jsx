import React from "react";
import "./Page.css";

export default function Page() {
  return (
    <div className="home">
      <header className="hero">
        <div className="overlay">
          <h1 className="title">Оренда будинків</h1>
          <p className="subtitle">Знайди свій ідеальний дім для життя чи відпочинку</p>
          <button className="cta">Переглянути пропозиції</button>
        </div>
      </header>

      <section className="cards-section">
        <h2>Популярні пропозиції</h2>
        <div className="cards">
          <div className="card">
            <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80" alt="Будинок у горах" />
            <h3>Будинок у Карпатах</h3>
            <p>Затишний дім з видом на гори 🌲</p>
          </div>
          <div className="card">
            <img src="https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=800&q=80" alt="Сучасний котедж" />
            <h3>Сучасний котедж</h3>
            <p>Стильний будинок біля міста з басейном 💧</p>
          </div>
          <div className="card">
            <img src="https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&w=800&q=80" alt="Морський будинок" />
            <h3>Будинок біля моря</h3>
            <p>Ідеальне місце для відпочинку 🏖️</p>
          </div>
        </div>
      </section>

      <footer className="footer">
        <p>© 2025 ОрендаБудинків. Всі права захищені.</p>
      </footer>
    </div>
  );
}

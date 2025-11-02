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
    <>
      <div className="page">
        <header className="top-line">
          <div className="logo">
            <img src="img/Home-logo.png" alt="Grow" />
          </div>

          <nav className="main-menu">
            <ul>
              <li><a href="#">Main</a></li>
              <li className="active"><span>Info</span></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </nav>

          <a href="#" className="button button--top">Plant now</a>
        </header>

        <div className="header-content">
          <div className="header-content__slide active">
            <h1 className="letters">Homes</h1>
            <div className="header-content__info">
              <br />
              <button className="button button--main">Plant a tree now</button>
            </div>
          </div>
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

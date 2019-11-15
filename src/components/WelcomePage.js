import React from "react";
import { TweenMax } from "gsap";

export default function WelcomePage() {
  return (
    <section className="welcome-page">
      <header id="header">
        <h1>Welcome to the ultimate fan site!</h1>
        <img id="mainImg"
          className="main-img"
          src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          alt="rick"
        />
      </header>
    </section>
  );
}

//gsap.to(".mainImg", {duration: 1, opacity: 0.3, ease: "elastic"});

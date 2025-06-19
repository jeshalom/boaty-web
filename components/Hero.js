import React from "react";

const Hero = () => (
  <section style={{ textAlign: "center", paddingTop: "5rem" }}>
    <img src="https://img.icons8.com/external-wanicon-flat-wanicon/128/4F8FF0/external-boat-summer-wanicon-flat-wanicon.png" alt="Boaty Icon" style={{ width: 88, marginBottom: 18 }}/>
    <h1 style={{ fontSize: "2.5rem", margin: "1rem 0 0.5rem" }}>Boaty.live</h1>
    <p style={{ color: "#556", fontSize: "1.2rem", maxWidth: 540, margin: "0 auto 2rem" }}>
      The modern platform for live boat tracking, marine insights, and more.<br />
      Launching soon!
    </p>
    <a href="#cta">
      <button>Get Notified</button>
    </a>
  </section>
);

export default Hero;

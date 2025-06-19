import React from "react";

const Footer = () => (
  <footer style={{
    marginTop: "auto",
    textAlign: "center",
    padding: "2rem 0",
    background: "#1a2238",
    color: "#fff"
  }}>
    <div style={{ fontSize: "1rem" }}>
      &copy; {new Date().getFullYear()} Boaty.live &mdash; Made by Jack
    </div>
    <div style={{ marginTop: 6 }}>
      <a href="https://github.com/jeshalom/boaty-landing" target="_blank" rel="noopener noreferrer" style={{ color: "#86d5fa", fontSize: "0.9rem" }}>
        View on GitHub
      </a>
    </div>
  </footer>
);

export default Footer;

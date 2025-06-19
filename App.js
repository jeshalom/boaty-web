import React from "react";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Screenshots from "./components/Screenshots";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Hero />
      <Features />
      <Screenshots />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;

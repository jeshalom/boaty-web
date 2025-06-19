import React from "react";

const CTA = () => (
  <section id="cta" style={{ textAlign: "center", marginTop: "4rem", marginBottom: "6rem" }}>
    <h2 style={{ marginBottom: "1rem" }}>Want Early Access?</h2>
    <p style={{ color: "#566" }}>Sign up to get notified when Boaty.live launches!</p>
    <form
      style={{ marginTop: "1.5rem" }}
      action="https://formspree.io/f/your-form-id" // <-- Replace with your Formspree or EmailJS form endpoint
      method="POST"
      target="_blank"
    >
      <input
        name="email"
        type="email"
        required
        placeholder="Your email"
        style={{
          padding: "0.8rem 1.1rem",
          fontSize: "1rem",
          borderRadius: 24,
          border: "1px solid #aaa",
          marginRight: 10,
          width: 220,
          maxWidth: "90%"
        }}
      />
      <button type="submit">Notify Me</button>
    </form>
  </section>
);

export default CTA;

import React from "react";

const features = [
  {
    icon: "🌊",
    title: "Live Tracking",
    desc: "See real-time boat positions and movements worldwide.",
  },
  {
    icon: "📱",
    title: "Mobile Ready",
    desc: "Sleek, responsive design—works great on any device.",
  },
  {
    icon: "⚡",
    title: "Fast & Simple",
    desc: "Lightweight, modern UI. No clutter, no distractions.",
  },
];

const Features = () => (
  <section>
    <h2 style={{ textAlign: "center" }}>Features</h2>
    <div style={{
      display: "flex",
      justifyContent: "center",
      flexWrap: "wrap",
      gap: "2rem",
      marginTop: "2rem"
    }}>
      {features.map(f => (
        <div key={f.title} style={{
          background: "#fff",
          borderRadius: 16,
          boxShadow: "0 2px 12px rgba(50,50,100,0.05)",
          padding: "2rem",
          minWidth: 240,
          maxWidth: 260,
          textAlign: "center"
        }}>
          <div style={{ fontSize: "2.5rem", marginBottom: 16 }}>{f.icon}</div>
          <h3 style={{ margin: "0.5rem 0" }}>{f.title}</h3>
          <p style={{ color: "#566", fontSize: "1.08rem" }}>{f.desc}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Features;

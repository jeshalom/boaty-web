import React from "react";

const screenshots = [
  {
    img: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80",
    alt: "Live map interface"
  },
  {
    img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
    alt: "Mobile view"
  }
];

const Screenshots = () => (
  <section>
    <h2 style={{ textAlign: "center" }}>Sneak Peek</h2>
    <div style={{
      display: "flex",
      justifyContent: "center",
      gap: "2rem",
      flexWrap: "wrap",
      marginTop: "2rem"
    }}>
      {screenshots.map(s => (
        <div key={s.alt} style={{
          background: "#fff",
          borderRadius: 16,
          boxShadow: "0 2px 12px rgba(50,50,100,0.05)",
          padding: 10
        }}>
          <img src={s.img} alt={s.alt} style={{
            width: 220,
            height: 320,
            objectFit: "cover",
            borderRadius: 12
          }} />
        </div>
      ))}
    </div>
  </section>
);

export default Screenshots;

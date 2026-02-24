export default function Home() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", background: "#F5F0E6", color: "#3E2F25" }}>
      
      <section style={{ background: "#E8D8C3", padding: "60px 20px", textAlign: "center" }}>
        <h1 style={{ fontSize: "40px", marginBottom: "10px" }}>
          Om Raj Electrical ⚡
        </h1>
        <h3>Best Electrical Shop in Haridwar</h3>
        <p>
          Located at Khanna Nagar Main Road, Haridwar.  
          We provide all types of electrical items.  
          Wholesale & Retail Available.
        </p>

        <div style={{ marginTop: "20px" }}>
          <a href="tel:+918791615060" style={buttonStyleDark}>
            Call Now
          </a>
          <a href="https://wa.me/918791615060" style={buttonStyleBrown}>
            WhatsApp
          </a>
        </div>
      </section>

      <section style={{ padding: "50px 20px", textAlign: "center" }}>
        <h2>Our Products</h2>
        <ul style={{ listStyle: "none", padding: 0 }}>
          <li>Electrical Wires & Cables</li>
          <li>Switches & Switchgear</li>
          <li>MCB & Distribution Boards</li>
          <li>LED Lights & Bulbs</li>
          <li>Fans & Appliances</li>
          <li>Conduit Pipes & Fittings</li>
        </ul>
      </section>

      <section style={{ padding: "40px 20px", textAlign: "center" }}>
        <h2>Find Us on Map</h2>
        <iframe
          src="https://www.google.com/maps?q=Om+Raj+Electrical+Khanna+Nagar+Main+Road+Haridwar&output=embed"
          width="100%"
          height="300"
          style={{ border: 0 }}
        ></iframe>
      </section>

      <section style={{ background: "#3E2F25", color: "white", padding: "40px 20px", textAlign: "center" }}>
        <h2>Contact Us</h2>
        <p>📍 Khanna Nagar Main Road, Haridwar</p>
        <p>📞 8791615060</p>
        <p>Open: 9 AM – 8 PM</p>
      </section>

    </div>
  );
}

const buttonStyleDark = {
  background: "#3E2F25",
  color: "white",
  padding: "10px 20px",
  marginRight: "10px",
  textDecoration: "none",
  borderRadius: "8px"
};

const buttonStyleBrown = {
  background: "#6B4F3A",
  color: "white",
  padding: "10px 20px",
  textDecoration: "none",
  borderRadius: "8px"
};

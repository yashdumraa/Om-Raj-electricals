export default function Home() {
  return (
    <div style={{ fontFamily: "Segoe UI, Arial, sans-serif", backgroundColor: "#F8F5F0", color: "#3E2F25" }}>

      {/* Top Bar */}
      <div style={{
        backgroundColor: "#3E2F25",
        color: "white",
        padding: "10px 20px",
        display: "flex",
        justifyContent: "space-between",
        fontSize: "14px"
      }}>
        <span>📍 Khanna Nagar Main Road, Haridwar</span>
        <span>📞 8791615060 | Wholesale & Retail</span>
      </div>

      {/* Hero Section */}
      <section style={{
        background: "linear-gradient(135deg,#E8D8C3,#D6C2AD)",
        padding: "80px 20px",
        textAlign: "center"
      }}>
        <h1 style={{ fontSize: "44px", marginBottom: "10px" }}>
          Om Raj Electrical ⚡
        </h1>

        <h2 style={{ fontWeight: "500", marginBottom: "20px" }}>
          Your Complete Electrical Solution in Haridwar
        </h2>

        <p style={{
          maxWidth: "650px",
          margin: "0 auto 30px",
          fontSize: "16px"
        }}>
          Supplying high-quality electrical products for homes, contractors,
          builders, and retailers. Trusted service, genuine brands,
          and competitive pricing.
        </p>

        <div>
          <a href="tel:+918791615060" style={primaryBtn}>Call Now</a>
          <a href="https://wa.me/918791615060" style={secondaryBtn}>WhatsApp</a>
        </div>
      </section>

      {/* Products Section */}
      <section style={{ padding: "70px 20px", textAlign: "center" }}>
        <h2 style={{ fontSize: "32px", marginBottom: "40px" }}>
          Our Product Range
        </h2>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
          gap: "20px",
          maxWidth: "1000px",
          margin: "0 auto"
        }}>
          {products.map((item, index) => (
            <div key={index} style={card}>
              <h3>{item}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section style={{
        backgroundColor: "#EFE7DD",
        padding: "70px 20px",
        textAlign: "center"
      }}>
        <h2 style={{ fontSize: "32px", marginBottom: "40px" }}>
          Why Choose Om Raj Electrical?
        </h2>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
          gap: "20px",
          maxWidth: "1000px",
          margin: "0 auto"
        }}>
          <div style={card}>
            <h3>✔ Genuine Products</h3>
            <p>Only trusted and quality electrical brands.</p>
          </div>

          <div style={card}>
            <h3>✔ Competitive Pricing</h3>
            <p>Best wholesale & retail rates in Haridwar.</p>
          </div>

          <div style={card}>
            <h3>✔ Trusted Local Shop</h3>
            <p>Serving Haridwar customers with reliability.</p>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section style={{ padding: "70px 20px", textAlign: "center" }}>
        <h2 style={{ fontSize: "30px", marginBottom: "30px" }}>
          Find Us on Map
        </h2>

        <div style={{
          maxWidth: "900px",
          margin: "0 auto",
          borderRadius: "12px",
          overflow: "hidden",
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
        }}>
          <iframe
            src="https://www.google.com/maps?q=Om+Raj+Electrical+Khanna+Nagar+Main+Road+Haridwar&output=embed"
            width="100%"
            height="350"
            style={{ border: 0 }}
            loading="lazy"
          ></iframe>
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        backgroundColor: "#2B1F17",
        color: "white",
        padding: "40px 20px",
        textAlign: "center"
      }}>
        <h3>Om Raj Electrical ⚡</h3>
        <p>Wholesale & Retail Electrical Store</p>
        <p>Khanna Nagar Main Road, Haridwar</p>
        <p>📞 8791615060</p>

        <p style={{ marginTop: "20px", fontSize: "14px", opacity: 0.8 }}>
          © {new Date().getFullYear()} Om Raj Electrical. All Rights Reserved.
        </p>
      </footer>

    </div>
  );
}

const primaryBtn = {
  backgroundColor: "#3E2F25",
  color: "white",
  padding: "12px 25px",
  borderRadius: "8px",
  textDecoration: "none",
  marginRight: "15px",
  fontWeight: "600"
};

const secondaryBtn = {
  backgroundColor: "#6B4F3A",
  color: "white",
  padding: "12px 25px",
  borderRadius: "8px",
  textDecoration: "none",
  fontWeight: "600"
};

const card = {
  backgroundColor: "white",
  padding: "25px",
  borderRadius: "12px",
  boxShadow: "0 4px 10px rgba(0,0,0,0.08)"
};

const products = [
  "Electrical Wires & Cables",
  "Switches & Modular Switches",
  "MCB & Distribution Boards",
  "LED Lights & Decorative Lighting",
  "Fans & Electrical Appliances",
  "Conduit Pipes & Fittings"
];

import Image from "next/image";

export default function Home() {
  return (
    <div>
      {/* Navbar */}
      <nav style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "15px 30px",
        backgroundColor: "#003366",
        color: "#FFD700"
      }}>
        {/* Logo */}
        <div style={{ display: "flex", alignItems: "center" }}>
          <Image src="/logo.png" alt="Bright Step Tutoring Logo" width={50} height={50} />
          <span style={{ marginLeft: "10px", fontSize: "1.2rem", fontWeight: "bold" }}>
            Bright Step Tutoring
          </span>
        </div>

        {/* Navigation Links */}
        <div>
          <a href="#" style={{ margin: "0 15px" }}>Home</a>
          <a href="#about" style={{ margin: "0 15px" }}>About</a>
          <a href="#contact" style={{ margin: "0 15px" }}>Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "80vh",
        textAlign: "center",
        padding: "20px"
      }}>
        <h1 style={{ fontSize: "2.5rem", marginBottom: "15px" }}>
          Welcome to Bright Step Tutoring
        </h1>
        <p style={{ fontSize: "1.2rem", maxWidth: "600px" }}>
          Learn Maths, English, Science, and ICT with personalized lessons.
        </p>
        <button style={{ marginTop: "20px" }}>Get Started</button>
      </section>
    </div>
  );
}

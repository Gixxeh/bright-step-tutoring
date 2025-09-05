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
        color: "#FFD700",
        position: "sticky",
        top: 0,
        zIndex: 1000
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
          Learn Maths, English, Science, and ICT with personalized lessons designed to help you succeed.
        </p>
        <button style={{ marginTop: "20px" }}>Get Started</button>
      </section>

      {/* About Section */}
      <section id="about" style={{
        padding: "60px 20px",
        backgroundColor: "#fff",
        color: "#003366",
        textAlign: "center"
      }}>
        <h2 style={{ fontSize: "2rem", marginBottom: "20px", color: "#003366" }}>About Us</h2>
        <p style={{ fontSize: "1.1rem", maxWidth: "700px", margin: "0 auto" }}>
          At Bright Step Tutoring, we are passionate about education.  
          Our mission is to provide engaging and effective tutoring in Maths, English, Science, and ICT 
          for primary and secondary school students.  
          With experienced tutors and personalized learning, we help every child reach their full potential.
        </p>
      </section>

      {/* Contact Section */}
      <section id="contact" style={{
        padding: "60px 20px",
        backgroundColor: "#003366",
        color: "#FFD700",
        textAlign: "center"
      }}>
        <h2 style={{ fontSize: "2rem", marginBottom: "20px" }}>Contact Us</h2>
        <p style={{ fontSize: "1.1rem", marginBottom: "10px" }}>
          📧 Email: brightsteptutoring@gmail.com
        </p>
        <p style={{ fontSize: "1.1rem", marginBottom: "10px" }}>
          📞 Phone: +234 912 408 3989
        </p>
        <p style={{ fontSize: "1.1rem" }}>
          📍 Location: Zaria, Nigeria
        </p>
      </section>
    </div>
  );
}

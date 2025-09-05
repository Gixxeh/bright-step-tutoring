import Image from "next/image";

export default function Home() {
  return (
    <div style={{ 
      display: "flex", 
      flexDirection: "column", 
      justifyContent: "center", 
      alignItems: "center", 
      height: "100vh", 
      fontFamily: "Arial, sans-serif",
      background: "linear-gradient(135deg, #003366, #FFD700)", 
      color: "#fff",
      textAlign: "center",
      padding: "20px"
    }}>
      {/* Logo */}
      <Image 
        src="/logo.png" 
        alt="Bright Step Tutoring Logo" 
        width={150} 
        height={150} 
        style={{ borderRadius: "50%", marginBottom: "20px" }}
      />

      {/* Heading */}
      <h1 style={{ fontSize: "2.5rem", marginBottom: "10px" }}>
        Welcome to Bright Step Tutoring
      </h1>
      <p style={{ fontSize: "1.2rem", maxWidth: "600px" }}>
        Personalized learning in Maths, English, Science, and ICT – built to help every student succeed.  
      </p>
    </div>
  );
}
